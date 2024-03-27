import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import Input from './ui/Input';
import Text from './ui/Text';

function LoginForm(): JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const navigate = useNavigate(); 
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
      setEmailError('');
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
      setPasswordError('');
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!validateEmail(email)) {
        setEmailError('Invalid email format');
        return;
      }
      if (!validatePassword(password)) {
        setPasswordError('Password must be at least 5 characters long and contain numbers');
        return;
      }
      console.log("Email:", email);
      console.log("Password:", password);
      navigate('/client-view');
      setEmail('');
      setPassword('');
    };
  
    const validateEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      return emailRegex.test(email);
    };
  
    const validatePassword = (password: string): boolean => {
      const passwordRegex = /^(?=.*\d).{5,}$/;
      return passwordRegex.test(password);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {emailError && <Text>{emailError}</Text>}
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <Text>{passwordError}</Text>}
        <Button type="submit">
          <Text>Login</Text>
        </Button>
      </form>
    );
  }
  
  export default LoginForm;

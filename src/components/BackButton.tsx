import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';

interface BackButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
}

const BackButton: React.FC<BackButtonProps> = ({ label, type = "button" }: BackButtonProps) => { // Set a default value for type
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/client-view');
  };

  return (
    <Button onClick={handleBack} type={type}> 
      {label}
    </Button>
  );
};

export default BackButton;

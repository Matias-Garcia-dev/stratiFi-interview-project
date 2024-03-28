import axios from 'axios';

export interface User {
  id: number;
  email: string;
  password: string;
  acesstoken: string;
}

export const fetchUserData = async (email: string, password: string): Promise<User> => {
  try {
    const response = await axios.get<User[]>('http://localhost:5000/users');
    const users = response.data;
    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
      throw new Error('Failed to fetch user data: Invalid email or password');
    }
    return user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error('Failed to fetch user data: Users not found');
      } else {
        throw new Error(`Failed to fetch user data: ${error.message}`);
      }
    } else {
      throw new Error('An unknown error occurred while fetching user data');
    }
  }
};

import axios from 'axios';

export interface User {
  id: number;
  email: string;
  password: string;
  accessToken: string;
  clients?: UserClient[];
}

export interface UserClient {
  id: number;
  userId: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface Client {
  id: number;
  userId: number;
  name: string;
  company: string;
  email: string;
  phoneNumber: string;
  address: string;
  accounts: { name: string; number: string; value: number }[];
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


export const fetchUserClientsById = async (userId: number): Promise<Client[]> => {
  try {
    const response = await axios.get<Client[]>('http://localhost:5000/clients');
    const clients = response.data;

  
    const userClients = clients.filter((client) => client.userId === userId);

    return userClients;
  } catch (error) {
    console.error('Error fetching user clients:', error);
    throw new Error('Failed to fetch user clients');
  }
};


export const fetchClientByNameandId = async (name: string, userId: number): Promise<Client | undefined> => {
  try {
    const response = await axios.get<Client[]>('http://localhost:5000/clients');
    const clients = response.data;

    const client = clients.find((client) => client.name === name && client.userId === userId);

    return client;
  } catch (error) {
    console.error('Error fetching client by name and user ID:', error);
    throw new Error('Failed to fetch client by name and user ID');
  }
};
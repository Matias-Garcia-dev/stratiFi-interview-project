import { render, screen } from '@testing-library/react';
import TableClients from './TableClients';
import { Account } from './TableAccount';

describe('TableClients', () => {
    interface Client {
        id: number;
        name: string;
        email: string;
        phoneNumber: string;
        address: string;
        userId: number;
        accounts: Account[];
      }
  const mockClients: Client[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@mailEx.com',
      phoneNumber: '1234567890',
      address: '123 Main St',
      userId: 130,
      accounts: [
        { name: 'Savings', number: '123456', value: 1000 },
        { name: 'Checking', number: '654321', value: 500 },
        { name: 'Investment', number: '987654', value: 5000 },
      ],
    },
  ];

  it('renders table with mock clients data', () => {
    render(<TableClients clients={mockClients} onRowClick={() => {}} />);

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone Number')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();

    mockClients.forEach((client) => {
      expect(screen.getByText(client.name)).toBeInTheDocument();
      expect(screen.getByText(client.email)).toBeInTheDocument();
      expect(screen.getByText(client.phoneNumber)).toBeInTheDocument();
      expect(screen.getByText(client.address)).toBeInTheDocument();
    });
  });
});

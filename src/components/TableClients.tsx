import React from 'react';
import TableClientRow from './ui/TableClientRow';
import { Client } from '../services/api';



interface ClientsTableProps {
  clients: Client[];
  onRowClick: (client: Client) => void;
}

const TableClients: React.FC<ClientsTableProps> = ({ clients, onRowClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <TableClientRow key={client.phoneNumber} client={client} onClick={() => onRowClick(client)} />
        ))}
      </tbody>
    </table>
  );
};

export default TableClients;

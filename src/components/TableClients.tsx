import React from 'react';
import TableClientRow from './ui/TableClientRow';

interface Client {
  id: number;
  name: string;
  company: string;
}

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
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <TableClientRow key={client.id} client={client} onClick={() => onRowClick(client)} />
        ))}
      </tbody>
    </table>
  );
};

export default TableClients;

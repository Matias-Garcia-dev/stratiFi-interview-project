import React from 'react';

interface Client {
  id: number;
  name: string;
  email: string;
}

interface TableClientRowProps {
  client: Client;
  onClick: () => void;
}

const TableClientRow: React.FC<TableClientRowProps> = ({ client, onClick }) => {
  return (
    <tr onClick={onClick}>
      <td>{client.name}</td>
      <td>{client.email}</td>
    </tr>
  );
};

export default TableClientRow;

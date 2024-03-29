import React from 'react';
import { UserClient } from '../services/api';

interface TableClientRowProps {
  client: UserClient;
  onClick: () => void;
}


const TableClientRow: React.FC<TableClientRowProps> = ({ client, onClick }) => {
  return (
    <tr onClick={onClick}>
      <td>{client.id}</td>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phoneNumber}</td>
      <td>{client.address}</td>
    </tr>
  );
};

export default TableClientRow;

import React from 'react';
import TableClientRow from './TableClientRow';
import { Client } from '../services/api';
import Text from './ui/Text';
import styles from './TableClients.module.css';


interface ClientsTableProps {
  clients: Client[];
  onRowClick: (client: Client) => void;
}

const headers = ['ID', 'Name', 'Email', 'Phone Number', 'Address'];

const TableClients: React.FC<ClientsTableProps> = ({ clients, onRowClick }) => {
  
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
      <thead>
        <tr>
        {headers.map((header, index) => (
        <Text key={index} element='th'>{header}</Text>
      ))}
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <TableClientRow key={client.phoneNumber} client={client} onClick={() => onRowClick(client)} />
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TableClients;

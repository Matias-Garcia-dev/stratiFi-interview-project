import React from 'react';
import styles from './TableAccount.module.css'

export interface Account {
    name: string;
    number: string;
    value: number;
  }

interface AccountTableProps {
  accounts: Account[];
}


const AccountTable: React.FC<AccountTableProps> = ({ accounts }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account) => (
          <tr key={account.number}>
            <td>{account.name}</td>
            <td>{account.number}</td>
            <td>{account.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountTable;

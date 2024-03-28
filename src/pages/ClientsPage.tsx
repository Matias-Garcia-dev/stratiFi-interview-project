import { useEffect, useState } from 'react';
import LogoutButton from '../components/LogoutButton';
import { fetchUserClientsById, Client } from '../services/api';
import TableClients from '../components/TableClients';
import Text from '../components/ui/Text'

function ClientsPage(): JSX.Element {
  const [clients, setClients] = useState<Client[]>([]);
  const userDataJson = (localStorage.getItem('userData') || '{}')
  const user = JSON.parse(userDataJson)
  const userId = user.userId
  

  useEffect(() => {
    const fetchClients = async () => {
      if (userId) {
        try {
          const fetchedClients = await fetchUserClientsById(userId);
          setClients(fetchedClients);
        } catch (error) {
          console.error('Error fetching clients:', error);
        }
      }
    };

    fetchClients();
  }, [userId]);


  if (!userId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Text element='h1'>Clients Page</Text>
      <Text element='h2'>User ID: {user.id}</Text>
      <Text element='p'>Client list.</Text>
      <TableClients clients={clients} onRowClick={(client) => console.log('Clicked client:', client)} />
      <LogoutButton />
    </div>
  );
}

export default ClientsPage;

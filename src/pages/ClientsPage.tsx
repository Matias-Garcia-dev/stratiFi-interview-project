import { useEffect, useState } from 'react';
import LogoutButton from '../components/LogoutButton';
import { fetchUserClientsById, Client } from '../services/api';
import TableClients from '../components/TableClients';
import Text from '../components/ui/Text'
import { useNavigate } from 'react-router-dom';


function ClientsPage(): JSX.Element {
  const [clients, setClients] = useState<Client[]>([]);
  const navigate = useNavigate();
  const userDataJson = (localStorage.getItem('userData') || '{}');
  const user = JSON.parse(userDataJson);
  const userId = user.userId;
  

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
  const handleProfileClick = (client: Client) => {
    navigate(`/client-view/profile/${encodeURIComponent(client.name)}`);
  };


  if (!userId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Text element='h1'>Clients Page</Text>
      <Text element='h2'>User ID:{userId}</Text>
      <Text element='p'>Client list.</Text>
      <TableClients clients={clients} onRowClick={handleProfileClick} />
      <LogoutButton />
    </div>
  );
}

export default ClientsPage;

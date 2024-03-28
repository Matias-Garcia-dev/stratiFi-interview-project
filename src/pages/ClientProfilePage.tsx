import { useEffect, useState } from 'react';
import { fetchClientByNameandId } from '../services/api';
import { Client } from '../services/api';
interface ClientProfilePageProps {
  clientName?: string; 
}

function ClientProfilePage({ clientName }: ClientProfilePageProps): JSX.Element {

  const [client, setClient] = useState<Client | null>(null);
  const userDataJson = (localStorage.getItem('userData') || '{}')
  const user = JSON.parse(userDataJson)
  const userId = user.userId

  useEffect(() => {
    const decodedClientName = decodeURIComponent(clientName!);
    const fetchClient = async () => {
      try {
        const fetchedClient = await fetchClientByNameandId(decodedClientName , userId);
        console.log(fetchedClient)
        setClient(fetchedClient!);
      } catch (error) {
        console.error('Error fetching client:', error);
      }
    };

    fetchClient();
  }, [clientName, userId]);

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Client Profile</h1>
      <p>Name: {client.name}</p>
      <p>Company: {client.company}</p>
      {/* Add other profile information here */}
    </div>
  );
}

export default ClientProfilePage;

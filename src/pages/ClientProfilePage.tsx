import { useEffect, useState } from 'react';
import { fetchClientByNameandId } from '../services/api';
import { Client } from '../services/api';
import Text from '../components/ui/Text';
import TableAccount from '../components/TableAccount';
import BackButton from '../components/BackButton';


interface ClientProfilePageProps {
  clientName?: string; 
}

interface ClientDetail {
  label: string;
  property: keyof Client;
}

const clientDetails: ClientDetail[] = [
  { label: 'Email', property: 'email' },
  { label: 'Phone Number', property: 'phoneNumber' },
  { label: 'Address', property: 'address' },
];

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

  console.log(client)

  
  

  return (
    <div>
      <Text element="h1">Client Profile</Text>
      <Text element='h2'>Name: {client.name}</Text>
      {clientDetails.map(({ label, property }) => (
        <Text key={label} element='p'>
          {label}: {(client[property] as string | number)}
        </Text>
        
      ))}
      <Text element="h2">Accounts:</Text>
      <TableAccount accounts={client.accounts} />
      <BackButton label="Back to Client View" />
    </div>
  );
}

export default ClientProfilePage;

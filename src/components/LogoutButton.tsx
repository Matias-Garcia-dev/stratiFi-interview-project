import { useDispatch } from 'react-redux';
import Button from './ui/Button';
import Text from './ui/Text';
import { logoutUser } from '../services/store/userSlice';
import { useNavigate } from 'react-router-dom';

function LogoutButton(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login')
  };

  return (
    <Button type="button" onClick={handleLogout}>
      <Text>Logout</Text>
    </Button>
  );
}

export default LogoutButton;

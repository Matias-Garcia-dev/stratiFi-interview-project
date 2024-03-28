import React, {ReactNode} from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const  userDataJson = (localStorage.getItem('userData') || '{}');
  const authentication = JSON.parse(userDataJson)
  const isAuthenticated = authentication.accessToken
  
  return (isAuthenticated && isAuthenticated != null) ? <>{children}</> : <Navigate to="/login" replace />;
};


export default PrivateRoute;

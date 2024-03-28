import React, {ReactNode} from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const  isAuthenticated = localStorage.getItem('accessToken');

  console.log(isAuthenticated,"auth")
  return (isAuthenticated && isAuthenticated != null) ? <>{children}</> : <Navigate to="/login" replace />;
};


export default PrivateRoute;

import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ClientProfilePage from '../pages/ClientProfilePage';

interface ProtectedRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const userDataJson = localStorage.getItem('userData') || '{}';
  const authentication = JSON.parse(userDataJson);
  const isAuthenticated = authentication.accessToken;
  const isProfilePage = location.pathname.startsWith('/client-view/profile');
  

  if (isAuthenticated && isAuthenticated !== null && isProfilePage) {
    const clientName = location.pathname.split('/').pop(); 
    return <ClientProfilePage clientName={clientName} />;
  }

  return isAuthenticated && isAuthenticated !== null ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;

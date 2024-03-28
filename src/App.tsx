import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import ClientViewPage from './pages/ClientsPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/client-view" element={
        <PrivateRoute>
          <ClientViewPage/>
        </PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;

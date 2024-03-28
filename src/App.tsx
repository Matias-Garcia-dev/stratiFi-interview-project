import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import ClientViewPage from './pages/ClientsPage';
import PrivateRoute from './utils/PrivateRoute';
import ClientProfilePage from './pages/ClientProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/client-view" element={
        <PrivateRoute>
          <ClientViewPage/>
          <Route path="profile" element={<ClientProfilePage />} />
        </PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;

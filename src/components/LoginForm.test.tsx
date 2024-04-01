import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../services/store/store';
import LoginForm from './LoginForm';
import ClientsPage from '../pages/ClientsPage';

describe('LoginForm', () => {
  it('renders without crashing Email and Password input', () => {
    render(
      <Router>
        <Routes>
            <Route path="/" element={
                <Provider store={store}>
                    <LoginForm />
                </Provider>
            } />
        </Routes>
      </Router>
    );

    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
  });

  it('validates email and password inputs', () => {
    render(
        <Router>
        <Routes>
            <Route path="/" element={
                <Provider store={store}>
                    <LoginForm />
                </Provider>
            } />
        </Routes>
      </Router>
    );

    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'invalid-email' } });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText('Invalid email format')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'valid@example.com' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: '1234' } });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText('Password must be at least 5 characters long and contain numbers')).toBeInTheDocument();

  });

  it('submits the form with valid inputs and navigates to client-view', async () => {
    render(
        <Provider store={store}>
            <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/client-view" element={<ClientsPage/>}/>
            </Routes>
        </Router>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'admin@admin.com' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'admin123' } });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    await screen.findByText('Clients Page');

    expect(screen.getByText('Clients Page')).toBeInTheDocument();
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ClientsPage from './ClientsPage';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../services/store/store';

describe('ClientsPage', () => {
  beforeEach(() => {
    const mockLocalStorage = {
      getItem: () => JSON.stringify({  userId:130 }),
      setItem: () => {},
      removeItem: () => {},
    };
    Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });
  });

  it('renders correctly', async () => {
    
  
    await act(async () => {
      render( <Provider store={store}>
                    <Router>
                        <Routes>
                                    <Route path="/" element={
                                        <ClientsPage />
                                    } />
                        </Routes>
                    </Router>
            </Provider> );
    });


    expect(screen.getByText('Clients Page')).toBeInTheDocument();
    expect(screen.getByText('User ID:130')).toBeInTheDocument();
  });
});

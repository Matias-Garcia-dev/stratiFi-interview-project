import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect, beforeEach  } from 'vitest';
import ClientProfilePage from './ClientProfilePage';
//import ClientsPage from './ClientsPage';
import { Provider } from 'react-redux';
import store from '../services/store/store';







describe('ClientProfilePage', () => {

  beforeEach(() => {
    const mockLocalStorage = {
      getItem: () => JSON.stringify({  userId:130 }),
      setItem: () => {},
      removeItem: () => {},
    };
    Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

    
  });

  it('Testing "Go back" button', async () => {
    render(
      <MemoryRouter initialEntries={['/client-view/profile/John%20Doe']}>
        <Provider store={store}>
        <Routes>
         
           <Route
            path="/client-view/profile/:clientName"
            element={<ClientProfilePage />}
          > 
           <Route
            path="profile/:John%20Doe"
            element={<ClientProfilePage />}
          />
          </Route>
        </Routes>
        </Provider>
      </MemoryRouter>
    );

    //fireEvent.click(screen.getByText('Back to Client View'));

    //expect(screen).toHaveBeenCalledWith('/client-view')

    //expect(screen.getByText('Loading...')).toBeInTheDocument();
  
    //screen.getByText('Back to Client View')

    //await screen.findByText('Back to Client View');
    expect(screen.getByText('Loading Profile...')).toBeInTheDocument()

  });
});

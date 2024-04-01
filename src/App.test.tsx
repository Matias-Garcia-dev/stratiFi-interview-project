import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './services/store/store';

describe('App', () => {
  it('renders LoginPage', () => {
    const { getByTestId } = render( 
      <Provider store={store}>
          <App />
      </Provider>
      );

    const loginPageElement = getByTestId('loginPage');

    expect(loginPageElement).toBeInTheDocument();
  });
});
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders LoginPage', () => {
    const { getByTestId } = render(<App />);

    const loginPageElement = getByTestId('loginPage');

    expect(loginPageElement).toBeInTheDocument();
  });
});
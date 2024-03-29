import {describe, it, expect} from 'vitest'
import {render} from '@testing-library/react'
import LoginPage from './LoginPage'

describe('LoginPage component', () => {
    it('renders LoginPage properly', () => {
      // Render the LoadingPage component
      const { getByText } = render(<LoginPage />);
      
      // Assert that the component renders without crashing
      expect(getByText('Loading...')).toBeInTheDocument();
    });
  });
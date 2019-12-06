import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders Dashboard', () => {
  const { getByText } = render(<App />);
  getByText(/balls/i);

});

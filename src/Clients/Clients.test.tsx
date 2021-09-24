import React from 'react';
import { render, screen } from '@testing-library/react';
import Clients from './Clients';

test('renders learn react link', () => {
  render(<Clients />);
  const linkElement = screen.getByText(/Clients/i);
  expect(linkElement).toBeInTheDocument();
});



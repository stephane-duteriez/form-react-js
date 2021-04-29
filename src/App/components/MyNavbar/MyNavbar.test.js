import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyNavbar from './MyNavbar';

describe('<MyNavbar />', () => {
  test('it should mount', () => {
    render(<MyNavbar />);
    
    const navbar = screen.getByTestId('Navbar');

    expect(navbar).toBeInTheDocument();
  });
});
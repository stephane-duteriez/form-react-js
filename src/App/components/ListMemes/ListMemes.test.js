import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ListMemes from './ListMemes';

describe('<ListMemes />', () => {
  test('it should mount', () => {
    render(<ListMemes />);
    
    const listMemes = screen.getByTestId('ListMemes');

    expect(listMemes).toBeInTheDocument();
  });
});
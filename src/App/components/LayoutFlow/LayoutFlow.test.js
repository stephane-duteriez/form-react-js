import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LayoutFlow from './LayoutFlow';

describe('<LayoutFlow />', () => {
  test('it should mount', () => {
    render(<LayoutFlow />);
    
    const layoutFlow = screen.getByTestId('LayoutFlow');

    expect(layoutFlow).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@/shared/lib/testing';
import { ThemeMode } from './theme-mode';

describe('ThemeMode', () => {
  it('should render text correctly', () => {
    render(<ThemeMode />);

    const heading = screen.getByRole('heading');

    expect(heading).toHaveTextContent('dark mode');
  });
});

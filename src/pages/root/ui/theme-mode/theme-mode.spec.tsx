import React from 'react';
import { ThemeMode } from './theme-mode';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/shared/lib/testing';
import { routes } from '@/shared/routes';

describe('ThemeMode', () => {
  it('should render text correctly', () => {
    renderWithProviders(<ThemeMode />, { initialEntries: [routes.ROOT] });

    const heading = screen.getByRole('heading');

    expect(heading).toHaveTextContent('dark mode');
  });
});

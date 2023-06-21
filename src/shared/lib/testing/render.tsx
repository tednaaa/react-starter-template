import React, { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';

import { theme } from '@/app/providers/theme';
import { MemoryRouter } from 'react-router-dom';

interface Props {
  children: ReactNode;
  initialEntries?: string[];
}

const Providers: FC<Props> = ({ children, initialEntries }) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    </ThemeProvider>
  );
};

type Options = Omit<RenderOptions, 'wrapper'>;

export const renderWithProviders = (
  ui: ReactElement,
  props?: Omit<Props, 'children'>,
  options?: Options
) =>
  render(ui, {
    wrapper: ({ children }) => (
      <Providers initialEntries={props?.initialEntries}>{children}</Providers>
    ),
    ...options,
  });

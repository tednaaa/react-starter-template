import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { App } from '@/app/app';

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: App, ...options });

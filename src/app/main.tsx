import { createRoot } from 'react-dom/client';

import { App } from './app';

import './scss/main.scss';
import { StrictMode } from 'react';

const container = document.querySelector('#app') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

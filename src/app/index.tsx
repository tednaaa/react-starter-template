import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';

import './scss/index.scss';

const container = document.querySelector('#app') as HTMLElement;
const root = createRoot(container);

root.render(<App />);

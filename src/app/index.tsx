import React from 'react';
import { createRoot } from 'react-dom/client';
import 'focus-visible';

import { App } from './app';

import './scss/index.scss';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);

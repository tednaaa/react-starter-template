import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RootPage } from './root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
]);

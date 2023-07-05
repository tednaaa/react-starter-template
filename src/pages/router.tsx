import { createBrowserRouter } from 'react-router-dom';

import { routes } from '@/shared/routes';

import { RootPage } from './root';

export const router = createBrowserRouter([
  {
    path: routes.ROOT,
    element: <RootPage />,
  },
]);

import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/pages/router';

export const App: FC = () => {
  return <RouterProvider router={router} />;
};

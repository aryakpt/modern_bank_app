// CORE
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// CONSTANT
import paths from './paths';

// UI
import { Home } from '../pages';

const router = createBrowserRouter([
  {
    path: paths.home,
    element: <Home />,
  },
]);

export default router;

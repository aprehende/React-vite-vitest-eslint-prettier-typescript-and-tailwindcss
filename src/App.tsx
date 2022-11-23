import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { Home } from './pages';
import { theme } from './constants';
import { PrivateLayout } from './layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

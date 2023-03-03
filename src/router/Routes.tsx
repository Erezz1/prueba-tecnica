import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CityPage from '../pages/City.page';
import PrincipalPage from '../pages/Principal.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrincipalPage />,
  },
  {
    path: '/:id',
    element: <CityPage />,
  },
]);

const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes;

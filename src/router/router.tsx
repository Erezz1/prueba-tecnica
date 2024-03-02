import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from '../pages';
import Add from '../pages/add';
import Details from '../pages/details';
import Edit from '../pages/edit'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'add',
    element: <Add />,
  },
  {
    path: 'details/:employeeId',
    element: <Details />,
  },
  {
    path: 'edit/:employeeId',
    element: <Edit />,
  },
]);

export const Router = () => <RouterProvider router={routes} />

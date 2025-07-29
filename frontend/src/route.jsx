import { createBrowserRouter } from 'react-router-dom';
import Login from '../View/Login';
import Register from '../View/Register';
import Users from '../View/Users';
import NotFound from '../View/NotFound';
import DefaultLayout from '../Components/DefaultLayout';
import GuestLayout from '../Components/GuestLayout';
import Dashboard from '../View/Dashboard';

const router = createBrowserRouter([

    {
        path: '/',
        element: <DefaultLayout />,
        children :[
            {
                path: '/users',
                element: <Users />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            }
        ]
    },

    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ]
    },


    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;

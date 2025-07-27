import {BrowserRouter} from 'react-router-dom';
import Login from '../View/Login';
import Register from '../View/Register';
import Users from '../View/Users';


const router = BrowserRouter({
    pathname: '/login',
    element: <Login />,
},{
    pathname : '/register',
    element: <Register />,
},
{
    pathname: '/users',
    element: <Users />,
})

export default router;
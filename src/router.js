import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
const routes = [
    {
        path: '/home',
        exact : true,
        main: ({history}) => <Home history={history}/>
    },
    {
        path: '/login',
        exact : false,
        main: ({history}) => <Login history={history}/>
    },
    {
        path: '/DashBoard',
        exact : false,
        main: ({history}) => <DashBoard history={history}/>
    },
];

export default routes;
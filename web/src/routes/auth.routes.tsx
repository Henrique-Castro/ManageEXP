import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Login from '../pages/Login';

const AuthRoutes: React.FC = () =>  {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default AuthRoutes;

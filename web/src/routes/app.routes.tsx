import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Dashboard from '../pages/Dashboard';
import Dominios from '../pages/Dominios';
import Certificados from '../pages/Certificados';
import Clientes from '../pages/Clientes';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/dominios' component={Dominios} />
                <Route path='/certificados' component={Certificados} />
                <Route path='/clientes' component={Clientes} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRoutes;

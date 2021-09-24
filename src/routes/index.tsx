import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ResetPassword from '../pages/ResetPassword';
import Home from '../pages/Home';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reset-password" exact component={ResetPassword} />
    </Switch>
);

export default Routes;

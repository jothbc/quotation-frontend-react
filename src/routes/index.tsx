import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Logon from '../pages/Logon';
import Dashboard from '../pages/Dashboard';
import Inscreverse from '../pages/Inscreverse';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Logon} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/inscrever-se" component={Inscreverse} />
  </Switch>
);

export default Routes;

import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Logon from '../pages/Logon';
import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import QuotationOwner from '../pages/QuotationOwner';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Logon} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/signup" component={SignUp} />
    <Route path="/quotation-owner" component={QuotationOwner} />
  </Switch>
);

export default Routes;

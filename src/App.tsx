import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;

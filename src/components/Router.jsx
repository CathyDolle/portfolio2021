import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './../Routes';

const AppRouter = () => (
  <Router>
    <Switch>
      {routes.map(({ path, component }, i) => (
        <Route key={i} path={path} component={component} exact />
      ))}
    </Switch>
  </Router>
);

export default AppRouter;
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageNotFound from './common/PageNotFound';

import App from './App';
import Home from './components/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App}></Route>

        <Route
          key="business"
          path="/business/"
          render={(props) => <Home {...props} />}
        ></Route>
        <Route
          key="entertainment"
          path="/entertainment/"
          render={(props) => <Home {...props} />}
        ></Route>
        <Route
          key="health"
          path="/health/"
          render={(props) => <Home {...props} />}
        ></Route>
        <Route
          key="science"
          path="/science/"
          render={(props) => <Home {...props} />}
        ></Route>
        <Route
          key="sports"
          path="/sports/"
          render={(props) => <Home {...props} />}
        ></Route>
        <Route
          key="technology"
          path="/technology/"
          render={(props) => <Home {...props} />}
        ></Route>
        <Route
          key="nation"
          path="/nation/"
          render={(props) => <Home {...props} />}
        ></Route>

        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

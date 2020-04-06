import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes, navbarLinks } from "shared/routes.config";
import { PageWrapper } from "components";

const App = () => {
  return (
    <Router>
      <PageWrapper links={navbarLinks}>
        <Switch>
          {routes.map((route, key) => (
            <Route
              exact={route.exact}
              key={key}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </PageWrapper>
    </Router>
  );
};

export default App;

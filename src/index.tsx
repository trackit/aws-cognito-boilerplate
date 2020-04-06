import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes, navbarLinks } from "shared/routes.config";
import { GlobalStyle } from "shared/styles";
import { PageWrapper } from "components";
import { amplifyConfig } from "shared/amplify.config";

Amplify.configure(amplifyConfig);

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
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
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

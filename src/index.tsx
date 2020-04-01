import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "shared/routes.config";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {routes.map((route, key) => (
          <Route exact={route.exact} key={key} path={route.path}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

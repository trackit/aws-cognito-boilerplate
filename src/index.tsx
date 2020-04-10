import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle } from "shared/styles";
import { amplifyConfig, authenticatorConfig } from "shared/amplify.config";
import { Config, isAuthenticated } from "shared/utils";
import { Authenticator } from "aws-amplify-react";
import App from "App";

const Bootstrap = ({ authState }: any) => {
  if (isAuthenticated(authState || "")) {
    return <App />;
  }
  return null;
};

const CognitoBoilerplate = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Authenticator {...authenticatorConfig}>
        <Bootstrap />
      </Authenticator>
    </React.StrictMode>
  );
};

// Wait for Amplify configuration apply
(async () => {
  await Config.getInstance().init(amplifyConfig);
  ReactDOM.render(<CognitoBoilerplate />, document.getElementById("root"));
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

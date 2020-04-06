import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle } from "shared/styles";
import { signUpConfig, amplifyConfig } from "shared/amplify.config";
import { isAuthenticated, Config } from "shared/utils";
import { Authenticator, UsernameAttributes } from "aws-amplify-react";
import "@aws-amplify/ui/dist/style.css";
import App from "App";

Config.getInstance().init(amplifyConfig);

const AppWrapper = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Authenticator
        usernameAttributes={UsernameAttributes.EMAIL}
        signUpConfig={signUpConfig}
        onStateChange={(authState) => setIsAuth(isAuthenticated(authState))}
      >
        {isAuth && <App />}
      </Authenticator>
    </React.Fragment>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Auth } from "aws-amplify";
import { Authenticator } from "aws-amplify-react";
import { ToastProvider } from "react-toast-notifications";
import * as serviceWorker from "./serviceWorker";

// Shared utils
import { GlobalStyle } from "shared/styles";
import { Config, isAuthenticated } from "shared/utils";
import { amplifyConfig, authenticatorConfig } from "shared/amplify.config";
import { AuthState, AuthData } from "shared/interfaces/amplify.interface";
import { isInGroup } from "shared/amplify-utils/api.utils";

// Shared components
import {
  CustomConfirmSignUp,
  CustomSignIn,
  CustomSignUp,
  CustomForgotPassword,
} from "shared/components/Auth";
import { Logo } from "shared/components/Auth/common";
import { AdminView, UsersView } from "pages";
import App from "App";

// Amplify video
import awsvideoconfig from "./aws-video-exports";

interface Props {
  authState?: AuthState;
  authData?: AuthData;
}

const Guard = ({ authState, authData }: Props) => {
  useEffect(() => {
    const refreshToken = async () => {
      try {
        const cognitoUser = await Auth.currentAuthenticatedUser();
        const currentSession = await Auth.currentSession();
        cognitoUser.refreshSession(
          currentSession.getRefreshToken(),
          () => null
        );
      } catch (e) {
        console.log("Unable to refresh Token", e);
      }
    };
    if (isAuthenticated(authState || "")) {
      refreshToken();
    }
  });

  if (isAuthenticated(authState || "")) {
    if (isInGroup(authData || null, "admin"))
      return (
        <ToastProvider>
          <AdminView />
        </ToastProvider>
      );
    if (isInGroup(authData || null, "users"))
      return <UsersView awsvideoconfig={awsvideoconfig} />;
    return <App />;
  }
  return null;
};

const CognitoBoilerplate = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Authenticator {...authenticatorConfig}>
        <Guard />
        <CustomSignIn>
          <Logo
            src="https://camo.githubusercontent.com/a1c4be4671e634c1461fe578cca2c97c7b11e486/68747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f747261636b69742d7075626c69632d6172746966616374732f6769746875622d706167652f6c6f676f2e706e67"
            alt="logo"
          />
        </CustomSignIn>
        <CustomConfirmSignUp>
          <Logo
            src="https://camo.githubusercontent.com/a1c4be4671e634c1461fe578cca2c97c7b11e486/68747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f747261636b69742d7075626c69632d6172746966616374732f6769746875622d706167652f6c6f676f2e706e67"
            alt="logo"
          />
        </CustomConfirmSignUp>
        <CustomForgotPassword>
          <Logo
            src="https://camo.githubusercontent.com/a1c4be4671e634c1461fe578cca2c97c7b11e486/68747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f747261636b69742d7075626c69632d6172746966616374732f6769746875622d706167652f6c6f676f2e706e67"
            alt="logo"
          />
        </CustomForgotPassword>
        <CustomSignUp {...authenticatorConfig}>
          <Logo
            src="https://camo.githubusercontent.com/a1c4be4671e634c1461fe578cca2c97c7b11e486/68747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f747261636b69742d7075626c69632d6172746966616374732f6769746875622d706167652f6c6f676f2e706e67"
            alt="logo"
          />
        </CustomSignUp>
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

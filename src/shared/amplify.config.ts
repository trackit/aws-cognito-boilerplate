import { ReactNode } from "react";
import { colors } from "./styles";
import "@aws-amplify/ui/dist/style.css";
import { UsernameAttributes } from "aws-amplify-react";
import { IAuthenticatorProps } from "aws-amplify-react/lib-esm/Auth/Authenticator";
import {
  AmplifyConfig,
  AmplifyTheme,
  SignUpCustomConfig,
} from "shared/interfaces/amplify.interface";

/**
 * You can create your own theme and use it to render Amplify components
 * Your custom theme must use the selectors from the following
 * template: https://github.com/aws-amplify/amplify-js/blob/master/packages/aws-amplify-react/src/Amplify-UI/Amplify-UI-Theme.tsx
 */
const amplifyTheme: AmplifyTheme = {
  container: { backgroundColor: colors.background },
};

/**
 * When using custom components you can hide default Amplify components here
 * by adding them the amplifyHiddenComponents array
 */
const amplifyHiddenComponents: ReactNode[] = [];

/**
 * This object is used by Config.getInstance().init()
 * or Amplify.configure() method.
 * To add more fields check the following link: https://aws-amplify.github.io/docs/js/authentication#manual-setup
 */
export const amplifyConfig: AmplifyConfig = {
  Auth: {
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEBCLIENT_ID,
  },
  language: "us",
};

/**
 * This object is used by Authenticator signUpConfig property
 * to configure signUp form. Custom field is a flag which indicates whether or not the field is ‘custom’ in the User Pool.
 * For more informations check the following link: https://aws-amplify.github.io/docs/js/react#signup-configuration
 */
export const signUpCustomConfig: SignUpCustomConfig = {
  signUpFields: [
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "string",
      custom: false,
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
      custom: false,
      placeholder: "Enter your password",
    },
  ],
};

/**
 * Used by Authenticator component as configuration
 */
export const authenticatorConfig: IAuthenticatorProps = {
  theme: amplifyTheme,
  usernameAttributes: UsernameAttributes.EMAIL,
  hide: amplifyHiddenComponents,
  signUpConfig: signUpCustomConfig,
};

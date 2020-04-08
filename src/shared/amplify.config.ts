import { AmplifyConfig } from "shared/interfaces/amplify.interface";

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
  language: 'us'
};

/**
 * This object is used by Authenticator signUpConfig property
 * to configure signUp form
 */
export const signUpConfig = {
  header: "",
  hideAllDefaults: true,
  defaultCountryCode: "33",
  signUpFields: [
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "string",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
      placeholder: "Enter your password",
    }
  ],
};



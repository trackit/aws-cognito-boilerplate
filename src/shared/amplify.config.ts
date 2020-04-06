import { AmplifyConfig } from "shared/interfaces/amplify.interface";

export const amplifyConfig: AmplifyConfig = {
  Auth: {
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEBCLIENT_ID,
  },
  language: 'us'
};

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
    },
  ],
};



import CSS from "csstype";

/**
 * Used by Auth
 */
interface CookieStorage {
  domain: string | undefined;
  path?: string | undefined;
  expires?: number;
  secure?: boolean;
}

/**
 * Used by Auth
 */
interface Oauth {
  domain: string | undefined;
  scope: [string | undefined];
  redirectSignIn: string | undefined;
  redirectSignOut: string | undefined;
  responseType: string | undefined;
}

/**
 * Used by AmplifyConfig
 */
interface Auth {
  identityPoolId: string | undefined;
  region: string | undefined;
  identityPoolRegion?: string | undefined;
  userPoolId?: string | undefined;
  userPoolWebClientId?: string | undefined;
  mandatorySignIn?: string | undefined;
  cookieStorage?: CookieStorage;
  storage?: {};
  authenticationFlowType?: string | undefined;
  clientMetadata?: {};
  oauth?: Oauth;
}

/**
 * Used by isAuthenticated utility
 */
export enum AuthState {
  SIGN_IN = "signIn",
  SIGN_UP = "signUp",
  CONFIRM_SIGN_IN = "confirmSignIn",
  CONFIRM_SIGN_UP = "confirmSignUp",
  FORGOT_PASSWORD = "forgotPassword",
  REQUIRE_NEW_PASSWORD = "requireNewPassword",
  VERIFY_CONTACT = "verifyContact",
  SIGNED_IN = "signedIn",
}

/**
 * Used by SignUpConfig
 */
export interface SignUpFields {
  label: string;
  key: string;
  required: boolean;
  displayOrder: number;
  type: "email" | "password" | "username" | "string";
  custom: boolean;
  placeholder: string;
}

/**
 * Used by customSignUpFields
 */
export interface SignUpCustomConfig {
  header?: string;
  defaultCountryCode?: string;
  signUpFields?: SignUpFields[];
  hideAllDefaults?: boolean;
  hiddenDefaults?: string[];
}

/**
 * Used by Amplify.configure()
 */
export interface AmplifyConfig {
  Auth: Auth;
  language?: string;
}

/**
 * Used by the Authenticator theme prop
 */
export interface AmplifyTheme {
  container?: CSS.Properties;
  formContainer?: CSS.Properties;
  formSection?: CSS.Properties;
  formField?: CSS.Properties;

  sectionHeader?: CSS.Properties;
  sectionBody?: CSS.Properties;
  sectionFooter?: CSS.Properties;
  sectionFooterPrimaryContent?: CSS.Properties;
  sectionFooterSecondaryContent?: CSS.Properties;

  input?: CSS.Properties;
  button?: CSS.Properties;
  photoPickerButton?: CSS.Properties;
  photoPlaceholder?: CSS.Properties;
  signInButton?: CSS.Properties;
  signInButtonIcon?: CSS.Properties;
  signInButtonContent?: CSS.Properties;
  amazonSignInButton?: CSS.Properties;
  facebookSignInButton?: CSS.Properties;
  googleSignInButton?: CSS.Properties;
  oAuthSignInButton?: CSS.Properties;

  formRow?: CSS.Properties;
  strike?: CSS.Properties;
  strikeContent?: CSS.Properties;
  actionRow?: CSS.Properties;
  a?: CSS.Properties;

  hint?: CSS.Properties;
  radio?: CSS.Properties;
  label?: CSS.Properties;
  inputLabel?: CSS.Properties;
  toast?: CSS.Properties;

  navBar?: CSS.Properties;
  nav?: CSS.Properties;
  navRight?: CSS.Properties;
  navItem?: CSS.Properties;
  navButton?: CSS.Properties;
}

export interface AddToGroup {
  apiName: string;
  path: string;
  username: string;
  groupname: string;
}

export interface AuthData {
  username: string;
  signInUserSession: {
    idToken: { payload: { [key: string]: any } };
  };
  attributes: {
    sub: string;
    email: string;
    email_verified: boolean;
  };
}

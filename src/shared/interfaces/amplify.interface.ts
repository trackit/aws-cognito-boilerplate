// Used by Auth
interface CookieStorage {
  domain: string | undefined;
  path?: string | undefined;
  expires?: number;
  secure?: boolean;
}

// Used by Auth
interface Oauth {
  domain: string | undefined;
  scope: [string | undefined];
  redirectSignIn: string | undefined;
  redirectSignOut: string | undefined;
  responseType: string | undefined;
}

// Used by AmplifyConfig
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

// Used by isAuthenticated utility
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

// TODO: Complete this interface
export interface SignUpFields {

}

// Used by Amplify.configure()
export interface AmplifyConfig {
  Auth: Auth;
  language?: string;
}
interface CookieStorage {
  domain: string | undefined;
  path?: string | undefined;
  expires?: number;
  secure?: boolean;
}

interface Oauth {
  domain: string | undefined;
  scope: [string | undefined];
  redirectSignIn: string | undefined;
  redirectSignOut: string | undefined;
  responseType: string | undefined;
}

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

export interface AmplifyConfig {
  Auth: Auth;
}

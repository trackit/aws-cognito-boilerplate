import Amplify from "aws-amplify";
import { AuthState, AmplifyConfig } from "shared/interfaces/amplify.interface";

export const isAuthenticated = (state: string) => {
  return state === AuthState.SIGNED_IN;
};

/*
  Config is used to initialize application with Amplify
*/
export class Config extends Amplify {
  private static instance: Config;

  private constructor() {
    super();
  }

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  public init(amplifyConfig: AmplifyConfig) {
    Config.configure(amplifyConfig);
    Config.I18n.setLanguage(amplifyConfig.language || 'us');
  }
}

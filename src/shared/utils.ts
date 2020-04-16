import Amplify from "aws-amplify";
import { AuthState, AmplifyConfig } from "shared/interfaces/amplify.interface";

/**
 * This function is used to capiatalize first letter of a string
 * @param {string} str string to capitalize
 */
export const capitalizeFirstLetter = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

/**
 * This function is used to control if the received
 * state is equal to the signedIn value.
 *
 * TODO: We can use lazy loading based on the return of isAuthenticated function.
 * Until the user is not connected we don't load unecessary component,
 * basically the App components in this context.
 * @param {string} state authState returned by onStateChange
 */
export const isAuthenticated = (state: string) => {
  return state === AuthState.SIGNED_IN;
};

/**
 * This class is used for project configuration.
 * It follow a Singleton pattern.
 * @extends Amplify Extends Amplify class
 */
export class Config extends Amplify {
  private static instance: Config;

  private constructor() {
    super();
  }

  /**
   * This static method returns class instance if exist,
   * otherwise it returns a new instance
   */
  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  /**
   * This method initialize Amplify configuration
   * @example
   * Config.getInstance().init(amplifyConfig)
   */
  public async init(amplifyConfig: AmplifyConfig) {
    try {
      /**
       * We unfornately have to apply this workaround because Webpack performs
       * a static analyse at build time. It doesn't try to infer variables.
       * For more information check this issue: https://github.com/webpack/webpack/issues/6680#issuecomment-370800037
       */
      const name = "aws-exports";
      const module = await import(`../${name}`);
      Config.configure(module.default);
    } catch (error) {
      Config.configure(amplifyConfig);
      Config.I18n.setLanguage(amplifyConfig.language || "us");
    }
  }
}

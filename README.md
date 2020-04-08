# aws-boilerplate-cognito

AWS boilerplate with AWS Cognito

## Infrastructure

![Access AWS Services with a User Pool and an Identity Pool](https://docs.aws.amazon.com/cognito/latest/developerguide/images/scenario-identity-pool.png)

## Infrastructure

At first, you need to have the credetials for your AWS account in `~/.aws/credentials`.
You can edit routing by editing `shared/routes.config.ts` file.

## Testing

Run Cypress whitout GUI using `yarn run cy:run`
Run Cypress with GUI using `yarn run cy:open`

# Configuration

.env file is by default present in .gitignore file.
You must copy the template from example.env file to make sure app retrieve needed variables.

## Amplify authentication configuration

We provide to Amplify a configuration file that can be edited inside `shared/amplify.config.ts`

```ts
export const amplifyConfig: AmplifyConfig = {
  Auth: {
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEBCLIENT_ID,
  },
  language: "us",
};
```

`amplifyConfig` object is an `AmplifyConfig` interface

```ts
export interface AmplifyConfig {
  Auth: Auth;
  language?: string;
}
```

By default we provide inside `example.env` the required object by Amplify for the authentication configuration but if you need to add custom settings you are free to add them inside your environment file.

If you need to add a new service, for instance storage service (Amazon S3) you can create a new entry to the amplifyConfig object and create a new interface.
i.e:

```ts
export const amplifyConfig: AmplifyConfig = {
  Auth: {
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEBCLIENT_ID,
  },
  Storage: {
        AWSS3: {
            bucket: '', //REQUIRED -  Amazon S3 bucket
            region: 'XX-XXXX-X', //OPTIONAL -  Amazon service region
        }
    }
  language: 'us'
};
```

For more information refers to [Amplify documentation](https://aws-amplify.github.io/docs/js/storage#manual-setup) to see required fields by Amplify for the storage service.

## Initialize application

To apply congiguration file to Amplify we call a Singleton class who inherits of Amplify class at the root level (inside `index.tsx`).

```ts
Config.getInstance().init(amplifyConfig);
```

It will apply our configuration file to Amplify when we will bootstrap our React App.
If you want to customize this class,feel free to edit utils file inside `shared/utils.ts`

## Authentication flow

Authenticator component (provided by Amplify) provides a `onStateChange` property which is fired when authentication state changes.
We pass to onStateChange a custom function to determine is the user is logged or not
```ts
<Authenticator
  usernameAttributes={UsernameAttributes.EMAIL}
  signUpConfig={signUpConfig}
  onStateChange={(authState) => setIsAuth(isAuthenticated(authState))}
>
  {isAuth && <App />}
</Authenticator>
```
If the user is logged in we render the rest of the App and so on.

**Important:**
When the state is ```signedIn```, it will return a ```CognitoUser``` object, this ```CognitoUser``` is automatically passed as authData props to the ```<App />``` component
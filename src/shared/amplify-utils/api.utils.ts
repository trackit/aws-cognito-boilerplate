import { Auth, API } from "aws-amplify";
import { AuthData } from "shared/interfaces/amplify.interface";

interface QueryStringParameters {
  [key: string]: string;
}

export const adminQueries = {
  post: async (queryStringParameters: QueryStringParameters, path: string) => {
    const header = {
      body: { ...queryStringParameters },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.post(process.env.REACT_APP_API, path, header);
  },
  get: async (queryStringParameters: QueryStringParameters, path: string) => {
    let nextToken = null;
    const header = {
      queryStringParameters: { ...queryStringParameters, token: nextToken },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const { NextToken, ...rest } = await API.get(
      process.env.REACT_APP_API,
      path,
      header
    );
    nextToken = NextToken;
    return rest;
  },
};

export const isInGroup = (authData: AuthData | null, group: string) => {
  if (authData) {
    const { payload } = authData.signInUserSession.idToken;
    return (
      payload["cognito:groups"] && payload["cognito:groups"].includes(group)
    );
  }
  return false;
};

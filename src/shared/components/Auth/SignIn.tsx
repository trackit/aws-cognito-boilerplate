import React from "react";
import { SignIn } from "aws-amplify-react";
import { IAuthPieceProps } from "aws-amplify-react/lib-esm/Auth/AuthPiece";
import { AmplifyTheme } from "shared/interfaces/amplify.interface";

interface Props extends IAuthPieceProps {}

class CustomSignIn extends SignIn {
  constructor(props: Props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    this.state = {
      loading: false,
    };
  }

  showComponent(theme: AmplifyTheme) {
    return <h1>Custom Sign In</h1>;
  }
}

export default CustomSignIn;

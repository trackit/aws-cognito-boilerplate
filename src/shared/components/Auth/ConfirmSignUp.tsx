import React from "react";
import { ConfirmSignUp } from "aws-amplify-react";
import { IAuthPieceProps } from "aws-amplify-react/lib-esm/Auth/AuthPiece";
import { AmplifyTheme } from "shared/interfaces/amplify.interface";

interface Props extends IAuthPieceProps {}

class CustomConfirmSignUp extends ConfirmSignUp {
  constructor(props: Props) {
    super(props);
    this._validAuthStates = ["confirmSignUp"];
  }

  showComponent(theme: AmplifyTheme) {
    return <h1>Custom Confirm Sign Up</h1>;
  }
}

export default CustomConfirmSignUp;

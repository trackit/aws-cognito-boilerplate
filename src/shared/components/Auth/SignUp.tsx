import React from "react";
import { SignUp } from "aws-amplify-react";
import { IAuthPieceProps } from "aws-amplify-react/lib-esm/Auth/AuthPiece";
import { AmplifyTheme, SignUpFields } from "shared/interfaces/amplify.interface";

interface Props extends IAuthPieceProps {
  signUpFields: SignUpFields[]
}

class CustomSignUp extends SignUp {
  constructor(props: Props) {
    super(props);
    this._validAuthStates = ["signUp"];
    this.signUpFields = props.signUpFields;
  }
  showComponent(theme: AmplifyTheme) {
    return <h1>Custom Sign Up</h1>;
  }
}

export default CustomSignUp;

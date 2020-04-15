import React from "react";
import styled from "styled-components";
import { ConfirmSignUp } from "aws-amplify-react";
import { IAuthPieceProps } from "aws-amplify-react/lib-esm/Auth/AuthPiece";
import { AmplifyTheme } from "shared/interfaces/amplify.interface";
import {
  Container,
  Form,
  FormField,
  Input,
  Button,
  CustomLink,
} from "shared/components/Auth/common";

const ConfirmSignUpContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

class CustomConfirmSignUp extends ConfirmSignUp {
  constructor(props: IAuthPieceProps) {
    super(props);
    this._validAuthStates = ["confirmSignUp"];
  }

  showComponent(theme: AmplifyTheme) {
    const username = this.usernameFromAuthData();
    return (
      <ConfirmSignUpContainer>
        <Form>
          {this.props.children}
          <FormField>
            <label htmlFor="username">Email *</label>
            <Input
              id="username"
              key="username"
              name="username"
              theme={theme}
              placeholder="username"
              disabled={!!username}
              value={username ? username : ""}
              onChange={this.handleInputChange}
            />
          </FormField>
          <FormField>
            <label htmlFor="code">Confirmation code *</label>
            <Input
              id="code"
              key="code"
              name="code"
              autoFocus
              placeholder={"Enter your code"}
              theme={theme}
              autoComplete="off"
              onChange={this.handleInputChange}
            />
          </FormField>
          <Button
            onClick={(ev) => {
              this.confirm();
              ev.preventDefault();
            }}
          >
            Confirm
          </Button>
          <CustomLink
            onClick={() => {
              this.resend();
              this.error("Code sent");
            }}
          >
            Resend code
          </CustomLink>
        </Form>
      </ConfirmSignUpContainer>
    );
  }
}

export default CustomConfirmSignUp;

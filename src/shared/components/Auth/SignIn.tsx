import React, { MouseEvent } from "react";
import { SignIn, UsernameAttributes } from "aws-amplify-react";
import { ISignInProps } from "aws-amplify-react/lib-esm/Auth/SignIn";
import { AmplifyTheme } from "shared/interfaces/amplify.interface";
import {
  Form,
  FormField,
  CustomLink,
  Input,
  Button,
  Container,
} from "shared/components/Auth/common";
import styled from "styled-components";

const SingInContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

class CustomSignIn extends SignIn {
  constructor(props: ISignInProps) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    this.state = {
      loading: false,
    };
  }

  showComponent(theme: AmplifyTheme) {
    return (
      <Form>
        {/**
         * As a workaround we use a children because we can't add
         * more props from the time that SignIn class is not a generic class.
         */}
        {this.props.children}
        <FormField>
          <label htmlFor={this.props.usernameAttributes}>Email *</label>
          <Input
            theme={theme}
            autoFocus={true}
            type={this.props.usernameAttributes}
            id={this.props.usernameAttributes}
            key={this.props.usernameAttributes}
            name={this.props.usernameAttributes}
            placeholder={
              this.props.usernameAttributes === UsernameAttributes.EMAIL
                ? "Your email address"
                : "Your username"
            }
            onChange={this.handleInputChange}
          />
        </FormField>
        <FormField>
          <label htmlFor="password">Password *</label>
          <Input
            theme={theme}
            type="password"
            id="password"
            key="password"
            name="password"
            placeholder="Your password"
            onChange={this.handleInputChange}
          />
        </FormField>
        <Button
          disabled={this.state.loading}
          onClick={(ev: MouseEvent) => this.signIn(ev)}
        >
          Sign in
        </Button>
        <CustomLink onClick={() => this.changeState("signUp")}>
          Don't have an account? Sign up
        </CustomLink>
      </Form>
    );
  }
}

export default CustomSignIn;

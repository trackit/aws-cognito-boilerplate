import React from "react";
import { Form, Container, Input, Logo, Button } from "components";
import { SignUp } from "aws-amplify-react";
import { colors } from "shared/styles";
import styled from "styled-components";

const SignUpContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    margin: 0 0 10px 0;
  }
`;

const CustomLink = styled.a`
  margin: 16px 0;
  color: ${colors.secondary};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

class CustomSignUp extends SignUp {
  constructor(props: any) {
    super(props);
    this._validAuthStates = ["signUp"];
    this.signUpFields = [
      {
        label: "Username",
        key: "username",
        placeholder: "Email",
        required: true,
        displayOrder: 1,
        type: "email",
      },
      {
        label: "Password",
        key: "password",
        required: true,
        displayOrder: 2,
        placeholder: "password",
        type: "password",
      },
    ];
  }
  showComponent(theme: any) {
    return (
      <SignUpContainer>
        <Form>
          <Logo src={''} />
          <FormField>
            <h4 style={{ marginTop: 0 }}>Create a new account</h4>
            <label>Email *</label>
            <Input
              type="email"
              id="username"
              key="username"
              name="username"
              placeholder="Your email address"
              onChange={this.handleInputChange}
            />
          </FormField>
          <FormField>
            <label>Password *</label>
            <Input
              type="password"
              id="password"
              key="password"
              name="password"
              placeholder="Your password"
              onChange={this.handleInputChange}
            />
          </FormField>
          <Button
            disabled={this.state.requestPending}
            onClick={() => super.signUp()}
          >
            Sign Up
          </Button>
          <CustomLink onClick={() => this.changeState("signIn")}>
            Have an account? Sign In
          </CustomLink>
        </Form>
      </SignUpContainer>
    );
  }
}

export default CustomSignUp;

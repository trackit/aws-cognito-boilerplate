import React, { useState } from "react";
import { SignIn } from "aws-amplify-react";
import Container from "./Container";
import Form from "./Form";
import { Logo, Button } from "components";
import Input from "./Input";
import styled from "styled-components";
import { colors } from "shared/styles";

const SingInContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const CustomLink = styled.a`
  margin: 16px 0;
  color: ${colors.secondary};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    margin: 0 0 10px 0;
  }
`;

class CustomSignIn extends SignIn {
  constructor(props: any) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    this.state = {
      loading: false,
    };
  }

  showComponent(theme: any) {
    return (
      <SingInContainer>
        <Form>
          <Logo src={''} />
          <FormField>
            <h4 style={{ marginTop: 0 }}>Sign in to your account</h4>
            <label>Email *</label>
            <Input
              type="Email"
              id="email"
              key="email"
              name="email"
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
            disabled={this.state.loading}
            onClick={(ev) => super.signIn(ev)}
          >
            Sign in
          </Button>
          <CustomLink onClick={() => this.changeState("signUp")}>
            Don't have an account? Sign up
          </CustomLink>
        </Form>
      </SingInContainer>
    );
  }
}

export default CustomSignIn;

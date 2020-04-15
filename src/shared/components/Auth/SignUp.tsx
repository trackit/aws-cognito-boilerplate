import React from "react";
import { SignUp } from "aws-amplify-react";
import { ISignUpProps } from "aws-amplify-react/lib-esm/Auth/SignUp";
import { AmplifyTheme } from "shared/interfaces/amplify.interface";
import {
  Input,
  Form,
  Button,
  FormField,
  Logo,
  CustomLink,
  Container
} from "shared/components/Auth/common";
import styled from "styled-components";

const SingUpContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

class CustomSignUp extends SignUp {
  constructor(props: ISignUpProps) {
    super(props);
    this._validAuthStates = ["signUp"];
    this.signUpFields = props.signUpConfig?.signUpFields || [];
  }

  showComponent(theme: AmplifyTheme) {
    this.sortFields();
    return (
      <Form>
        {/**
         * As a workaround we use a children because we can't add
         * more props from the time that SignUp class is not a generic class.
         */}
        {this.props.children}
        {this.signUpFields.map((field) => {
          return (
            field.key !== "phone_number" && (
              <FormField key={field.key}>
                <label htmlFor={field.key}>
                  {field.required ? `${field.label} *` : field.label}
                </label>
                <Input
                  id={field.key}
                  autoFocus={
                    this.signUpFields.findIndex((f) => {
                      return f.key === field.key;
                    }) === 0
                      ? true
                      : false
                  }
                  placeholder={field.placeholder}
                  theme={theme}
                  type={field.type}
                  name={field.key}
                  key={field.key}
                  onChange={this.handleInputChange}
                />
              </FormField>
            )
          );
        })}
        <Button
          disabled={this.state.requestPending}
          onClick={(ev) => {
            ev.preventDefault();
            this.signUp();
          }}
        >
          Sign Up
        </Button>
        <CustomLink onClick={() => this.changeState("signIn")}>
          Have an account? Sign In
        </CustomLink>
      </Form>
    );
  }
}

export default CustomSignUp;

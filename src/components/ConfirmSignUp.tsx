import React from "react";
import { Container, Logo, Button, Form, Input } from "components";
import { ConfirmSignUp } from "aws-amplify-react";
import { colors } from "shared/styles";
import styled from "styled-components";

const SingInContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  p:hover {
    cursor: pointer;
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

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    margin: 0 0 10px 0;
  }
`;

class CustomConfirmSignUp extends ConfirmSignUp {
  constructor(props: any) {
    super(props);
    this._validAuthStates = ["confirmSignUp"];
    console.log(props);
    this.state = {};
  }

  showComponent(theme: any) {
    const username = this.usernameFromAuthData();
    return (
      <SingInContainer>
        <Form>
          <Logo src={''} />
          <FormField>
            <h4 style={{ marginTop: 0 }}>Confirm your account</h4>
            <label>Email *</label>
            <Input
              id="username"
              key="username"
              name="username"
              placeholder="username"
              disabled={!!username}
              value={username ? username : ""}
              onChange={this.handleInputChange}
            />
          </FormField>
          <FormField>
            <label>Confirmation code *</label>
            <Input
              autoFocus
              placeholder={"Enter your code"}
              theme={theme}
              key="code"
              name="code"
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
      </SingInContainer>
    );
  }
}

export default CustomConfirmSignUp;

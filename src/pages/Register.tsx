import React from "react";
import styled from "styled-components";
import { Container, Form, Input, Button, Logo } from "components";

const RegisterContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const Register = () => {
  return (
    <RegisterContainer>
      <Form>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/0/09/Qumulo.svg" />
        <Input required type="email" placeholder="Email" />
        <Input required type="password" placeholder="Password" />
        <Input required type="password" placeholder="Retype Password" />
        <Button>Register</Button>
      </Form>
    </RegisterContainer>
  );
};

export default Register;

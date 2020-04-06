import React from "react";
import { Container } from "components";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AuthContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

const Auth = () => {
  return (
    <AuthContainer>
      <h1>Auth Page</h1>
      <Link to={"register"}>Register</Link>
    </AuthContainer>
  );
};

export default Auth;

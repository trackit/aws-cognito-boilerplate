import React from "react";
import styled from "styled-components";
import { Container, Logo } from "shared/components/Auth/common";

const AppContainer = styled(Container)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <AppContainer>
    <Logo
      style={{ width: "20%" }}
      src="https://camo.githubusercontent.com/a1c4be4671e634c1461fe578cca2c97c7b11e486/68747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f747261636b69742d7075626c69632d6172746966616374732f6769746875622d706167652f6c6f676f2e706e67"
      alt="logo"
    />
    <h1 style={{ textAlign: "center" }}>
      Sorry, you are not allowed to access this broadcast
    </h1>
  </AppContainer>
);

export default App;

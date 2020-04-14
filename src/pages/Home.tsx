import React from "react";
import { Container } from "shared/components/Auth/common";
import styled from "styled-components";

const HomeContainer = styled(Container)`
  flex: 1;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Nice, you are logged in</h1>
    </HomeContainer>
  );
};

export default Home;

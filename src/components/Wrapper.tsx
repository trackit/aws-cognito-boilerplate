import React from "react";
import styled from "styled-components";

import { colors } from "shared/styles";
import { Header } from "components";

const Container = styled.div`
  background-color: ${colors.primary};
  color: ${colors.primaryTextColor};
`;

interface WrapperProps {
  children?: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Wrapper;

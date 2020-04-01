import React, { ReactElement } from "react";
import styled from "styled-components";
import { Header } from "components/Header/Header";
import { colors } from "shared/styles";

const Container = styled.div`
  background-color: ${colors.primary};
  color: ${colors.primaryTextColor};
`;

interface WrapperProps {
  children?: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }): ReactElement => (
  <Container>
    <Header />
    {children}
  </Container>
);

export { Wrapper };

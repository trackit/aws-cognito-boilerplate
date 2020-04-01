import React from "react";
import styled from "styled-components";

import { colors } from "shared/styles";
import { Header } from "components";
import { LinkProps } from "react-router-dom";

const Container = styled.div`
  background-color: ${colors.primary};
  color: ${colors.primaryTextColor};
`;

interface IProps {
  children?: React.ReactNode;
  links?: LinkProps[];
}

const Wrapper = ({ children, links }: IProps) => {
  return (
    <Container>
      <Header title={"aws-boilerplate-cognito"} links={links} />
      {children}
    </Container>
  );
};

export default Wrapper;

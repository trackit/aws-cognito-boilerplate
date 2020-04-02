import React from "react";
import styled from "styled-components";

import { colors } from "shared/styles";
import { LinkProps } from "react-router-dom";

const AppContainer = styled.div`
  background-color: ${colors.primary};
  color: ${colors.primaryTextColor};
`;

interface Props {
  children?: React.ReactNode;
  links?: LinkProps[];
}

/* 
  PageWrapper is used at the root level to ensure margins and padding are corrects 
  It is here that a header/navbar or a footer have to be added if needed
*/
const PageWrapper = ({ children, links }: Props) => {
  return (
    <AppContainer>
      {children}
    </AppContainer>
  );
};

export default PageWrapper;

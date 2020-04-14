import styled from "styled-components";
import { colors } from "shared/styles";

const CustomLink = styled.a`
  margin: 16px 0;
  color: ${colors.secondary};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export default CustomLink;

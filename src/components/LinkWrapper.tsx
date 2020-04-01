import styled from "styled-components";
import { colors } from "shared/styles";

const LinkWrapper = styled.div`
  a {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    margin: 0;
    padding: 0 0 7px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 300ms ease-in-out;
    color: ${colors.primaryTextColor};
    border-bottom: 2px solid transparent;
  }
  a:hover {
    border-bottom-color: ${colors.primaryTextColor};
  }
`;

export default LinkWrapper;
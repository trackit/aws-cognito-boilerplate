import styled from "styled-components";
import { colors } from "shared/styles";

const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${colors.secondary};
  border-radius: 50px;
  box-shadow: none;
  box-sizing: border-box;
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: 700;
  height: 48px;
  letter-spacing: 1px;
  line-height: 46px;
  margin: 20px 0 0 0;
  outline: none;
  padding: 0 28px;
  text-transform: uppercase;
  transition: all 0.3s;
  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.secondaryTextColor};
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.4;
    color: ${colors.secondary};
    background-color: inherit;
  }
  &:disabled:hover {
    cursor: inherit;
  }
`;

export default Button;

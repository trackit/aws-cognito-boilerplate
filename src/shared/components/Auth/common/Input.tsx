import styled from "styled-components";
import { colors } from "shared/styles";

const Input = styled.input`
  border: 1px solid grey;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  padding: 7px 10px;
  width: 100%;
  margin-bottom: 20px;
  color: ${colors.primaryTextColor};
  background-color: ${colors.primary};
  &:focus {
    box-shadow: ${colors.secondary} 0 0 8px;
    outline: none;
  }
  &:invalid {
    border-left-color: ${colors.secondary};
    border-left-width: 3px;
  }
  &:required:valid {
    border: 1px solid ${colors.success};
    border-left-color: ${colors.success};
    border-left-width: 3px;
  }
  &:focus:valid {
    border: 1px solid ${colors.success};
    box-shadow: ${colors.success} 0 0 8px;
    border-left-color: ${colors.success};
    border-left-width: 3px;
  }
  &:disabled {
    background: #ccc;
  }
`;

export default Input;

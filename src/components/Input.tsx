import React from "react";
import styled from "styled-components";
import { colors } from "shared/styles";

const InputStyle = styled.input`
  border: 1px solid grey;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  padding: 7px 10px;
  max-width: 370px;
  min-width: 300px;
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
    border-left-color: ${colors.success};
    border-left-width: 3px;
  }
  &:focus:valid {
    box-shadow: ${colors.success} 0 0 8px;
    outline: none;
  }
`;

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <InputStyle {...props} />;
};

export default Input;

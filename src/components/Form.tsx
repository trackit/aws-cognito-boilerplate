import { colors } from "shared/styles";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  width: 550px;
  border-radius: 10px;
  border: 2px solid ${colors.primaryTextColor};
  background-color: ${colors.primary};
  @media screen and (max-width: 780px) {
    width: inherit;
    border: inherit;
    padding: 20px 10px;
    background-color: ${colors.primary};
  }
`;

export default Form;

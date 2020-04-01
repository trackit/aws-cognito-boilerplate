import { createGlobalStyle } from "styled-components";

interface IColors {
  primary: string;
  secondary: string;
  primaryTextColor: string;
  secondaryTextColor: string;
}

export const colors: IColors = {
  primary: "#222831",
  secondary: "#393E46",
  primaryTextColor: "#D65A31",
  secondaryTextColor: "#EEEEEE"
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  html, body, #root, #root>div {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

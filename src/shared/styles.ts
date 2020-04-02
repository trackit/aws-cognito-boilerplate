import { createGlobalStyle } from "styled-components";

interface AppColors {
  primary: string;
  secondary: string;
  success: string;
  dark: string;
  primaryTextColor: string;
  secondaryTextColor: string;
}

export const colors: AppColors = {
  primary: "#FFFFFF",
  secondary: "#D4453D",
  dark: '#222227',
  success: "#6EBC6E",
  primaryTextColor: "#272C2F",
  secondaryTextColor: "#FFFFFF"
};

export const GlobalStyle = createGlobalStyle`
  html, body, #root, #root>div {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

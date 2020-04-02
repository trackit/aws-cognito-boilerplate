import { createGlobalStyle } from "styled-components";

interface AppColors {
  primary: string;
  secondary: string;
  primaryTextColor: string;
  secondaryTextColor: string;
}

export const colors: AppColors = {
  primary: "	#232f3e",
  secondary: "#000000",
  primaryTextColor: "#ff9900",
  secondaryTextColor: "#146eb4"
};

export const GlobalStyle = createGlobalStyle`
  html, body, #root, #root>div {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;
import { createGlobalStyle } from "styled-components";
import { AppColors } from "shared/interfaces/styles.interface";

export const colors: AppColors = {
  primary: "#121212",
  secondary: "#D4453D",
  dark: "#222227",
  success: "#6EBC6E",
  primaryTextColor: "#FFFFFF",
  secondaryTextColor: "#4BB2F9",
};

/**
 * All style rules passed to this function are applied globally 
 * to the application 
 */
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #root, #root>div {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${colors.dark};
    font-family: 'Montserrat', sans-serif;
  }
`;

import { createGlobalStyle } from "styled-components";
import { Colors } from "shared/interfaces/styles.interface";

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
    font-family: 'Montserrat', sans-serif;
  }
`;

/**
 * Used for theming components and amplify
 */
export const colors: Colors = {
  primary: "#FFF",
  secondary: "#D83C38",
  primaryTextColor: "#272C2E",
  secondaryTextColor: "#FFF",
  background: "#272C2E",
  default: "#0366D6",
  success: "#2CBD4D",
  warning: "#F48025",
  danger: "#EA5D55",
};
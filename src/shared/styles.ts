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
  }
`;

/**
 * Used for theming components and amplify
 */
export const colors: Colors = {
  primary: "",
  secondary: "",
  primaryTextColor: "",
  secondaryTextColor: "",
  background: "",
  default: "",
  success: "",
  warning: "",
  danger: "",
};
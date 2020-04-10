/**
 * Used by Colors
 */
interface Elevation {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
  a100?: string;
  a200?: string;
  a400?: string;
  a700?: string;
}

export interface PlatteColors {
  red: Elevation;
  pink: Elevation;
  purple: Elevation;
  deeppurple: Elevation;
  indigo: Elevation;
  blue: Elevation;
  lightblue: Elevation;
  cyan: Elevation;
  teal: Elevation;
  green: Elevation;
  lightgreen: Elevation;
  lime: Elevation;
  yellow: Elevation;
  amber: Elevation;
  orange: Elevation;
  deeporange: Elevation;
  brown: Elevation;
  grey: Elevation;
  bluegrey: Elevation;
}

export interface Colors {
  primary: string;
  secondary: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  background: string;
  default: string;
  success: string;
  warning: string;
  danger: string;
}

/* export interface AppColors {
  [ColorName: string]: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
    a100?: string;
    a200?: string;
    a400?: string;
    a700?: string;
  };
}
 */

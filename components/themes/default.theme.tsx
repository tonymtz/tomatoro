// components/themes/defaultTheme.tsx
import { DefaultTheme } from "styled-components";

const primaryColor = "#3b82f6";

export const defaultTheme: DefaultTheme = {
  name: "default",

  borderRadius: "4px",
  bodyColor: "#ffffff",
  textColor: "#000000",
  palette: {
    common: {
      black: "#121212",
      white: "#ffffff",
    },
    primary: {
      main: "#3b82f6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d946ef",
      contrastText: "#ffffff",
    },
  },
};

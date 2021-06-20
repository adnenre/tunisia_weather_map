import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#44dddd",
    primaryHover: "#4fc3f7",
    success: "#5aac44",
    successHover: "#81c784",
    warning: "#ff8a65",
    danger: "#ff8a65",
    default: "#fff",
    gray: "#eff3f8",
  },
  size: {
    xsmall: "8px",
    small: "12px",
    medium: "16px",
    large: "20px",
    xLarge: "40px",
    default: "10px",
  },
};

type ThemeProps = {
  children: React.ReactNode;
};
const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

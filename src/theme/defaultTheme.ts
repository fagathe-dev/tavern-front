import {
  COLOR_ERROR,
  COLOR_GREY,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_SUCCESS,
  COLOR_TERTIARY,
  COLOR_WARNING,
} from "./color";
import { ThemeProps } from "./theme";

const defaultTheme: ThemeProps = {
  typo: {
    size: "14px",
    weight: {
      lighter: 300,
      light: 400,
      normal: 500,
      bold: 700,
      bolder: 900,
    },
    title: {
      h1: "2.5rem",
      h2: "2rem",
      h3: "1.5rem",
      h4: "1.25rem",
      h5: "1.12rem",
      h6: "1rem",
    },
  },
  spacing: {
    xs: "5",
    s: "8",
    m: "10",
    l: "15",
    xl: "20",
  },
  sizing: {
    breakpoint: {
      xs: "400px",
      s: "600px",
      m: "800px",
      l: "1000px",
      xl: "1250px",
      xxl: "1500px",
    },
    width: {
      25: "25",
      50: "50",
      75: "75",
      100: "100",
    },
  },
  color: {
    primary: COLOR_PRIMARY,
    secondary: COLOR_SECONDARY,
    tertiary: COLOR_TERTIARY,
    grey: COLOR_GREY,
    success: COLOR_SUCCESS,
    warning: COLOR_WARNING,
    error: COLOR_ERROR,
    base: "#fafaf9",
    white: "#ffffff",
    dark: "#212529",
    black: "#000",
  },
  transition: {
    delay: {
      short: 50,
      standard: 100,
      complex: 200,
      long: 300,
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      short: 200,
      standard: 300,
      long: 500,
    },
  },
  shadow: {
    s: "0px 8px 24px rgba(149, 157, 165, 0.2);",
    m: "0px 4px 12px rgba(0, 0, 0, 0.1);",
    l: "0px 1px 1px 0px inset rgba(255, 255, 255, 0.1), 0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3);",
    none: "none",
  },
};

export default defaultTheme;

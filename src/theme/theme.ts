type Size = "xs" | "s" | "m" | "l" | "xl" | "xxl";
type TextAlign = "start" | "end" | "center" | "justify" | "none";
type Property = string | Array<string> | "all";
type Color =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "default"
  | "white";

interface BorderProps {
  radius: Extract<Size, "s" | "m" | "l"> & ("pill" | "none");
}

interface SizesProps {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}

interface SizingProps {
  breakpoint: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  width: {
    25: string;
    50: string;
    75: string;
    100: string;
  };
}

interface ColorProps {
  default: string;
  lighter: string;
  light: string;
  dark: string;
  darker: string;
  hover: string;
}

interface FontProps {
  size: string;
  weight: {
    lighter: number;
    light: number;
    normal: number;
    bold: number;
    bolder: number;
  };
  title: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
}

interface ShadowProps {
  s: string;
  m: string;
  l: string;
  none: string;
}

interface TransitionProps {
  delay: {
    short: number;
    standard: number;
    complex: number;
    long: number;
  };
  easing: {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    sharp: string;
  };
  duration: {
    short: number;
    standard: number;
    long: number;
  };
}

interface ThemeProps {
  spacing: Omit<SizesProps, "xxl">;
  sizing: SizingProps;
  color: {
    primary: ColorProps;
    secondary: ColorProps;
    tertiary: ColorProps;
    grey: ColorProps;
    success: ColorProps;
    warning: ColorProps;
    error: ColorProps;
    base: string;
    white: string;
    dark: string;
    black: string;
  };
  typo: FontProps;
  shadow: ShadowProps;
  transition: TransitionProps;
}

export type {
  Property,
  ThemeProps,
  Size,
  SizesProps,
  SizingProps,
  ColorProps,
  TransitionProps,
  ShadowProps,
  FontProps,
  TextAlign,
  BorderProps,
  Color
};

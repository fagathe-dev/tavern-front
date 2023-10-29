import React from "react";

interface Step {
  content: string;
  title: string;
}

interface IconProps {
  size?: number;
  fill?: string;
  style?: React.CSSProperties;
}

interface StylingProps {
  id?: number | string;
  cx?: Array<string>
  style?: React.CSSProperties;
}


interface TitleProps {
  title?: string;
}


export type { Step, IconProps, StylingProps, TitleProps };

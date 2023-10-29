import React, { PropsWithChildren, SyntheticEvent } from "react";
import styled from "styled-components";
import { Size } from "../../../theme/theme";
import { theme } from "../../../theme";
import { StylingProps } from "../../../type/ui.type";

interface ButtonProps extends StylingProps {
  size?: Extract<Size, "s" | "m" | "l">;
  primary?: boolean;
  secondary?: boolean;
  pill?: boolean;
  outline?: boolean;
  label?: string;
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  icon?: React.ReactElement;
  leftIcon?: boolean;
}

const handleTheme = ({ secondary, outline, primary }: ButtonProps) => {
  if (primary) {
    if (outline) {
      return {
        bgColor: theme.color.white,
        color: theme.color.primary.default,
        borderColor: theme.color.primary.default,
        bgHover: theme.color.primary.default,
        colorHover: theme.color.white,
      };
    }

    return {
      bgColor: theme.color.primary.default,
      color: theme.color.white,
      borderColor: "transparent",
      bgHover: theme.color.primary.hover,
      colorHover: theme.color.white,
    };
  }

  if (secondary) {
    if (outline) {
      return {
        bgColor: theme.color.white,
        color: theme.color.secondary.default,
        borderColor: theme.color.secondary.default,
        bgHover: theme.color.secondary.default,
        colorHover: theme.color.white,
      };
    }

    return {
      bgColor: theme.color.secondary.default,
      color: theme.color.white,
      borderColor: "transparent",
      bgHover: theme.color.secondary.hover,
      colorHover: theme.color.white,
    };
  }

  return {
    bgColor: theme.color.base,
    color: theme.color.grey.dark,
    borderColor: theme.color.grey.dark,
    bgHover: theme.color.white,
  };
};

const handleSize = ({ size, pill }: ButtonProps) => {
  switch (size) {
    case "s":
      return {
        radius: pill ? "50px" : "2px",
        fz: "14px",
        padding: ".25rem .95rem",
      };
    case "l":
      return {
        radius: pill ? "50px" : "6px",
        fz: "25px",
        padding: ".45rem 1.25rem",
      };
    default:
      return {
        radius: pill ? "50px" : "4px",
        fz: "16px",
        padding: ".375rem 1.05rem",
      };
  }
};

const ButtonTest: React.FC<PropsWithChildren> = ({ children }) => {
  return <button>{children}</button>;
};

const StyledButton = styled(ButtonTest)<ButtonProps>(
  ({ ...props }) => `
  outline: 0;
  font-size: ${handleSize(props)?.fz};
  color: ${handleTheme(props)?.color};
  background-color: ${handleTheme(props)?.bgColor};
  border: 1px solid ${handleTheme(props)?.borderColor};
  transition: all ${theme.transition.duration.long}ms
    ${theme.transition.easing.easeInOut};
  border-radius: ${handleSize(props)?.radius};
  padding: ${handleSize(props)?.padding};
  line-height: 1;
  &:hover {
    cursor: pointer;
    background-color: ${handleTheme(props)?.bgHover}; */}
    color: ${handleTheme(props)?.colorHover};

`
);

// const StyledButton = styled.button<ButtonProps>`
//    outline: 0;
//   font-size: ${(props) => handleSize(props)?.fz};
//   color: ${(props) => handleTheme(props)?.color};
//   background-color: ${(props) => handleTheme(props)?.bgColor};
//   border: 1px solid ${(props) => handleTheme(props)?.borderColor};
//   transition: all ${theme.transition.duration.long}ms
//     ${theme.transition.easing.easeInOut};
//   border-radius: ${(props) => handleSize(props)?.radius};
//   padding: ${(props) => handleSize(props)?.padding};
//   line-height: 1;
//   &:hover {
//     cursor: pointer;
//     background-color: ${(props) => handleTheme(props)?.bgHover}; */}
//     color: ${(props) => handleTheme(props)?.colorHover};
//   }
// `;

const Button = ({
  size = "m",
  primary = false,
  secondary = false,
  outline = false,
  pill = false,
  onClick,
  label,
  icon,
  leftIcon,
  type = "button",
  style,
}: ButtonProps) => {
  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  };

  let content;
  if (leftIcon && icon) {
    content = leftIcon ? (
      <>
        {icon} {label}
      </>
    ) : (
      <>
        {label} {icon}
      </>
    );
  } else {
    content = <>{label}</>;
  }

  return (
    <>
      <StyledButton
        onClick={(e: SyntheticEvent<HTMLButtonElement>) => handleClick(e)}
        outline={outline}
        type={type}
        size={size}
        pill={pill}
        secondary={secondary}
        primary={primary}
        style={style}
      >
        {content}
      </StyledButton>
    </>
  );
};

export default Button;

import { PropsWithChildren } from "react";
import { Color, Size } from "../../theme/theme";
import { StylingProps } from "../../type/ui.type";
import styled from "styled-components";
import { theme } from "../../theme";

type Rounded = "normal" | "pill";

interface HandleSizeProps {
  fz?: string;
  padding?: string;
  radius?: string;
}

interface HandleStyleProps {
  color?: string;
  bgColor?: string;
  borderColor?: string;
}

type BadgeProps = {
  color?: Exclude<Color, "white">;
  rounded?: Rounded;
  pill?: string | number;
  size?: Extract<Size, "s" | "m">;
  soft?: boolean;
} & StylingProps;

const handleSize = ({ size, rounded }: BadgeProps): HandleSizeProps => {
  const radius = "20px";

  if (size === "s") {
    return {
      fz: "10px",
      padding: ".15rem .5rem",
      radius: rounded === "pill" ? radius : "3px",
    };
  }

  return {
    fz: "12px",
    padding: ".2rem .6rem",
    radius: rounded === "pill" ? radius : "4px",
  };
};

const handleStyle = ({ color, soft }: BadgeProps): HandleStyleProps => {
  let style: HandleStyleProps = {};
  switch (color) {
    case "primary":
      style = {
        color: theme.color.white,
        bgColor: theme.color.primary.default,
        borderColor: theme.color.primary.default,
      };
      if (soft) {
        style = {
          ...style,
          color: theme.color.primary.default,
          bgColor: theme.color.primary.lighter,
        };
      }
      break;

    case "secondary":
      style = {
        color: theme.color.white,
        bgColor: theme.color.white,
        borderColor: theme.color.secondary.default,
      };
      if (soft) {
        style = {
          ...style,
          color: theme.color.secondary.default,
          bgColor: theme.color.secondary.lighter,
        };
      }
      break;

    case "success":
      style = {
        color: theme.color.white,
        bgColor: theme.color.white,
        borderColor: theme.color.success.default,
      };
      if (soft) {
        style = {
          ...style,
          color: theme.color.success.default,
          bgColor: theme.color.success.lighter,
        };
      }
      break;

    case "error":
      style = {
        color: theme.color.white,
        bgColor: theme.color.white,
        borderColor: theme.color.error.default,
      };
      if (soft) {
        style = {
          ...style,
          color: theme.color.error.default,
          bgColor: theme.color.error.lighter,
        };
      }
      break;

    case "warning":
      style = {
        color: theme.color.white,
        bgColor: theme.color.white,
        borderColor: theme.color.warning.default,
      };
      if (soft) {
        style = {
          ...style,
          color: theme.color.warning.default,
          bgColor: theme.color.warning.lighter,
        };
      }
      break;

    default:
      style = {
        color: theme.color.dark,
        bgColor: theme.color.white,
        borderColor: theme.color.dark,
      };
      if (soft) {
        style = {
          ...style,
          color: theme.color.dark,
          bgColor: theme.color.base,
        };
      }

      break;
  }

  return style;
};

const StyledBadge = styled.span<BadgeProps>`
  width: fit-content;
  height: fit-content;
  padding: ${(props) => handleSize(props)?.padding};
  font-size: ${(props) => handleSize(props)?.fz};
  border-radius: ${(props) => handleSize(props)?.radius};
  color: ${(props) => handleStyle(props)?.color};
  background-color: ${(props) => handleStyle(props)?.bgColor};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => handleStyle(props)?.borderColor};
  position: relative;
  font-weight: 500;
`;

const StyledPill = styled.span`
  height: 20px;
  min-width: 20px;
  width: fit-content;
  border-radius: 20px;
  padding: 5px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  font-size: 9px;
  font-weight: 500;

  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  background-color: ${theme.color.error.hover};
  color: ${theme.color.white};

  position: absolute;
  top: -10px;
  right: -10px;
`;

const Badge = ({
  id,
  style,
  cx = [],
  rounded = "normal",
  pill,
  size = "m",
  color = "default",
  soft,
  children,
}: PropsWithChildren<BadgeProps>) => (
  <StyledBadge
    className={cx.join(" ")}
    rounded={rounded}
    style={style}
    id={id}
    size={size}
    color={color}
    pill={pill}
    soft={soft}
  >
    {children}
    {pill && <StyledPill>{pill}</StyledPill>}
  </StyledBadge>
);

export default Badge;

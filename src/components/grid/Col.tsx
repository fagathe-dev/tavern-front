import { PropsWithChildren } from "react";
import { StylingProps } from "../../type/ui.type";
import styled from "styled-components";
import { Size } from "../../theme/theme";
import { theme } from "../../theme";

type Breakpoint = Exclude<Size, "xs">;
type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";

interface ColProps extends StylingProps {
  size?: ColSize;
  breakpoint?: Breakpoint;
}

const StyledCol = styled.div<ColProps>`
  padding-inline: 10px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex: ${(props) => handleSize(props)?.flex};
  max-width: ${(props) => handleSize(props)?.maxWidth};
  @media screen and (min-width: ${theme.sizing.breakpoint.m}) {
    flex: ${(props) => props?.breakpoint === "m" && handleSize(props)?.flex};
    max-width: ${(props) =>
      props?.breakpoint === "m" && handleSize(props)?.maxWidth};
  }
  @media screen and (min-width: ${theme.sizing.breakpoint.l}) {
    flex: ${(props) => props?.breakpoint === "l" && handleSize(props)?.flex};
    max-width: ${(props) =>
      props?.breakpoint === "l" && handleSize(props)?.maxWidth};
  }
  @media screen and (min-width: ${theme.sizing.breakpoint.xl}) {
    flex: ${(props) => props?.breakpoint === "xl" && handleSize(props)?.flex};
    max-width: ${(props) =>
      props?.breakpoint === "xl" && handleSize(props)?.maxWidth};
  }
  @media screen and (min-width: ${theme.sizing.breakpoint.xxl}) {
    flex: ${(props) => props?.breakpoint === "xxl" && handleSize(props)?.flex};
    max-width: ${(props) =>
      props?.breakpoint === "xxl" && handleSize(props)?.maxWidth};
  }
  margin-block-end: 10px;
`;

const handleSize = ({
  size,
  breakpoint,
}: ColProps): { flex?: string; maxWidth?: string } => {
  const responsiveSize = {
    flex: `0 0 calc(100% * ${size} / 12)`,
    maxWidth: `calc(100% * ${size} / 12)`,
  };
  const fullSize = { flex: "0 0 100%", maxWidth: "100%" };
  if (breakpoint) {
    return size !== "auto" ? fullSize : responsiveSize;
  }
  if (size !== "auto") {
    return responsiveSize;
  }
  return fullSize;
};

const Col = ({
  style,
  size = "auto",
  cx = [],
  id,
  children,
}: PropsWithChildren<ColProps>) => {
  return (
    <StyledCol
      size={size}
      style={{ ...style }}
      id={id}
      className={cx.join(" ")}
    >
      {children}
    </StyledCol>
  );
};

export default Col;

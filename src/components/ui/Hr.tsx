import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { StylingProps } from "../../type/ui.type";
import { Size } from "../../theme/theme";

interface HrProps extends StylingProps {
  size?: Extract<Size, "s" | "m" | "l">;
  style?: React.CSSProperties;
}

const handleSize = (size: Size) => {
  if (size === "s") {
    return "0.5rem";
  }
  if (size === "l") {
    return "1.5rem";
  }
  return "1rem";
};

const StyledHr = styled.hr<HrProps>`
  margin-block: ${({ size }) => size && handleSize(size)};
  border-color: rgba(0, 0, 0, 0.15);
`;

const Hr = ({ size = "m", style }: PropsWithChildren<HrProps>) => (
  <StyledHr style={style} size={size} />
);

export default Hr;

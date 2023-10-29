import { PropsWithChildren } from "react";
import styled from "styled-components";
import { StylingProps } from "../../../type/ui.type";
import { Color, TextAlign } from "../../../theme/theme";
import { handleColor } from "../../../utils/colors";

interface DisplayProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: Color;
  align?: Exclude<TextAlign, "none">;
}

interface DisplayProps extends StylingProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

const StyledDisplay = styled.p<DisplayProps>`
  text-align: ${({ align }) => align};
  color: ${({ color }) => color && handleColor(color)};
  font-weight: 300;
  line-height: 1.2;
`;

const Display = ({
  size = 2,
  color = "default",
  align = "start",
  style,
  children,
}: PropsWithChildren<DisplayProps>) => (
  <StyledDisplay
    className={`display-${size}`}
    color={color}
    style={style}
    align={align}
  >
    {children}
  </StyledDisplay>
);

export default Display;

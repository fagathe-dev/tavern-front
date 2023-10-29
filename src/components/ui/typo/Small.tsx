import styled from "styled-components";
import { Color, TextAlign } from "../../../theme/theme";
import { StylingProps } from "../../../type/ui.type";
import { handleColor } from "../../../utils/colors";
import { PropsWithChildren } from "react";

interface SmallProps extends StylingProps {
  color?: Color;
  align?: TextAlign;
}

const StyledSmall = styled.small<SmallProps>`
  line-height: 0.8;
  font-size: 0.85rem;
  color: ${({ color }) => color && handleColor(color)};
  width: 100%;
  text-align: ${({ align }) => align};
`;

const Small = ({
  color = "default",
  align = "start",
  style,
  children,
  cx = [],
  id,
}: PropsWithChildren<SmallProps>) => (
  <StyledSmall
    style={style}
    id={id}
    className={cx.join(" ")}
    align={align}
    color={color}
  >
    {children}
  </StyledSmall>
);

export default Small;

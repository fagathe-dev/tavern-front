import { PropsWithChildren } from "react";
import { Color, TextAlign } from "../../../theme/theme";
import { StylingProps } from "../../../type/ui.type";
import { handleColor } from "../../../utils/colors";
import styled from "styled-components";

interface TextProps extends StylingProps {
  color?: Color;
  align?: TextAlign;
}

const StyledText = styled.p<TextProps>`
  line-height: 1.2;
  font-size: 1rem;
  color: ${({ color }) => color && handleColor(color)};
  width: 100%;
  text-align: ${({ align }) => align};
  margin-block-end: 5px;
`;

const Text = ({
  color = "default",
  align = "start",
  style,
  children,
}: PropsWithChildren<TextProps>) => (
  <StyledText style={style} align={align} color={color}>
    {children}
  </StyledText>
);

export default Text;

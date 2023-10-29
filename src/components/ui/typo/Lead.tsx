import { PropsWithChildren } from "react";
import styled from "styled-components";
import { StylingProps } from "../../../type/ui.type";
import { Color, TextAlign } from "../../../theme/theme";
import { handleColor } from "../../../utils/colors";

interface LeadProps extends StylingProps {
  color?: Color;
  align?: TextAlign;
}

const StyledLead = styled.p<LeadProps>`
  color: ${({ color }) => color && handleColor(color)};
  width: 100%;
  text-align: ${({ align }) => align};
`;

const Lead = ({
  color = "default",
  align = "start",
  style,
  children,
}: PropsWithChildren<LeadProps>) => (
  <StyledLead className="lead" color={color} style={style} align={align}>
    {children}
  </StyledLead>
);

export default Lead;

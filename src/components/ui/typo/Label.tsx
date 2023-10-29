import { PropsWithChildren } from "react";
import styled from "styled-components";
import { StylingProps } from "../../../type/ui.type";
import { Size } from "../../../theme/theme";

interface LabelProps extends StylingProps {
  htmlFor?: string;
  size?: Size;
}

const StyledLabel = styled.label`
  line-height: 1.2;
  font-size: 1rem;
  margin-block-end: 5px;
  width: fit-content;
  max-width: -webkit-fill-available;
`;

const Label = ({ htmlFor, style, children }: PropsWithChildren<LabelProps>) => (
  <StyledLabel htmlFor={htmlFor} style={style}>
    {children}
  </StyledLabel>
);

export default Label;

import { PropsWithChildren } from "react";
import styled from "styled-components";

export interface InputGroupProps {
  sx?: React.CSSProperties;
  layout?: "horizontal" | "vertical";
}

const StyledFormGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-flow: ${({ layout }) => (layout === "horizontal" ? "row" : "column")} nowrap;
  justify-content: flex-start;
  width: 100%;
  margin-block-end: 10px;
`;

const FormGroup = ({
  sx,
  layout,
  children,
}: PropsWithChildren<InputGroupProps>) => {
  return (
    <StyledFormGroup style={sx} layout={layout}>
      {children}
    </StyledFormGroup>
  );
};

export default FormGroup;

import { PropsWithChildren } from "react";
import { StylingProps } from "../../type/ui.type";
import styled from "styled-components";

interface RowProps extends StylingProps {}

const StyledRow = styled.div<RowProps>`
  margin-inline: 0;
  margin-top: 0;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Row = ({ cx = [], style, id, children }: PropsWithChildren<RowProps>) => (
  <StyledRow className={cx.join(" ")} style={style} id={id}>
    {children}
  </StyledRow>
);

export default Row;

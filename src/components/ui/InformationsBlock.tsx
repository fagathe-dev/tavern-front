import styled from "styled-components";
import { StylingProps } from "../../type/ui.type";
import { PropsWithChildren } from "react";
import { theme } from "../../theme";

interface InformationsBlockProps extends StylingProps {}

const StyledInformation = styled.div`
  padding: 0.5rem 1rem 0.6rem 0.8rem;
  width: 100%;
  min-height: 50px;
  height: fit-content;
  border-radius: 0.3rem;
  background-color: ${theme.color.secondary.light};
  color: ${theme.color.dark};
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
`;

const InformationsBlock = ({
  style,
  children,
}: PropsWithChildren<InformationsBlockProps>) => (
  <StyledInformation style={style}>{children}</StyledInformation>
);

export default InformationsBlock;

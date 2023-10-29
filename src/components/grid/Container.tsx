import styled from "styled-components";
import { Size } from "../../theme/theme";
import { PropsWithChildren } from "react";
import { StylingProps } from "../../type/ui.type";
import { theme } from "../../theme";

interface ContainerProps extends StylingProps {
  size?: Extract<Size, "m" | "l" | "xl" | "xxl">;
}

const StyledContainer = styled.section<ContainerProps>`
  width: 100%;
  padding-inline: 15px;
  margin-inline: auto;
  max-width: 600px @media screen and (min-width: ${theme.sizing.breakpoint.m}) {
    max-width: 768px;
  }
  @media screen and (min-width: ${theme.sizing.breakpoint.l}) {
    max-width: 992px;
  }
  @media screen and (min-width: ${theme.sizing.breakpoint.xl}) {
    max-width: 1190px;
  }
  @media screen and (min-width: ${theme.sizing.breakpoint.xxl}) {
    max-width: 1450px;
  }
`;

const Container = ({ style, children }: PropsWithChildren<ContainerProps>) => (
  <StyledContainer style={style}>{children}</StyledContainer>
);

export default Container;

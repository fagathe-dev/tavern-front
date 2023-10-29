import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import { StylingProps } from "../../../type/ui.type";

interface SvgButtonProps extends StylingProps {
  onClick?: () => void;
  icon: React.ReactElement;
}

const StyledSvgButton = styled.button<Omit<SvgButtonProps, "icon">>`
  width: 25px;
  height: 25px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  background-color: ${theme.color.secondary.lighter};
  outline: 0;
  border: 1px solid transparent;
  border-radius: 0.1rem;
  transition: 300ms all ease-in-out;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.16);
  &:hover {
    cursor: pointer;
    background-color: ${theme.color.secondary.light};
  }
`;

const SvgButton = ({ onClick, icon, style }: SvgButtonProps) => (
  <StyledSvgButton type="button" style={style} onClick={onClick}>
    {icon}
  </StyledSvgButton>
);

export default SvgButton;

import styled from "styled-components";
import { StylingProps } from "../../type/ui.type";
import { PropsWithChildren } from "react";
import { theme } from "../../theme";
import logo from "../../assets/logo-mtx.svg";
import { NavLink } from "react-router-dom";

type Color = "primary" | "secondary" | "white";

interface NavbarProps extends StylingProps {
  color?: Color;
}

const handleColor = (color: Color) => {
  if (color === "primary") {
    return {
      color: theme.color.white,
      bgColor: theme.color.primary.default,
      bgHover: theme.color.primary.hover,
    };
  }

  if (color === "secondary") {
    return {
      color: theme.color.white,
      bgColor: theme.color.secondary.default,
      bgHover: theme.color.secondary.hover,
    };
  }

  return {
    color: theme.color.dark,
    bgColor: theme.color.white,
    bgHover: theme.color.secondary.lighter,
  };
};

const handleActive = (isActive: boolean, color: Color) => ({
  color: handleColor(color)?.color,
  backgroundColor: isActive && handleColor(color)?.bgHover,
});

const StyledLogo = styled.img`
  width: 35px;
  height: auto;
`;

const StyledHeader = styled.header<NavbarProps>`
  width: 100%;
  height: 55px;
  overflow: hidden;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: ${({ color }) => color && handleColor(color)?.color};
  background-color: ${({ color }) => color && handleColor(color)?.bgColor};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

const StyledNavMenu = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  margin: 0;
  list-style: none;
  height: 100%;
`;

const StyledLink = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const Navbar = ({ color = "white", style }: PropsWithChildren<NavbarProps>) => (
  <StyledHeader color={color} style={style}>
    <NavLink to={`/`}>
      <StyledLogo src={logo} alt="Logo du site" srcSet={logo} />
    </NavLink>
    <StyledNavMenu>
      <StyledLink
        to={`/toto`}
        style={({ isActive }) => handleActive(isActive, color)}
      >
        Toto
      </StyledLink>
      <StyledLink
        to={`/machin`}
        style={({ isActive }) => handleActive(isActive, color)}
      >
        Machin
      </StyledLink>
    </StyledNavMenu>
  </StyledHeader>
);

export default Navbar;

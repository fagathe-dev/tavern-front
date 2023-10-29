import { PropsWithChildren, SyntheticEvent } from "react";
import styled from "styled-components";
import { StylingProps } from "../../type/ui.type";

interface OverlayProps extends StylingProps {
  onClick?: (e: SyntheticEvent<HTMLDivElement>) => void;
  display?: boolean;
}

const StyledOverlay = styled.div<OverlayProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${({ display }) =>
    display ? "transparent" : "rgba(0, 0, 0, 0.45)"};
`;

const Overlay = ({
  style,
  onClick,
  display,
  children,
}: PropsWithChildren<OverlayProps>) => {
  const handleClick = (e: SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick && onClick(e);
  };

  return (
    <>
      <StyledOverlay onClick={handleClick} style={style} display={display} />
      {children}
    </>
  );
};
export default Overlay;

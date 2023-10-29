import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import { Size } from "../../theme/theme";
import styled from "styled-components";
import Close from "../icons/Close";
import { theme } from "../../theme";
import Overlay from "../ui/Overlay";
import { StylingProps } from "../../type/ui.type";

type Position = "bottom" | "middle" | "top";

interface ModalProps extends StylingProps {
  onClose: () => void;
  size?: Exclude<Size, "xs" | "xl" | "xxl">;
  title?: string;
  overlay?: boolean;
  open: boolean;
  position?: Position;
}

const handleSize = (size: Size) => {
  switch (size) {
    case "s":
      return "300px";
    case "m":
      return "650px";
    case "l":
      return "800px";
  }
};

const handlePosition = (position: Position) => {
  if (position === "top") {
    return { top: "10px", bottom: "auto", my: "10px" };
  }
  if (position === "bottom") {
    return { top: "auto", bottom: "10px", my: "10px" };
  }
  return { top: "0px", bottom: "0px", my: "auto" };
};

const StyledModalContainer = styled.div<Omit<ModalProps, "onClose" | "open">>`
  box-sizing: border-box;
  width: fit-content;
  background-color: ${theme.color.white};
  max-height: calc(100vh - 175px);
  height: fit-content;
  min-height: 50px;
  z-index: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ position }) => position && handlePosition(position)?.top};
  bottom: ${({ position }) => position && handlePosition(position)?.bottom};
  border-radius: 8px;
  margin: ${({ position }) => position && handlePosition(position)?.my} auto;
  overflow: hidden;
  box-shadow: -2px 2px 12px 3px rgba(0, 0, 0, 0.09);
  @media screen and (min-width: ${theme.sizing.breakpoint.l}) {
    max-width: ${({ size }) => size && handleSize(size)};
  }
`;

const StyledModalContent = styled.div<Pick<ModalProps, "title">>`
  padding: 0.3rem 0.8rem;
  text-align: justify;
  max-height: calc(100vh - 225px);
  overflow-x: hidden;
  overflow-y: auto;
  margin-block: 15px;
`;

const StyldedModalHeader = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.8rem 0;
`;

const StyledModalTitle = styled.h5`
  font-size: ${theme.typo.title.h5};
  font-weight: ${theme.typo.weight.bold};
  line-height: 1.3;
  margin-block-start: 0;
  margin-block-end: ${theme.spacing.xs}px;
`;

const StyledIcon = styled.span`
  transition: 400ms all ease-in-out;
  z-index: auto;
  &:hover {
    cursor: pointer;
    fill: ${theme.color.secondary.hover};
  }
`;

const StyledStickyClose = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    fill: ${theme.color.secondary.hover};
  }
`;

const Modal = ({
  overlay = false,
  onClose,
  style,
  size = "m",
  title,
  children,
  position = "middle",
  open,
}: PropsWithChildren<ModalProps>) => {
  console.log("title ", title === undefined);
  if (!open) {
    return <></>;
  }

  return ReactDOM.createPortal(
    <Overlay display={overlay} onClick={onClose}>
      <StyledModalContainer style={style} size={size} position={position}>
        {title ? (
          <>
            <StyldedModalHeader>
              <StyledModalTitle>{title}</StyledModalTitle>
              <StyledIcon onClick={onClose}>
                <Close fill={theme.color.secondary.default} size={24} />
              </StyledIcon>
            </StyldedModalHeader>
          </>
        ) : (
          <StyledStickyClose onClick={onClose}>
            <Close fill={theme.color.secondary.default} size={24} />
          </StyledStickyClose>
        )}
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalContainer>
    </Overlay>,
    document.body
  );
};
export default Modal;

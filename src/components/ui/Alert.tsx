import { PropsWithChildren } from "react";
import useToggle from "../../hooks/useToggle";
import styled from "styled-components";
import { StylingProps, TitleProps } from "../../type/ui.type";
import { theme } from "../../theme";
import Close from "../icons/Close";

type Type = "error" | "success" | "warning" | "primary" | "default";

interface AlertProps extends StylingProps, TitleProps {
  type?: Type;
  dismissible?: boolean;
}

const handleStyle = ({ type }: AlertProps) => {
  if (type === "error") {
    return {
      color: theme.color.error.darker,
      bgColor: theme.color.error.lighter,
    };
  }
  if (type === "success") {
    return {
      color: theme.color.success.darker,
      bgColor: theme.color.success.lighter,
    };
  }
  if (type === "warning") {
    return {
      color: theme.color.warning.darker,
      bgColor: theme.color.warning.lighter,
    };
  }
  if (type === "primary") {
    return {
      color: theme.color.primary.darker,
      bgColor: theme.color.primary.lighter,
    };
  }

  return {
    color: theme.color.secondary.darker,
    bgColor: theme.color.secondary.lighter,
  };
};

const StyledAlert = styled.div<AlertProps>`
  width: 100%;
  padding: 0.5rem 0.75rem 0.6rem;
  font-size: 15px;
  border: 1px solid transparent;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
  border-radius: 0.3rem;
  color: ${(props) => handleStyle(props)?.color};
  background-color: ${(props) => handleStyle(props)?.bgColor};
  position: relative;
`;

const StyledClose = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: auto;
  &:hover {
    fill: ${theme.color.secondary.dark};
    cursor: pointer;
  }
`;

const Alert = ({
  type = "default",
  style,
  dismissible = false,
  children,
}: PropsWithChildren<AlertProps>) => {
  const [open, toggle] = useToggle(true);

  if (!open) {
    return <></>;
  }
  return (
    <StyledAlert type={type} style={style}>
      {dismissible && (
        <StyledClose onClick={toggle}>
          <Close size={24} fill={theme.color.secondary.default} />
        </StyledClose>
      )}

      {children}
    </StyledAlert>
  );
};

export default Alert;

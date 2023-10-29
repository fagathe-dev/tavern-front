import { PropsWithChildren } from "react";
import useToggle from "../../hooks/useToggle";
import styled from "styled-components";
import { StylingProps, TitleProps } from "../../type/ui.type";
import { theme } from "../../theme";

export type Type = "error" | "success" | "warning" | "primary" | "default";

export interface ToastProps extends StylingProps, TitleProps {
  type?: Type;
}

const handleStyle = ({ type }: ToastProps) => {
  if (type === "error") {
    return {
      color: theme.color.white,
      bgColor: theme.color.error.default,
    };
  }
  if (type === "success") {
    return {
      color: theme.color.white,
      bgColor: theme.color.success.default,
    };
  }
  if (type === "warning") {
    return {
      color: theme.color.white,
      bgColor: theme.color.warning.default,
    };
  }
  if (type === "primary") {
    return {
      color: theme.color.white,
      bgColor: theme.color.primary.default,
    };
  }

  return {
    color: theme.color.base,
    bgColor: theme.color.secondary.default,
  };
};

const StyledToast = styled.div<ToastProps>`
  position: fixed;
  bottom: 20px;
  right: 10px;
  width: 100%;
  max-width: calc(100% - 20px);
  padding: 0.6rem 0.9rem;
  font-size: 15px;
  border: 1px solid transparent;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
  border-radius: 0.3rem;
  color: ${(props) => handleStyle(props)?.color};
  background-color: ${(props) => handleStyle(props)?.bgColor};
  @media screen and (min-width: ${theme.sizing.breakpoint.m}) {
    max-width: 350px;
  }
  @media screen and (min-width: ${theme.sizing.breakpoint.l}) {
    max-width: 450px;
  }
  @media screen and (min-width: ${theme.sizing.breakpoint.xl}) {
    max-width: 550px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Toast = ({
  type = "default",
  style,
  children,
}: PropsWithChildren<ToastProps>) => {
  const [open, toggle] = useToggle(true);

  if (!open) {
    return <></>;
  }
  return (
    <StyledToast onClick={toggle} type={type} style={style}>
      {children}
    </StyledToast>
  );
};

export default Toast;

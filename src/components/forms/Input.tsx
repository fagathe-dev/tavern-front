import styled from "styled-components";
import { FieldProps } from "../../type/forms.type";
import { StylingProps } from "../../type/ui.type";
import { Size } from "../../theme/theme";
import { theme } from "../../theme";

export type Type = "email" | "text" | "password";

export interface InputProps extends Omit<FieldProps, "onChange">, StylingProps {
  size?: Extract<Size, "s" | "m" | "l">;
  autoFocus?: boolean;
  autocomplete?: string;
  type?: Type;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const handleSize = ({ size }: InputProps) => {
  if (size === "s") {
    return {
      padding: ".3rem .8rem",
      fz: "12px",
      radius: "4px",
    };
  }

  if (size === "l") {
    return {
      padding: ".6rem .8rem",
      fz: "18px",
      radius: "8px",
    };
  }

  return {
    padding: ".4rem .8rem",
    fz: "14px",
    radius: "6px",
  };
};

const handleState = ({ state }: InputProps) => {
  switch (state) {
    case "error":
      return {
        border: theme.color.error.default,
        font: theme.color.error.darker,
      };
    case "success":
      return {
        border: theme.color.success.default,
        font: theme.color.success.darker,
      };
    case "warning":
      return {
        border: theme.color.warning.default,
        font: theme.color.warning.darker,
      };
    default:
      return {
        border: theme.color.secondary.default,
        font: theme.color.secondary.hover,
      };
  }
};

const StyledInput = styled.input<InputProps>`
  padding: ${(props) => handleSize(props)?.padding};
  font-size: ${(props) => handleSize(props)?.fz};
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-radius: ${(props) => handleSize(props)?.radius};
  appearance: none;
  font-weight: 400;
  line-height: 1.2;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    all 0.3s ease-in-out;
  border-color: ${(props) => handleState(props)?.border};
  color: ${(props) => handleState(props)?.font};
  background-color: transparent;
  &:focus,
  :active {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.15rem rgba(13, 110, 253, 0.25);
    outline: 0;
    background-color: ${theme.color.base};
  }
  &:disabled {
    opacity: 0.4;
  }
`;

const Input = ({
  id,
  size = "m",
  type = "text",
  autocomplete,
  disabled = false,
  autoFocus = false,
  name,
  state = "default",
  placeholder,
  onChange,
  style,
  value,
}: InputProps) => (
  <StyledInput
    id={id}
    size={size}
    type={type}
    onChange={onChange}
    name={name}
    state={state}
    placeholder={placeholder}
    style={style}
    autoFocus={autoFocus}
    autocomplete={autocomplete}
    disabled={disabled}
    value={value}
  />
);

export default Input;

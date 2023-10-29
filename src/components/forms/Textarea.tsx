import styled from "styled-components";
import { FieldProps } from "../../type/forms.type";
import { StylingProps } from "../../type/ui.type";
import { theme } from "../../theme";

type Resize = "none" | "both" | "horizontal" | "vertical" | "block" | "inline";

interface TextareaProps extends StylingProps, Omit<FieldProps, "onChange"> {
  resize?: Resize;
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  autocomplete?: boolean;
  autoFocus?: boolean;
  required?: boolean;
}

const handleState = ({ state }: TextareaProps) => {
  switch (state) {
    case "error":
      return {
        border: theme.color.error.hover,
        font: theme.color.error.darker,
      };
    case "success":
      return {
        border: theme.color.success.hover,
        font: theme.color.success.darker,
      };
    case "warning":
      return {
        border: theme.color.warning.hover,
        font: theme.color.warning.darker,
      };
    default:
      return {
        border: theme.color.secondary.hover,
        font: theme.color.secondary.hover,
      };
  }
};

const StyledTextarea = styled.textarea<TextareaProps>`
  width: 100%;
  border-radius: 5px;
  background-color: transparent;
  resize: ${({ resize }) => resize};
  border-color: ${(props) => handleState(props)?.border};
  color: ${(props) => handleState(props)?.font};
  appearance: none;
  font-weight: 400;
  line-height: 1.2;
  display: block;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  transition: 0.3s all ease-in-out;
  padding: 0.375rem 0.75rem;
  font-size: 14px;
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

const Textarea = ({
  value,
  placeholder,
  style,
  disabled = false,
  autoFocus = false,
  autocomplete,
  state = "default",
  onChange,
  id,
  name,
  rows = 4,
  resize = "vertical",
  required = false,
}: TextareaProps) => (
  <StyledTextarea
    resize={resize}
    onChange={onChange}
    id={id}
    name={name}
    disabled={disabled}
    placeholder={placeholder}
    style={style}
    autoFocus={autoFocus}
    autocomplete={autocomplete}
    rows={rows}
    value={value}
    state={state}
    required={required}
  >
    {placeholder ?? value}
  </StyledTextarea>
);

export default Textarea;

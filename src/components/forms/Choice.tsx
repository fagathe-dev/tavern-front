import styled from "styled-components";
import { FieldProps } from "../../type/forms.type";
import { Size } from "../../theme/theme";
import { StylingProps } from "../../type/ui.type";
import { theme } from "../../theme";

export interface ChoiceProps
  extends Omit<FieldProps, "placeholder">,
    StylingProps {
  checked?: boolean;
  size?: Extract<Size, "s" | "m" | "l">;
  optional?: boolean;
}

const handleState = ({ state }: ChoiceProps) => {
  if (state === "error") {
    return theme.color.error.default;
  }
  if (state === "warning") {
    return theme.color.warning.default;
  }
  if (state === "success") {
    return theme.color.success.default;
  }
  return "#737373";
};

const handleSize = ({ size }: ChoiceProps) => {
  if (size === "s") {
    return "1rem";
  }
  if (size === "l") {
    return "1.75rem";
  }
  return "1.25rem";
};

const StyledChoice = styled.input<ChoiceProps>`
  width: ${(props) => handleSize(props)};
  height: ${(props) => handleSize(props)};
  border: 1px solid ${(props) => handleState(props)};
  border-radius: ${({ optional }) => (optional ? "0.2rem" : "50%")};
  margin: 0;
  &:hover {
    cursor: pointer;
  }
  &:checked {
    border-color: ${theme.color.primary.default};
  }
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

const Choice = ({
  checked,
  size = "m",
  onChange,
  state = "default",
  name,
  id,
  disabled,
  style,
  optional,
}: ChoiceProps) => (
  <StyledChoice
    optional={optional}
    type={optional ? `checkbox` : `radio`}
    disabled={disabled}
    id={id}
    name={name}
    state={state}
    onChange={onChange}
    size={size}
    checked={checked}
    style={style}
  />
);

export default Choice;

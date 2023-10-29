import styled from "styled-components";
import { FormGroupProps } from "../../../type/forms.type";
import { randomString } from "../../../utils/str";
import Label from "../../ui/typo/Label";
import Small from "../../ui/typo/Small";
import Choice, { ChoiceProps } from "../Choice";
import FormGroup, { InputGroupProps } from "./FormGroup";

interface ChoiceFieldProps
  extends ChoiceProps,
    FormGroupProps,
    InputGroupProps {}

const StyledField = styled.div<ChoiceFieldProps>``;

const ChoiceField = ({
  sx,
  layout = "horizontal",
  state = "default",
  size = "m",
  disabled = false,
  name,
  onChange,
  checked,
  label,
  message,
}: ChoiceFieldProps) => {
  const identifier = randomString(12);

  return (
    <StyledField>
      <FormGroup sx={sx} layout={layout}>
        <Choice
          id={identifier}
          size={size}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          name={name}
          state={state}
          style={{
            marginInlineEnd: layout === "horizontal" ? ".5rem" : "0",
          }}
        />
        <Label htmlFor={identifier}>{label}</Label>
      </FormGroup>
      {message && <Small color={state}>{message}</Small>}
    </StyledField>
  );
};

export default ChoiceField;

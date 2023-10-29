import styled from "styled-components";
import FormGroup, { InputGroupProps } from "./FormGroup";
import { FormGroupProps } from "../../../type/forms.type";
import Label from "../../ui/typo/Label";
import { randomString, ucfirst } from "../../../utils/str";
import Input, { InputProps } from "../Input";
import Small from "../../ui/typo/Small";

interface InputFieldProps extends FormGroupProps, InputProps, InputGroupProps {}

const StyledField = styled.div<InputFieldProps>`
  width: 100%;
`;

const InputField = ({
  value,
  onChange,
  onBlur,
  state = "default",
  placeholder,
  autoFocus = false,
  autocomplete,
  label,
  message,
  style,
  sx,
  size = "m",
  type = "text",
  name,
  disabled = false,
  layout = "vertical",
}: InputFieldProps) => {
  const identifier = randomString(20);

  return (
    <FormGroup sx={sx} layout={layout}>
      <Label
        htmlFor={identifier}
        style={{
          marginInlineEnd: layout === "vertical" ? 10 : 0,
          marginBlockEnd: layout === "vertical" ? 0 : 10,
        }}
      >
        {label ?? ucfirst(name ?? "")}
      </Label>
      <StyledField>
        <Input
          state={state}
          name={name}
          type={type}
          id={identifier}
          value={value}
          autoFocus={autoFocus}
          autocomplete={autocomplete}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          style={style}
          size={size}
          disabled={disabled}
        />
        {message && <Small color={state}>{message}</Small>}
      </StyledField>
    </FormGroup>
  );
};

export default InputField;

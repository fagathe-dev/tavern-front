import { PropsWithChildren, SyntheticEvent } from "react";
import { StylingProps } from "../../type/ui.type";
import styled from "styled-components";

interface FormProps extends StylingProps {
  onSubmit?: (e: SyntheticEvent<HTMLFormElement>) => void;
  action?: string;
  method?: "post" | "get";
  encType?: string;
  name?: string;
}

const StyledForm = styled.form<FormProps>``;

const Form = ({
  onSubmit,
  action,
  method = "post",
  encType,
  cx = [],
  name,
  style,
  id,
  children,
}: PropsWithChildren<FormProps>) => (
  <StyledForm
    style={style}
    method={method}
    id={id}
    action={action}
    encType={encType}
    className={cx.join()}
    name={name}
    onSubmit={onSubmit}
  >
    {children}
  </StyledForm>
);

export default Form;

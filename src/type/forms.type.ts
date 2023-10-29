import React, { SyntheticEvent } from "react";

type State = "warning" | "success" | "error" | "default";

interface FieldProps {
  name?: string;
  value?: string;
  onChange?: () => void | ((e: SyntheticEvent<HTMLInputElement>) => void);
  placeholder?: string;
  state?: State;
  disabled?: boolean;
}

interface FormGroupProps {
  label?: string | React.ReactElement;
  message?: string;
}

export type { FieldProps, State, FormGroupProps };

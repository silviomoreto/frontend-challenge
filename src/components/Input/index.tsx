import React from "react";
import { FormControl, InputRoot, LabelRoot } from "./styles";

export interface Props {
  label: string;
  required?: boolean;
  type?: string;
  value?: any;
  onChange?: any;
}

const Input = ({ label, value, onChange, type = "text", ...rest }: Props) => {
  return (
    <FormControl>
      <LabelRoot>{label}</LabelRoot>
      <InputRoot type={type} value={value} onChange={onChange} {...rest} />
    </FormControl>
  );
};

export default Input;

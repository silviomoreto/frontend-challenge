import React from "react";
import { FormControl, LabelRoot, SelectRoot } from "./styles";

export interface Props {
  label: string;
  required?: boolean;
  options: any[];
  value?: any;
  onChange?: any;
}

const Select = ({ label, options, value, onChange, ...rest }: Props) => {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <FormControl>
      <LabelRoot>{label}</LabelRoot>
      <SelectRoot value={value} onChange={handleChange} {...rest}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectRoot>
    </FormControl>
  );
};

export default Select;

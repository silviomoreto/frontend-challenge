import React from "react";

import { InputField, Label } from "./styles";

const Input = (props) => {
  const { id, label, type, value, placeholder, handleInput, form } = props;
  return (
    <>
      <Label>{label}</Label>
      <InputField
        form={form}
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={handleInput}
      />
    </>
  );
};

export default Input;

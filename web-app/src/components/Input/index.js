import React from "react";

import { InputField } from "./styles";

const Input = (props) => {
  const { id, label, type, value, placeholder, handleInput } = props;
  return (
    <>
      <label>{label}</label>
      <InputField
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInput}
      />
    </>
  );
};

export default Input;

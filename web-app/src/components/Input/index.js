import React from "react";
import PropTypes from "prop-types";

import { InputField, Label } from "./styles";

const Input = (props) => {
  const { id, label, type, value, placeholder, handleInput, form } = props;
  return (
    <>
      {!!label && <Label>{label}</Label>}
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

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  handleInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  form: PropTypes.bool,
};

export default Input;

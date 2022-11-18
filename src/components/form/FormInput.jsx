import React from 'react';

const FormInput = ({ name, label, type, onchange, value, onBlur }) => {
  return (
    <div className="form_input">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onchange}
        type={type}
        name={name}
        id={name}
        placeholder=""
        value={value}
        onBlur={() => onBlur()}
      />
    </div>
  );
};

export default FormInput;

import React from 'react';

const FormInput = ({
  name,
  label,
  type,
  onchange,
  value,
  onBlur,
  placeholder,
  containerClassName,
  labelClassName,
  inputClassName,
}) => {
  return (
    <div className={`${containerClassName}`}>
      <label htmlFor={name} className={`${labelClassName}`}>
        {label}
      </label>
      <input
        onChange={onchange}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onBlur={() => {
          onBlur ? onBlur() : null;
        }}
        className={`${inputClassName}`}
      />
    </div>
  );
};

export default FormInput;

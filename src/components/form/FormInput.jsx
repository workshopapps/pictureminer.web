import React from 'react';

const FormInput = ({
  name,
  label,
  type,
  onchange,
  value,
  // onBlur,
  placeholder,
  className,
}) => {
  return (
    <div className="form_group">
      <label htmlFor={name} className="form_label">
        {label}
      </label>
      <input
        onChange={onchange}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        // onBlur={() => onBlur()}
        className={className}
      />
    </div>
  );
};

export default FormInput;

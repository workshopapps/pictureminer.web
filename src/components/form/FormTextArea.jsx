import React from 'react';

const FormTextArea = ({
  name,
  label,
  onchange,
  value,
  onBlur,
  placeholder,
  containerClassName,
  labelClassName,
  textareaClassName,
}) => {
  return (
    <div className={`${containerClassName}`}>
      <label htmlFor={name} className={`${labelClassName}`}>
        {label}
      </label>
      <textarea
        onChange={onchange}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onBlur={() => {
          onBlur ? onBlur() : null;
        }}
        className={`${textareaClassName}`}
      />
    </div>
  );
};

export default FormTextArea;

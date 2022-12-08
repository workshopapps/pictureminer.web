import React from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

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
  togglePassword,
  showPassword,
  buttonClassName,
  eyeIconClassName,
  required,
  id,
}) => {
  const regEx = /password/gi;
  const nameMatch = name.match(regEx);
  return (
    <div className={`${containerClassName}`}>
      <label htmlFor={name} className={`${labelClassName}`}>
        {label}
      </label>
      {nameMatch ? (
        <div className="relative">
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
            required={required}
          />
          <button
            id={id}
            className={`${buttonClassName}`}
            onClick={(e) => {
              togglePassword(e);
            }}
            type="button"
          >
            {showPassword ? (
              <AiOutlineEye className={`${eyeIconClassName}`} />
            ) : (
              <AiOutlineEyeInvisible className={`${eyeIconClassName}`} />
            )}
          </button>
        </div>
      ) : (
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
          required={required}
        />
      )}
    </div>
  );
};

export default FormInput;

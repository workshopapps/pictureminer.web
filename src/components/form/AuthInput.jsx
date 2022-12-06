import React from 'react';

const AuthInput = ({
  type = 'text',
  label = 'label',
  placeholder = 'placeholder',
  required = true,
  onChange,
  labelClassName = 'text-[#292929] font-medium text-base',
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={label} className={labelClassName}>
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        required={required}
        className="h-[44px] border border-[#909090] rounded-[8px] text-[#9f9f9f] font-medium text-[14px]"
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default AuthInput;

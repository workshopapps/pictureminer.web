import React from 'react';

const LoginFormInput = (props) => {
  return (
    <div className="flex flex-col my-2">
      <label className="my-1" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className="p-2 border rounded-lg text-[#9F9F9F]"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onchange}
      />
    </div>
  );
};

export default LoginFormInput;

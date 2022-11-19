import React from 'react';

const Button = ({ text, icon, onclick, type, className }) => {
  return (
    <>
      <button
        // className="py-2 px-8 rounded-lg text-normal"
        onClick={onclick}
        type={type}
        className={className}
      >
        {icon ? icon : ''}
        {text}
      </button>
    </>
  );
};

export default Button;

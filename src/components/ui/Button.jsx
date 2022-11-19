import React from 'react';

const Button = ({ text, icon, onclick, type, className }) => {
  return (
    <>
      <button onClick={onclick} type={type} className={className}>
        {icon ? icon : ''}
        {text}
      </button>
    </>
  );
};

export default Button;

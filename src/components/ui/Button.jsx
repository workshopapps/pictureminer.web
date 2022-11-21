import React from 'react';

const Button = ({ text, styles, icon, onclick, className, type, disabled }) => {
  return (
    <>
      <button
        className={className}
        style={styles}
        onClick={onclick}
        type={type}
        disabled={disabled}
      >
        {icon ? icon : ''}
        {text}
      </button>
    </>
  );
};

export default Button;

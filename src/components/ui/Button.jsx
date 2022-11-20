import React from 'react';

const Button = ({ text, styles, icon, onclick, className, type }) => {
  return (
    <>
      <button
        className={className}
        style={styles}
        onClick={onclick}
        type={type}
      >
        {icon ? icon : ''}
        {text}
      </button>
    </>
  );
};

export default Button;

import React from 'react';

const Button = ({ text, styles, icon, onclick, className }) => {
  return (
    <>
      <button className={className} style={styles} onClick={onclick}>
        {icon ? icon : ''}
        {text}
      </button>
    </>
  );
};

export default Button;

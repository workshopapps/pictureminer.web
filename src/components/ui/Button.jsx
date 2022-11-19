import React from 'react';

const Button = ({ text, styles, icon, onclick }) => {
  return (
    <>
      <button className="button" style={styles} onClick={onclick}>
        {icon ? icon : ''}
        {text}
      </button>
    </>
  );
};

export default Button;

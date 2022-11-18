import React from 'react';

const ShadowCard = ({ children, bgcolor, className, onclick }) => {
  return (
    <>
      <div
        className={className}
        style={{ backgroundColor: `${bgcolor}` }}
        onClick={onclick}
      >
        {children}
      </div>
    </>
  );
};

export default ShadowCard;

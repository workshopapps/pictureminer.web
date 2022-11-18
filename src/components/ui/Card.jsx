import React from 'react';
import '../../styles/Card.scss';
const Card = ({ children, style }) => {
  return (
    <>
      <div className="card-component" style={style}>
        {children}
      </div>
    </>
  );
};

export default Card;

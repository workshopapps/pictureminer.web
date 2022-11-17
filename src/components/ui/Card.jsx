import React from "react";

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

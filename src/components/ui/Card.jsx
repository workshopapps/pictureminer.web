import React from 'react';
import { PropTypes } from 'prop-types';
import '../../styles/Card.scss';
const Card = ({ children, style }) => {
  return (
    <>
      <div className="card-component " style={style}>
        {children}
      </div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;

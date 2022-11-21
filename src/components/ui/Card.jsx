import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { PropTypes } from 'prop-types';
=======
>>>>>>> 0314b4e (setup the card component)
=======
import { PropTypes } from 'prop-types';
>>>>>>> 6951468 (created the carousel component and the onclick function)
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

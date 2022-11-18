import React from 'react';
<<<<<<< HEAD
import { PropTypes } from 'prop-types';
=======
>>>>>>> 0314b4e (setup the card component)
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

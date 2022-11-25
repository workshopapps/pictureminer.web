import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Card = ({ title, paragraph, link }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{paragraph}</p>

      <Link to={link}>Learn More</Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  link: PropTypes.string,
};

export default Card;

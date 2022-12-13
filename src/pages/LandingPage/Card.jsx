import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
const Card = ({ title, paragraph, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}



    >
      <h3>{title}</h3>
      <p>{paragraph}</p>

      {link && <Link to={link}>Learn More</Link>}
    </motion.div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  link: PropTypes.string,
};

export default Card;

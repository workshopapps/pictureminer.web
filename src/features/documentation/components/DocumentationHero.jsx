import React from 'react';
import './DocumentationHero.css';
import PropTypes from 'prop-types';

function DocumentationHero(props) {
  return (
    <div className="hero text-white p-[3rem]">
      <h1 className="headerText md:text-4xl font-bold pb-4">
        {props.headerText}
      </h1>
      <p className="text-2xl">{props.paragraphText}</p>
    </div>
  );
}

DocumentationHero.propTypes = {
  headerText: PropTypes.string,
  paragraphText: PropTypes.string,
};

export default DocumentationHero;

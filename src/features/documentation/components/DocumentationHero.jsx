import React from 'react';
import './DocumentationHero.scss';
import PropTypes from 'prop-types';

function DocumentationHero({ headerText, paragraphText }) {
  return (
    <div className="bg-[#092C4C] text-white text-center py-20 px-10">
      <h1 className="headerText text-3xl md:text-4xl font-bold pb-4">
        {headerText}
      </h1>
      <p className="md:text-xl font-medium">{paragraphText}</p>
    </div>
  );
}

DocumentationHero.propTypes = {
  headerText: PropTypes.string,
  paragraphText: PropTypes.string,
};

export default DocumentationHero;

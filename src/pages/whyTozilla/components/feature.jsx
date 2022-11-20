import React from 'react';

import PropTypes from 'prop-types';
function Feature({ title, svg, text }) {
  return (
    <div
      className="pl-4 pr-5 py-6 features-card h-[246px]h"
    >
      <div className="flex items-center justify-center w-[30px] lg:w-[73px] h-[30px] lg:h-[73px] bg-[#F79009] rounded-full">
        {svg}
      </div>
      <div className="mt-4">
        <h6 className="font-semibold text-sm lg:text-base text-[#1D1D1D]">
          {title}
        </h6>
        <p className="mt-1 text-sm md:text-xs lg:leading-[18px] lg:text-sm text-[#324F6A] font-Axiforma">
          {text}
        </p>
      </div>
    </div>
  );
}

Feature.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  svg: PropTypes.element,
};

export default Feature;

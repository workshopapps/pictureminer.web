import React from 'react';

import PropTypes from 'prop-types';
function Feature({ title, svg, text }) {
  return (
    <div className="bg-white pl-4 pr-5 lg:py-6 features-card h-[246px]h py-[40px] lg:my-[30px] rounded-lg max-[480px]:m-[20px]">
      <div className="flex items-center justify-center w-[20px] h-[20px] bg-[#F79009] rounded-full">
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

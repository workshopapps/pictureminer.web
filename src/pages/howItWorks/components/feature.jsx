import React from 'react';
import PropTypes from 'prop-types';

function Feature({ title, text, image, idx }) {
  return (
    <div className="md:odd:bg-[#D2D2D2]/20 first:py-11 px-[74px]">
      <div className="flex flex-col md:flex-row gap-y-7 md:gap-y-5 items-center justify-center md:gap-x-12 lg:gap-x-10">
        <div className="w-[360px] lg:w-[416px]">
          <div className="relative mx-auto w-fit md:mx-0">
            <h1 className="how-it-works-gradient-text">0{idx + 1}</h1>
            <h3 className="text-black md:w-[78px] lg:w-[117px] font-bold md:text-base lg:text-2xl">
              {title}
            </h3>
          </div>
          <p
            className="mt-[30px] lg:mt-8 text-[#1D1D1D] text-sm lg:text-lg font-Roboto"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="w-full md:w-[315px] lg:w-[350px] rounded-[4px] md:py-16"
          />
        </div>
      </div>
    </div>
  );
}

Feature.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  idx: PropTypes.number,
};

export default Feature;

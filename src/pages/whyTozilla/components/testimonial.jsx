import React from 'react';
import PropTypes from 'prop-types';


function Testimonial({ text, image, name, onSmallScreen }) {
  return (
    <div
      className={`flex-0 testimonial-card px-3 py-2 md:pt-0 md:pl-[14px] md:pr-3 md:pb-5 lg:p-0 lg:pb-7 ${onSmallScreen}`}
    >
      <h1 className="lg:pl-[26px] lg:pt-[19px] mb-2 md:mb-0 h-[27px] md:h-[50px] lg:h-[62px]">
        <svg width="35" height="23" className="hidden lg:block" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4 -9.53674e-07C3.8 4.88 0.0400002 10 0.0400002 15.2C0.0400002 19.36 2.84 22.32 6.68 22.32C10.12 22.32 13 19.6 13 16.32C13 13.36 10.52 10.72 7.64 10.72H7.48C8.36 9.2 10.68 7.04 14.44 4.24L11.4 -9.53674e-07ZM27.24 10.72C28.12 9.2 30.44 7.04 34.2 4.24L31.16 -9.53674e-07C23.56 4.88 19.8 10 19.8 15.2C19.8 19.36 22.6 22.32 26.44 22.32C29.88 22.32 32.76 19.6 32.76 16.32C32.76 13.36 30.28 10.72 27.4 10.72H27.24Z" fill="#8E8E8E"/>
        </svg>
        <svg
          width="24"
          height="16"
          className="hidden md:block lg:hidden"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9 -6.55651e-07C2.675 3.355 0.0900001 6.875 0.0900001 10.45C0.0900001 13.31 2.015 15.345 4.655 15.345C7.02 15.345 9 13.475 9 11.22C9 9.185 7.295 7.37 5.315 7.37H5.205C5.81 6.325 7.405 4.84 9.99 2.915L7.9 -6.55651e-07ZM18.79 7.37C19.395 6.325 20.99 4.84 23.575 2.915L21.485 -6.55651e-07C16.26 3.355 13.675 6.875 13.675 10.45C13.675 13.31 15.6 15.345 18.24 15.345C20.605 15.345 22.585 13.475 22.585 11.22C22.585 9.185 20.88 7.37 18.9 7.37H18.79Z"
            fill="#8E8E8E"
          />
        </svg>
        <svg
          width="18"
          height="12"
          className="md:hidden"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.2 -4.76837e-07C2.4 2.44 0.52 5 0.52 7.6C0.52 9.68 1.92 11.16 3.84 11.16C5.56 11.16 7 9.8 7 8.16C7 6.68 5.76 5.36 4.32 5.36H4.24C4.68 4.6 5.84 3.52 7.72 2.12L6.2 -4.76837e-07ZM14.12 5.36C14.56 4.6 15.72 3.52 17.6 2.12L16.08 -4.76837e-07C12.28 2.44 10.4 5 10.4 7.6C10.4 9.68 11.8 11.16 13.72 11.16C15.44 11.16 16.88 9.8 16.88 8.16C16.88 6.68 15.64 5.36 14.2 5.36H14.12Z"
            fill="#8E8E8E"
          />
        </svg>
      </h1>
      <p className="lg:px-[43px] text-xs leading-[18px] lg:text-[15px] lg:leading-6 font-Axiforma text-[#061D33]">
        {text}
      </p>
      <div className="lg:ml-6 mt-1.5 lg:mt-7 flex items-center space-x-3 lg:space-x-[14px]">
        <img
          src={image}
          alt="Person looking up"
          className="w-[30px] lg:w-10"
        />
        <h6 className="font-Axiforma text-xs lg:text-[15px] leading-[18px] lg:leading-[25px] font-medium lg:font-bold">
          {name}
        </h6>
      </div>
    </div>
  );
}

Testimonial.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.element,
    onSmallScreen: PropTypes.string
};

export default Testimonial;

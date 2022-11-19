import React from 'react';
import { PropTypes } from 'prop-types';
const PrevIcon = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <svg
        className="cursor-pointer"
        width="9"
        height="18"
        viewBox="0 0 9 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.08984 16.9181L1.56984 10.3981C0.799843 9.62812 0.799843 8.36813 1.56984 7.59813L8.08984 1.07812"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

PrevIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PrevIcon;

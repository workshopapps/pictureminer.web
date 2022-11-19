import React from 'react';
import { PropTypes } from 'prop-types';
const NextIcon = ({ onClick }) => {
  return (
    <div>
      <svg
        className="cursor-pointer"
        onClick={onClick}
        width="9"
        height="18"
        viewBox="0 0 9 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.910156 16.9181L7.43016 10.3981C8.20016 9.62812 8.20016 8.36813 7.43016 7.59813L0.910156 1.07812"
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

NextIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NextIcon;

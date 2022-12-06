import React from 'react';

const SuccessIcon = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
        display: 'flex',
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.1" cx="24" cy="24" r="24" fill="#12B76A" />
        <path
          d="M15.8708 23.9998L21.6773 29.8063L33.2902 18.1934"
          stroke="#12B76A"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SuccessIcon;

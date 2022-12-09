import React from 'react';

const Button = ({
  text,
  styles,
  icon,
  onclick,
  className,
  type,
  disabled,
  loading,
}) => {
  return (
    <>
      <button
        className={className}
        style={styles}
        onClick={onclick}
        type={type}
        disabled={disabled}
      >
        {icon ? icon : ''}
        {loading && (
          <div className="flex justify-center items-center">
            <div
              className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full mr-2"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {text}
      </button>
    </>
  );
};

export default Button;

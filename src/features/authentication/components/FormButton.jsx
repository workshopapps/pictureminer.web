import React from 'react';

const FormButton = (props) => {
  return (
    <div>
      <button className="px-20 py-3 my-3 items-center mx-auto flex border bg-[#FF971E] text-white text-base sm:text-lg rounded-xl">
        {props.name}
      </button>
    </div>
  );
};

export default FormButton;

import React from 'react';
const HeaderText = () => {
  return (
    <div
      className="
    w-7/12 mx-auto text-center flex gap-4 lg:gap-12 flex-col justify-center items-center my-6 lg:my-20
    "
    >
      <h1 className="text-4xl lg:text-5xl flex justify-center gap-2">
        <div className="text-dark font-bold">Customer</div>
        <div className="text-orange-400 font-bold">Stories</div>
      </h1>
      <p className="text-center text-dark text-sm lg:text-xl lg:leading-6">
        Helping 3000+ companies mine images on their website for effecient data
        analysis and general company growth
      </p>
    </div>
  );
};

export default HeaderText;

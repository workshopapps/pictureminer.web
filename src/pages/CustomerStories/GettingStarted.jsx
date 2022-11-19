import React from 'react';

const GettingStarted = () => {
  return (
    <div className="flex gap-8 flex-col mt-6 mb-6">
      <div className="text-4xl text-black font-bold  text-center mx-5">
        <div>
          Get Started with <span className="text-[#FF6C00]">Mining</span> your
          Images
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center mx-5">
        Helping 3000+ companies mine images on their website for effecient data
        analysis and general company growth
      </div>

      <div className=" text-center  bg-[#FF6C00] w-[100px] cursor-pointer mx-auto text-white px-4 py-2 rounded-md ">
        Sign Up
      </div>
    </div>
  );
};

export default GettingStarted;

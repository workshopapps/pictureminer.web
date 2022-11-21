import React from 'react';
import Apply from '../Buttons/Apply';

function ReadyToPartner() {
  return (
    <div className="bg-white flex flex-col text-center items-center w-[425px] pt-[100px] pb-[100px] gap-[40px] md:w-[768px] lg:w-[1024px]  ">
      <div className="flex flex-col items-center w-[333px]  ">
        <h1 className=" text-[#1D1D1D] w-[287px] h-[68px] font-sans font-bold text-[24px] leading-[34px] text-center  md:text-[30px] md:leading-[42px] md:w-[528px] md:h-[42px] lg:w-[808px] lg:h-[60px] lg:text-[45px] lg:leading-[60px] ">
          Ready to Partner with{' '}
          <span className="text-[#FF9D55]">Minergram</span>?
        </h1>
        <p className=" text-[#1D1D1D] text-[12px] leading-[18px] font-normal font-sans   md:text-[14px] md:leading-[20px] md:w-[666px] md:h-[20px]  lg:w-[666px] lg:h-[24px] lg:text-[16px] lg:leading-[24px] ">
          Join our diverse stream of partners and start expanding!
        </p>
      </div>
      <Apply />
    </div>
  );
}

export default ReadyToPartner;

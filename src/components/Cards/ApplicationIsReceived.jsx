import React from 'react';
import ImageDone from '../../assets/pana.png';
import BackToHome from '../Buttons/BackToHome';
function ApplicationIsReceived() {
  return (
    <div className="flex flex-col items-center gap-[50px]  w-[425px] bg-white md:w-screen lg:w-screen max-w-screen-2xl pt-20 pb-40">
      <div className="text-center gap-[20px] flex flex-col  w-[303px]  h-[86px] md:w-[552px] lg:w-[552px] p-4">
        <h1 className=" w-[303px] h-[42px] font-sans font-bold text-[24px] leading-[34px] text-[#1D1D1D] text-center md:text-[30px] md:w-[552px] lg:w-[552px]lg:text-[40px] ">
          {' '}
          Application Received
        </h1>
        <p className="w-[303px] h-[24px] font-sans font-normal text-[12px] leading-[18px] md:text-[18px] md:leading-[24px]  lg:text-[18px] lg:leading-[24px] text-center text-[1D1D1D] md:w-[552px] lg:w-[552px]  ">
          Now all you have to do is wait to hear back from us.
        </p>
      </div>

      <img src={ImageDone} alt="Successful w-[307.34px] h-[300px]  " />

      <BackToHome />
    </div>
  );
}

export default ApplicationIsReceived;

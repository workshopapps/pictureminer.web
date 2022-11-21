import React from 'react';
import MinerGram from '../assets/Minergram 1-2.png';
import ForMD from '../components/ForMD';
import FormFooter from '../components/FormInputs/FormFooter';
import ForSmAndLg from '../components/ForSmAndLg';
function Footer() {
  return (
   
    <div className="bg-[#092C4C] flex flex-col  w-[425px] gap-20 p-8  md:w-screen lg:w-screen max-w-screen-2xl lg:items-center  ">
    <div className="flex flex-col gap-16  md:flex-row-reverse lg:flex-row-reverse   lg:gap-80   ">
    <div className="flex flex-col pt-8">
        <div className="flex flex-col gap-[16px] p-0 items-start ">
          <img src={MinerGram} alt="MinerGram" />
          <h2 className=" text-white font-semibold text-[16px] leading-[24px]  ">
            Subscribe to our newsletter
          </h2>
          <FormFooter />
          </div>
        </div>
        <div className="block md:hidden lg:block">
          <ForSmAndLg />
        </div>
        <div className="hidden md:block lg:hidden">
          <ForMD />
        </div>
      </div>

      <div className="flex flex-col gap-10 md:items-center lg:flex-row lg:gap-4 ">
        <hr className=" text-[#EAECF0] w-[290px] h-[1px] md:hidden lg:block lg:w-[456px] " />
        <h2 className="text-[#98A2B3] font-normal leading-[24px] text-[16px] font-sans ">
          {' '}
          &copy; {new Date().getFullYear()} Minergram. All rights reserved.
        </h2>
        <hr className=" hidden text-[#EAECF0] w-[290px] h-[1px] md:hidden lg:block lg:w-[456px]" />
      </div>
    </div>
    
  );
}

export default Footer;

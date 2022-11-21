import React from 'react';
import Group1 from '../../assets/Rectangle 4729-2.png';
import Group2 from '../../assets/Rectangle 4730.png';
import Apply from '../Buttons/Apply';
function Explore() {
  return (
    <div className="bg-white flex flex-col text-center items-center w-[425px] md:w-[768px]  lg:w-[1024px] ">
      <div className="flex flex-col pt-[80px] pb-36   items-center gap-[50px]    ">
        <div className="text-center gap-[10px] flex flex-col w-[307px] h-[114px] md:w-[666px] md:h-[72px]  ">
          <h1 className="pl-[25px] w-[287px] h-[68px] font-sans font-bold text-[24px] leading-[34px] text-[#1D1D1D] text-center md:w-[666px] md:h-[42px] md:pl-[14px] md:text-[30px] lg:text-[40px] lg:pr-4 lg:w-[720px] ">
            {' '}
            Explore Our Partnership Programs{' '}
          </h1>
          <p className=" w-[307px] h-[36px] font-sans font-normal text-[12px] leading-[18px] text-center text-[1D1D1D] md:w-[666px] md:h-[20px] md:text-[14px] lg:text-[16px] lg:leading-[24px] lg:w-[726px]  ">
            We have two programs that caters to your need depending on what you
            are looking out for.
          </p>
        </div>

        <div className="flex flex-col items-start gap-[50px] w-[340px]  ">
          <div className="first flex flex-col items-center gap-[30px] p-0 w-[340px] h-[380px] md:flex-row-reverse  md:h-[260px] md:items-center md:gap-[40px] md:ml-48 lg:gap-[68px] ">
            <div className="text-center gap-[10px] flex flex-col w-[335px] h-[110px]  md:items-start lg:items-start ">
              <h2 className="font-bold text-[#1D1D1D] text-[18px] leading-[28px] md:text-[20px]  lg:text-[26px] ">
                Referral Partner Program
              </h2>{' '}
              <p className=" w-[335px] h-[72px] font-sans font-normal text-[12px] md:text-start lg:text-start leading-[18px] text-center text-[1D1D1D] md:h-[140px] md:text-[14px] lg:text-[16px] lg:w-[400px]  ">
                Anyone interested in making money by referring a customer to us
                and letting us handle the rest can sign up for our referral
                program. Just take pleasure in your benefits with no obligations
                or demands.
              </p>
            </div>
            <img src={Group1} alt="Revenue share" />
          </div>

          <div className="second flex flex-col items-center gap-[30px] p-0 w-[340px] h-[380px] md:flex-row-reverse  md:h-[260px] md:items-center md:gap-[40px] md:ml-48 lg:gap-[68px] ">
            <div className="text-center gap-[10px] flex flex-col w-[335px] h-[110px]  md:items-start lg:items-start">
              <h2 className="font-bold text-[#1D1D1D] text-[18px] leading-[28px] md:text-[20px] lg:text-[26px] ">
                Tech Partner Program
              </h2>{' '}
              <p className=" w-[335px] h-[72px] font-sans font-normal text-[12px] leading-[18px] text-center md:text-start lg:text-start text-[1D1D1D] md:h-[140px] md:text-[14px] lg:text-[16px] lg:w-[400px]">
                For a more effective experience for our customers, we have
                developed an API integration that expands the capabilities of
                Minergram’s main product so that more data can be imported and
                give clients a seamless experience.{' '}
              </p>
            </div>
            <img src={Group2} alt="Tech Partner Program" />
          </div>
        </div>

        <Apply />
      </div>
    </div>
  );
}

export default Explore;

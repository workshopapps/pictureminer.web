import React from 'react';
import Group1 from '../../assets/Group 162757.png';
import Group2 from '../../assets/Group 162757-2.png';
import Group3 from '../../assets/Group 162756.png';
function Benefits() {
  return (
    <div className="flex flex-col items-center w-[425px] bg-[#FAFAFA] md:w-screen lg:w-screen max-w-screen-2xl ">
      <div className="flex flex-col pt-[80px]  pb-20   items-center gap-[30px]  ">
        <div className="text-center gap-[10px] flex flex-col w-[307px] h-[114px] md:h-[72px] md:w-[666px] lg:w-[696px] lg:h-[98px]  ">
          <h1 className="pl-10 w-[267px] h-[68px] font-sans font-bold text-[24px] leading-[34px] text-[#1D1D1D] text-center md:w-[457px] md:ml-[75px] lg:text-[40px]  lg:pl-0 lg:pr-36  lg:w-[720px] ">
            Benefits of Partnering with Us
          </h1>
          <p className=" w-[307px] h-[36px] font-sans font-normal text-[12px] leading-[18px] text-center text-[1D1D1D] md:w-[666px] md:text-[14px] lg:text-[16px] lg:leading-[24px] lg:pl-14   ">
            These are a few of the benefits that come with partnering up with us
            at Tozilla
          </p>
        </div>
        <div className="second flex flex-col items-start gap-[40px] w-[323px] h-[497px] md:flex-row md:gap-[2px] md:w-[751px] md:h-[190px] lg:w-[986px] ">
          <div className="Revenue-Share flex flex-col items-center p-0 gap-[10px] w-[323px] h-[139px]  ">
            <img src={Group1} alt="Revenue Share" />
            <h2 className="font-bold text-[#1D1D1D] text-[18px] leading-[28px] lg:text-[24px] lg:leading-[30px] ">
              Revenue share
            </h2>
            <p className="w-[323px] h-[36px] font-sans font-normal text-[12px] leading-[18px] text-center text-[#1D1D1D] md:w-[250px] md:h-[54px] lg:w-[303px] lg:h-[72px] lg:text-[16px] lg:leading:[24px] ">
              Get substantial revenue by just referring merchants to integrate
              our API into their product.
            </p>
          </div>

          <div className="Insider-Access flex flex-col items-center p-0 gap-[10px] w-[323px] h-[139px]  ">
            <img src={Group2} alt="Insider Access" />
            <h2 className="font-bold text-[#1D1D1D] text-[18px] leading-[28px] lg:text-[24px] lg:leading-[30px]">
              Insider Access
            </h2>
            <p className="w-[323px] h-[36px] font-sans font-normal text-[12px] leading-[18px] text-center text-[#1D1D1D] md:w-[250px] md:h-[72px] lg:w-[303px] lg:h-[72px] lg:text-[16px] lg:leading:[24px]">
              Be among the first to know about and test any of our new
              innovations, intergations, products or features.
            </p>
          </div>

          <div className="Partner-Support flex flex-col items-center p-0 gap-[10px] w-[323px] h-[139px]  mb-[80px] ">
            <img src={Group3} alt="Partner Support" />
            <h2 className="font-bold text-[#1D1D1D] text-[18px] leading-[28px]  lg:text-[24px] lg:leading-[30px] ">
              Partner Support
            </h2>
            <p className="w-[323px] h-[36px] font-sans font-normal text-[12px] leading-[18px] text-center text-[#1D1D1D] md:w-[250px] md:h-[54px] lg:w-[303px] lg:h-[72px] lg:text-[16px] lg:leading:[24px]">
              We have two programs that caters to your need depending on what
              you are looking out for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;

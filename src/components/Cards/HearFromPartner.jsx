import React from 'react';
import QuoteDown from '../../assets/quote-down.png';
import Flow from '../../assets/Frame 1000003706.png';
import MarkEssien from '../../assets/Rectangle 4715.png';
function HearFromPartner() {
  return (
    <div className="flex flex-col items-center w-[425px] bg-[#FAFAFA] md:w-screen lg:w-screen max-w-screen-2xl md:flex-row lg:flex-row   lg:justify-center lg:gap-20 ">
      <div className=" flex flex-col items-start pt-14 gap-[30px] pb-12 lg:gap-[30px]  ">
        <h1 className=" w-[287px] h-[34px] font-sans font-bold text-[24px] leading-[34px] text-[#1D1D1D] text-start md:w-[358px] md:h-[42px] md:text-[30px] md:leading-[42px]  lg:w-[548px] lg:h-[42px] lg:text-[38px] lg:leading-[42px]  ">
          Hear from Our Partners
        </h1>

        <div className="flex flex-col items-start gap-[40px] w-[395px] ">
          <div className=" flex flex-col items-start gap-[20px] ">
            <img src={QuoteDown} alt=" Quote down" />
            <p className=" w-[395px] h-[100px] font-sans font-bold text-[14px] leading-[20px] text-[#1D1D1D] md:w-[375px] md:h-[120px] md:text-[16px] md:leading-[24px] lg:text-[18px] ">
              I love what Minergram has done for my Company so far. We have
              noticed a 60% spike in customer conversion ever since we partenerd
              with them. I’m looking forward to how far Tozilla will take my
              company.
            </p>

            <div className="flex flex-col items-start gap-[10px] ">
              <h2 className="w-[395px]  font-sans font-semibold text-[12px] leading-[20px] text-[#1D1D1D] ">
                Mark Essien
              </h2>
              <h2 className="w-[395px] font-sans font-semibold text-[12px] leading-[20px] text-[#B4B4B4] ">
                Founder/CEO of hotels.ng
              </h2>
              <img
                src={Flow}
                alt="Flow"
                className="items-start w-[92px] h-[10px]  "
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={MarkEssien}
        alt="Mark Essien"
        className=" w-[395px] h-[322.45px] md:w-[324px] md:h-[280px] md:mt-32  lg:w-[413px] lg:h-[358px] lg:mt-32"
      />
    </div>
  );
}

export default HearFromPartner;

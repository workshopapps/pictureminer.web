import React from 'react';
import Group1 from '../../assets/PartnerWithUsPages/Rectangle 4731-2.png';
import FormInputApply from '../../components/form/FormInputApply';
function Apply() {
  return (
    <div className="flex flex-col items-center bg-white w-[425px] mt-14 md:w-[768px]  lg:w-[1024px] lg:mx-auto ">
      <div className="p-4">
        <div className="flex flex-col gap-10 md:flex-row lg:gap-10  ">
          <div className="flex flex-col gap-8 md:gap-10">
            <img src={Group1} alt="Apply" />
            <div className="flex flex-col items-center gap-3 md:text-start md:items-start md:gap-[10px] md:w-[369px] md:h-[214px] lg:w-[522px] lg:h-[250px] ">
              <h1 className="   font-sans font-bold text-[24px] leading-[34px] text-[#1D1D1D] text-center  md:text-start md:w-[369px] md:text-[30px]  lg:w-[402px] lg:h-[100px] lg:pl-0 lg:text-[36px] lg:leading-[50px]   ">
                Apply to a partnership program
              </h1>
              <p className=" w-[365px] h-[90px] font-sans font-normal text-[12px] leading-[18px] text-center text-[1D1D1D] md:w-[365px] md:text-[14px] md:text-start lg:text-[16px] lg:leading-[24px]  ">
                Want to become a part of the Discripto partnership ecosystem?
                Our Head of Partnerships will get in touch with you after you
                complete the form below to start the conversation and learn more
                about your company and how your solution supports merchant
                growth.
              </p>
            </div>
          </div>
          <FormInputApply />
        </div>
      </div>
    </div>
  );
}

export default Apply;

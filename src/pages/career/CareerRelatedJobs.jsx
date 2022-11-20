import React from 'react';
import { Link } from 'react-router-dom';
import design from '../../assets/design.png';
import finance from '../../assets/finance.png';
import admin from '../../assets/admin.png';

const CareerRelatedJobs = () => {
  return (
    <section className="max-w-[1280px] mx-auto py-10 sm:pt-16 sm:pb-8 px-2 md:px-4">
      <p className="text-base sm:text-[18px] md:text-[24px] leading-[24px]  sm:leading-[28px] md:leading-[35px]">
        Related jobs
      </p>
      <div className="text-right px-4 pt-2 pb-4 sm:pb-6">
        <Link
          to="/careers/more-jobs"
          className="text-[#092C4C] text-[16px] sm:text-[20px]"
        >
          See more...
        </Link>
      </div>

      <div className="my-4 sm:my-8 flex flex-wrap gap-4 justify-center">
        <div className="relative">
          <div className="w-full max-w-[400px]  rounded-[8px]">
            <div className="w-full h-[90%]">
              <img src={admin} className="" />
            </div>
            <div
              className="flex justify-between p-3 sm:p-4 absolute  bottom-0 right-0 left-0"
              style={{
                backgroundColor: 'white',
                border: '1px solid #B4B4B4',
                borderTop: 'none',
                borderRadius: '0px 0px 8px 8px',
              }}
            >
              <p
                className=" flex flex-col text-base sm:text-[16px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                Design <br />
                <span>Intern role</span>
              </p>
              <Link
                to="/careers/jobs/singles"
                className="rounded-[8px] w-[150px] h-[44px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00]"
              >
                View
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-full max-w-[400px]  rounded-[8px]">
            <div className="w-full h-[90%]">
              <img src={design} className="" />
            </div>
            <div
              className="flex justify-between p-3 sm:p-4 absolute  bottom-0 right-0 left-0"
              style={{
                backgroundColor: 'white',
                border: '1px solid #B4B4B4',
                borderTop: 'none',
                borderRadius: '0px 0px 8px 8px',
              }}
            >
              <p
                className=" flex flex-col text-base sm:text-[16px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                Design lead <br />
                <span>Lead role</span>
              </p>
              <Link
                to="/careers/jobs/singles"
                className="rounded-[8px] w-[150px] h-[44px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00]"
              >
                View
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full max-w-[400px]  rounded-[8px]">
            <div className="w-full h-[90%]">
              <img src={finance} className="" />
            </div>
            <div
              className="flex justify-between p-3 sm:p-4 absolute  bottom-0 right-0 left-0 "
              style={{
                backgroundColor: 'white',
                border: '1px solid #B4B4B4',
                borderTop: 'none',
                borderRadius: '0px 0px 8px 8px',
              }}
            >
              <p
                className=" flex flex-col text-base sm:text-[16px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                Design <br />
                <span>Intern role</span>
              </p>
              <Link
                to="/careers/jobs/singles"
                className="rounded-[8px] w-[150px] h-[44px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00]"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerRelatedJobs;

import React from 'react';
import { Link } from 'react-router-dom';
import design from '../../assets/design.png';
import finance from '../../assets/finance.png';
import admin from '../../assets/admin.png';

const EmployeesBlogPost = () => {
  return (
    <section className="max-w-[1280px] mx-auto py-10 sm:pt-16 sm:pb-8 px-2 md:px-4">
      <p className="text-base sm:text-[18px] md:text-[24px] leading-[24px]  sm:leading-[28px] md:leading-[35px]">
        Employees blog post
      </p>
      <div className="text-right px-4 pt-2 pb-4 sm:pb-6">
        <Link to="/blog" className="text-[#092C4C] text-[16px] sm:text-[20px]">
          See more...
        </Link>
      </div>

      <div className="my-4 sm:my-8 flex flex-wrap gap-4 justify-center">
        <div className="relative">
          <div className="w-full max-w-[400px]  rounded-[8px]">
            <div className="w-full h-[90%]">
              <img src={admin} className="" />
            </div>
            <div className="flex justify-between p-3 sm:p-4 absolute  bottom-0 right-0 left-0">
              <p
                className=" flex flex-col text-base sm:text-[16px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                Learn with Us <br />
                <span>By Julie Ceaser</span>
              </p>
              <Link
                to="/careers/#"
                className="rounded-[8px] w-[150px] h-[44px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00]"
              >
                Read
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-full max-w-[400px]  rounded-[8px]">
            <div className="w-full h-[90%]">
              <img src={design} className="" />
            </div>
            <div className="flex justify-between p-3 sm:p-4 absolute  bottom-0 right-0 left-0">
              <p
                className=" flex flex-col text-base sm:text-[16px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                Building and Keeping <br />
                <span>By Julie Ceaser</span>
              </p>
              <Link
                to="/careers/#"
                className="rounded-[8px] w-[150px] h-[44px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00]"
              >
                Read
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full max-w-[400px]  rounded-[8px]">
            <div className="w-full h-[90%]">
              <img src={finance} className="" />
            </div>
            <div className="flex justify-between p-3 sm:p-4 absolute  bottom-0 right-0 left-0">
              <p
                className=" flex flex-col text-base sm:text-[16px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                Building and Keeping <br />
                <span>By Julie Ceaser</span>
              </p>
              <Link
                to="/careers/#"
                className="rounded-[8px] w-[150px] h-[44px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00]"
              >
                Read
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeesBlogPost;

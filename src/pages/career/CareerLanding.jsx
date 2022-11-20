import React from 'react';
import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import design from '../../assets/design.png';
import it from '../../assets/it.png';
import legal from '../../assets/legal.png';
import customer from '../../assets/customer.png';
import finance from '../../assets/finance.png';
import admin from '../../assets/admin.png';
import EmployeesBlogPost from './EmployeesBlogPost';

const options = ['All jobs', 'Designer', 'IT'];

const CareerLanding = () => {
  const defaultOption = options[0];

  return (
    <main>
      <section className="career-hero-bg rlative min-h-[400px] sm:h-[480px] flex items-end text-white">
        <div className="h-fit w-fit mx-auto bg-[#092C4C] px-4 md:px-[40px] relative">
          <p className="text-[18px] leading-[28px] pt-[55px] pb-6">
            Checkout our available jobs
          </p>
          <div className="flex gap-4 items-end pb-8">
            <div className="w-full max-w-[254px] md:w-[254px]">
              <div>Job roles</div>
              <Dropdown
                options={options}
                // onChange={this._onSelect}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
            <div className="w-full max-w-[254px] md:w-[254px]">
              Job roles
              <Dropdown
                options={options}
                // onChange={this._onSelect}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
            <div>
              <button className="rounded-[8px] w-[150px] h-[44px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00]">
                Search
              </button>
            </div>
          </div>
          <div className="h-[50px] w-full mx-auto bg-[#092C4C] px-4 md:px-[40px] absolute left-0 right-0"></div>
        </div>
      </section>
      <section>
        <div className="max-w-[1033px] mx-auto flex flex-col items-center gap-6 text-[#1D1D1D] py-40 px-3">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-[244px] h-[40px] sm:w-[368px] sm:h-[60px]"
            />
          </div>
          <h1 className="text-[24px] sm:text-[36px] md:text-[48px] leading-[30px] sm:leading-[64px]">
            where fun and work coexists{' '}
          </h1>
          <p className="text-[18px] sm:text-[24px] text-center">
            We believe that a settled happy mind, is a productive mind. As such,
            we created a calm atmosphere where work is fun with lots of breaks{' '}
          </p>
        </div>
      </section>
      <section className="text-[#1D1D1D] bg-[#CED5DB] max-w-[1280px] mx-auto py-6 sm:pt-14 sm:pb-8 px-2 md:px-4">
        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-medium leading-[35px] sm:leading-[42px] md:leading-[50px]">
          Job Openings
        </h2>
        <p className="text-base sm:text-[18px] md:text-[24px] leading-[24px]  sm:leading-[28px] md:leading-[35px]">
          We&apos;ve got new job roles and career opportunities for you!
        </p>
        <div className="text-right px-4 pt-2 pb-4 sm:pb-6">
          <Link
            to="/careers/more-jobs"
            className="text-[#092C4C] text-[16px] sm:text-[20px]"
          >
            See more...
          </Link>
        </div>
        <div
          className="my-4 sm:my-8 flex flex-wrap gap-4 justify-center"
          style={{
            rowGap: '2rem',
          }}
        >
          <div className="">
            <div className="w-full max-w-[400px]  rounded-[8px]">
              <div className="w-full h-[90%]">
                <img src={design} className="" />
              </div>
              <p
                className="bg-[#fbfbfb] flex items-center p-3 sm:p-4 text-base sm:text-[18px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                Design{' '}
                <span className="text-[12px] md:text-[16px] px-2">
                  1 role open
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-full max-w-[400px]  rounded-[8px]">
              <div className="w-full h-[90%]">
                <img src={it} className="" />
              </div>
              <p
                className="bg-[#fbfbfb] flex items-center p-3 sm:p-4 text-base sm:text-[18px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                IT{' '}
                <span className="text-[12px] md:text-[16px] px-2">
                  no roles
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-full max-w-[400px]  rounded-[8px]">
              <div className="w-full h-[90%]">
                <img src={legal} className="" />
              </div>
              <p
                className="bg-[#fbfbfb] flex items-center p-3 sm:p-4 text-base sm:text-[18px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                Legal{' '}
                <span className="text-[12px] md:text-[16px] px-2">
                  no roles open
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-full max-w-[400px]  rounded-[8px]">
              <div className="w-full h-[90%]">
                <img src={customer} className="" />
              </div>
              <p
                className="bg-[#fbfbfb] flex items-center p-3 sm:p-4 text-base sm:text-[18px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                Customer{' '}
                <span className="text-[12px] md:text-[16px] px-2">
                  2 roles open
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-full max-w-[400px]  rounded-[8px]">
              <div className="w-full h-[90%]">
                <img src={finance} className="" />
              </div>
              <p
                className="bg-[#fbfbfb] flex items-center p-3 sm:p-4 text-base sm:text-[18px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                Finance{' '}
                <span className="text-[12px] md:text-[16px] px-2">
                  no roles open
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-full max-w-[400px]  rounded-[8px]">
              <div className="w-full h-[90%]">
                <img src={admin} className="" />
              </div>
              <p
                className="bg-[#fbfbfb] flex items-center p-3 sm:p-4 text-base sm:text-[18px] sm:leading-[28px]"
                style={{
                  borderRadius: '0px 0px 8px 8px',
                }}
              >
                Admin{' '}
                <span className="text-[12px] md:text-[16px] px-2">
                  no roles open
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <EmployeesBlogPost />
    </main>
  );
};

export default CareerLanding;

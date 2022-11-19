import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import logo from '../../assets/logo.svg';

const options = ['All jobs', 'Designer', 'IT'];

const CareerLanding = () => {
  const defaultOption = options[0];

  return (
    <main>
      <section className="career-hero-bg rlative min-h-[400px] sm:h-[480px] flex items-end text-white">
        <div className="h-fit w-fit mx-auto bg-[#092C4C] px-4 md:px-[40px]">
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
        </div>
      </section>
      <section>
        <div className="max-w-[1033px] mx-auto flex flex-col items-center gap-6 text-[#1D1D1D] py-20 px-3">
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
    </main>
  );
};

export default CareerLanding;

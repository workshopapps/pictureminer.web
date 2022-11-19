import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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
    </main>
  );
};

export default CareerLanding;

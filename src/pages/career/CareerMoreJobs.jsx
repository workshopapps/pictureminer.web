import React from 'react';
import Dropdown from 'react-dropdown';
import { Link } from 'react-router-dom';

const options = ['All jobs', 'Designer', 'IT'];
const CareerMoreJobs = () => {
  const defaultOption = options[0];

  return (
    <div className="my-4">
      <header className="bg-[#092C4C] h-[220px] md:h-[320px] flex justify-end flex-col pb-4  px-[1rem] md:px-[80px] ">
        <h1
          className=" text-[24px] sm:text-[36px] md:text-[48px] font-medium leading-[64px] text-[#fbfbfb]"
          style={{
            letterSpacing: '-0.02em',
          }}
        >
          Jobs Available
        </h1>
        <p className="text-[#fbfbfb] float-right">451 jobs available</p>
        <div className="w-full max-w-[254px] md:w-[254px] block my-6">
          <Dropdown
            options={options}
            // onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
      </header>
      <section className="text-[#1D1D1D]  max-w-[1280px] mx-auto py-6 sm:pt-14 sm:pb-8 px-2 md:px-4">
        <div className="py-6 sm:py-10">
          <div className="w-full max-w-[254px] md:w-[254px]">
            <div className="text-[12px] sm:text-[14px] py-1  ">
              Filter job roles
            </div>
            <Dropdown
              options={options}
              // onChange={this._onSelect}
              value={defaultOption}
              placeholder="Select an option"
            />
          </div>
        </div>
        <div>
          <article className="flex  gap-3 sm:gap-5 md:gap-8 py-8">
            <div className="text-[24px] sm:text-[36px] md:text-[48px]">A</div>
            <div className="flex gap-4 flex-col">
              <h2 className="text-[18px] sm:text-[24px] md:text-[36px]">
                Admin office
              </h2>
              <div className="flex flex-col gap-8 ">
                <div className="flex flex-col md:flex-row md:justify-between gap-3 ">
                  <div className="flex flex-col gap-4 max-w-[713px]">
                    <h3 className="text-[16px] sm:text-[20px] md:text-[24px]">
                      Admininstrative Manager
                    </h3>
                    <p>
                      We are looking for an Administrative manager who has great
                      leadership abilities and is willingly to help the team
                      grow
                    </p>
                    <Link
                      to="/careers/jobs/singles"
                      className="rounded-[8px] w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00] text-[#FF6C00] font-medium leading-[24px]"
                    >
                      View more
                    </Link>
                  </div>
                  <div className=" flex flex-col justify-center">
                    <p>
                      Location: <b>Melbourne, USA</b>
                    </p>
                    <p>
                      Work type: <b>Onsite</b>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-3">
                  <div className="flex flex-col gap-4 max-w-[713px]">
                    <h3 className="text-[16px] sm:text-[20px] md:text-[24px]">
                      Executive Assistant
                    </h3>
                    <p>
                      We are looking for an Executiver who has great leadership
                      abilities and is willingly to help the team grow
                    </p>
                    <Link
                      to="/careers/jobs/singles"
                      className="rounded-[8px] w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00] text-[#FF6C00] font-medium leading-[24px]"
                    >
                      View more
                    </Link>
                  </div>
                  <div className=" flex flex-col justify-center">
                    <p>
                      Location: <b>Melbourne, USA</b>
                    </p>
                    <p>
                      Work type: <b>Onsite</b>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-3">
                  <div className="flex flex-col gap-4 max-w-[713px]">
                    <h3 className="text-[16px] sm:text-[20px] md:text-[24px]">
                      Personal Assistant
                    </h3>
                    <p>
                      We are looking for an Personalr who has great leadership
                      abilities and is willingly to help the team grow
                    </p>
                    <Link
                      to="/careers/jobs/singles"
                      className="rounded-[8px] w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00] text-[#FF6C00] font-medium leading-[24px]"
                    >
                      View more
                    </Link>
                  </div>
                  <div className=" flex flex-col justify-center">
                    <p>
                      Location: <b>Melbourne, USA</b>
                    </p>
                    <p>
                      Work type: <b>Onsite</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="flex  gap-3 sm:gap-5 md:gap-8 py-8">
            <div className="text-[24px] sm:text-[36px] md:text-[48px]">C</div>
            <div className="flex gap-4 flex-col">
              <h2 className="text-[18px] sm:text-[24px] md:text-[36px]">
                Customer Support
              </h2>
              <div className="flex flex-col gap-8 ">
                <div className="flex flex-col md:flex-row md:justify-between gap-3 ">
                  <div className="flex flex-col gap-4 max-w-[713px]">
                    <h3 className="text-[16px] sm:text-[20px] md:text-[24px]">
                      Customer support front desk
                    </h3>
                    <p>
                      We are looking for an Administrative manager who has great
                      leadership abilities and is willingly to help the team
                      grow
                    </p>
                    <Link
                      to="/careers/jobs/singles"
                      className="rounded-[8px] w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00] text-[#FF6C00] font-medium leading-[24px]"
                    >
                      View more
                    </Link>
                  </div>
                  <div className=" flex flex-col justify-center">
                    <p>
                      Location: <b>Melbourne, USA</b>
                    </p>
                    <p>
                      Work type: <b>Onsite</b>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-3">
                  <div className="flex flex-col gap-4 max-w-[713px]">
                    <h3 className="text-[16px] sm:text-[20px] md:text-[24px]">
                      Receptionist
                    </h3>
                    <p>
                      We are looking for an Personalr who has great leadership
                      abilities and is willingly to help the team grow
                    </p>
                    <Link
                      to="/careers/jobs/singles"
                      className="rounded-[8px] w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00] text-[#FF6C00] font-medium leading-[24px]"
                    >
                      View more
                    </Link>
                  </div>
                  <div className=" flex flex-col justify-center">
                    <p>
                      Location: <b>Melbourne, USA</b>
                    </p>
                    <p>
                      Work type: <b>Onsite</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="flex  gap-3 sm:gap-5 md:gap-8 py-8">
            <div className="text-[24px] sm:text-[36px] md:text-[48px]">D</div>
            <div className="flex gap-4 flex-col">
              <h2 className="text-[18px] sm:text-[24px] md:text-[36px]">
                Design
              </h2>
              <div className="flex flex-col gap-8 ">
                <div className="flex flex-col md:flex-row md:justify-between gap-3 ">
                  <div className="flex flex-col gap-4 max-w-[713px]">
                    <h3 className="text-[16px] sm:text-[20px] md:text-[24px]">
                      UX designer
                    </h3>
                    <p>
                      We are looking for an UX designer who has great leadership
                      abilities and is willingly to help the team grow
                    </p>
                    <Link
                      to="/careers/jobs/singles"
                      className="rounded-[8px] w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00] text-[#FF6C00] font-medium leading-[24px]"
                    >
                      View more
                    </Link>
                  </div>
                  <div className=" flex flex-col justify-center">
                    <p>
                      Location: <b>Melbourne, USA</b>
                    </p>
                    <p>
                      Work type: <b>Onsite</b>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-3">
                  <div className="flex flex-col gap-4 max-w-[713px]">
                    <h3 className="text-[16px] sm:text-[20px] md:text-[24px]">
                      Executive Assistant
                    </h3>
                    <p>
                      We are looking for an Executiver who has great leadership
                      abilities and is willingly to help the team grow
                    </p>
                    <Link
                      to="/careers/jobs/singles"
                      className="rounded-[8px] w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00] text-[#FF6C00] font-medium leading-[24px]"
                    >
                      View more
                    </Link>
                  </div>
                  <div className=" flex flex-col justify-center">
                    <p>
                      Location: <b>Melbourne, USA</b>
                    </p>
                    <p>
                      Work type: <b>Onsite</b>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-3">
                  <div className="flex flex-col gap-4 max-w-[713px]">
                    <h3 className="text-[16px] sm:text-[20px] md:text-[24px]">
                      Personal Assistant
                    </h3>
                    <p>
                      We are looking for an Personalr who has great leadership
                      abilities and is willingly to help the team grow
                    </p>
                    <Link
                      to="/careers/jobs/singles"
                      className="rounded-[8px] w-[150px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00] text-[#FF6C00] font-medium leading-[24px]"
                    >
                      View more
                    </Link>
                  </div>
                  <div className=" flex flex-col justify-center">
                    <p>
                      Location: <b>Melbourne, USA</b>
                    </p>
                    <p>
                      Work type: <b>Onsite</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default CareerMoreJobs;

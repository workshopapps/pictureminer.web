import React from 'react';
import { Link } from 'react-router-dom';
import CareerRelatedJobs from './CareerRelatedJobs';

const CareerSingleJobView = () => {
  return (
    <div>
      <header className="bg-[#092C4C] h-[220px] md:h-[320px] flex justify-end flex-col pb-4  px-[1rem] md:px-[80px] ">
        <h1
          className=" text-[24px] sm:text-[36px] md:text-[48px] font-medium leading-[64px] text-[#fbfbfb]"
          style={{
            letterSpacing: '-0.02em',
          }}
        >
          Design
        </h1>
      </header>
      <section className="text-[#1d1d1d] max-w-[1280px] mx-auto py-6 sm:pt-14 sm:pb-8 px-2 md:px-4">
        <h1 className="font-medium text-[24px] md:text-[36px]">UX desgner</h1>
        <div className="mb-10 mt-4 mx-4 md:mx-8">
          <h2 className="text-[18px] md:text-[24px] font-medium pb-4">
            Job description
          </h2>
          <p className="text-[16px]  md:text-[20px] pb-4">
            We are looking for a UX designer with a keen eye to details and a
            great team player. You&apos;ll be in charge of
          </p>
          <ul className="text-[16px]  md:text-[20px] list-disc mx-4">
            <li>Writing the UX copies for new product release</li>
            <li>
              {' '}
              Going over old projects to review and implement better user
              experience.
            </li>
            <li>Coming up with appeling UI designs</li>
          </ul>
        </div>
        <div className="mb-10 mt-4 mx-4 md:mx-8">
          <h2 className="text-[18px] md:text-[24px] font-medium pb-4">
            Requirements
          </h2>
          <p className="text-[16px]  md:text-[20px] pb-4">
            In order to perform effectively at this role, we ask that you must
            meet all of the requirements before applying for the role.
          </p>
          <ul className="text-[16px]  md:text-[20px] list-disc mx-4">
            <li>Extensive knowledge of UX and UI</li>
            <li> Minimum of four year experience as a UX designer</li>
            <li>Prototyping and presentation</li>
            <li>Good communication skills</li>
            <li>One year experience working as an onsite UX designer</li>
          </ul>
        </div>
        <div>
          <Link
            to="/careers/application"
            className="rounded-[8px] w-full max-w-[313px] h-[48px] flex justify-center items-center text-base  border border-[#FF6C00]  font-medium leading-[24px] text-white bg-[#FF6C00]"
          >
            Apply
          </Link>
        </div>
      </section>
      <CareerRelatedJobs />
    </div>
  );
};

export default CareerSingleJobView;

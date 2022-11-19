import React from 'react';
import BecomeAPartner from '../Buttons/BecomeAPartner';
import Frame4729 from '../../assets/Rectangle 4731.png';
import Benefits from './Benefits';
import Explore from './Explore';
import HearFromPartner from './HearFromPartner';
import ReadyToPartner from './ReadyToPartner';
function Partner() {
  return (
    <section className="flex flex-col items-start  md:mt-10 md:w-screen lg:w-screen max-w-screen-2xl lg:items-center">
      <div className=" flex flex-col gap-[40px] p-4  bg-white md:flex-row md:gap-[34px] md:p-2 lg:flex-row lg:gap-[63px] lg:p-8">
        <div>
          <h1 className=" font-sans font-bold text-[24px] leading-8 text-[#1D1D1D] pb-4 md:text-[36px]   lg:h-[72px] lg:leading-[72px] lg:text-[50px] lg:w-[708px] ">
            {' '}
            Partner with{' '}
            <span className="capitalize text-[#FF9D55] ">minergram</span>
          </h1>
          <p className=" w-[396px] h-[90px] leading-[18px] font-normal text-[12px] text-[#1D1D1D] mb-4 md:w-[370px] md:h-[120px] lg:w-[602px] lg:h-[112px] lg:text-[18px] lg:leading-[22px]  ">
            Minergram wants to accelerate innovation, but we need people to do
            that. We&apos;ve established a reputable network of Partners to assist
            organizations in innovating more quickly by continuously evaluating,
            measuring, and improving their customer experience with our API.
          </p>
          <BecomeAPartner />
        </div>
        <img
          src={Frame4729}
          alt="frame4729"
          className="w-[396px] h-[360px] mb-20   md:w-[350px] md:h-[350px]  xl::w-[509px]   "
        />
      </div>
      <Benefits />
      <Explore />
      <HearFromPartner />
      <ReadyToPartner />
    </section>
  );
}

export default Partner;

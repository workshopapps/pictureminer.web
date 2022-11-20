import React from 'react';
import { Link } from 'react-router-dom';

import HeroSection from './assets/HeroSection.png';
import Feature from './components/feature';
import { features } from './data/features';
import './styles.scss';

function HowItWorks() {
  return (
    <main className="font-Axiforma">
      <section className="relative mt-2 md:mt-0 lg:mt-[49px]">
        <div className="md:bg-black/50 h-[222px] md:h-[328px] lg:w[866px] lg:h-[489px] overflow-hidden">
          <img
            src={HeroSection}
            alt="Hero section"
            id="hero-section-gradient"
            className="w-full h-fit"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center text-center w-[267px] md:w-[395px] lg:w-[517px] px-[21px] md:px-8 lg:px-0">
            <h1 className="font-medium md:font-bold text-2xl md:text-4xl lg:text-6xl md:leading-[50px] lg:leading-[72px] md:-tracking-[0.02em] text-[#FFFDFD]">
              How It Works
            </h1>
            <h5 className="hidden lg:block mt-1.5 md:mt-0 lg:mt-2 md:font-semibold lg:font-medium text-[#FFFDFD]/80 md:text-sm lg:text-2xl lg:leading-[35px]">
              Don’t sweat it! Here’s how Tozilla allows you to mine your picture
              content from any device, anytime, anywhere!
            </h5>
            <h5 className="lg:hidden mt-1.5 md:mt-0 font-semibold text-[#FFFDFD]/80 text-sm">
              Tozilla allows users mine picture content on your website from any
              device
            </h5>
            <button
              type="button"
              className="absolute md:relative bottom-0 mx-auto md:translate-y-0 translate-y-1/2 bg-[#FF6C00] md:mt-6 lg:mt-9 w-40 h-12 leading-[26px] text-white flex items-center justify-center rounded-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="mt-12 md:mt-32 lg:mt-40 space-y-20 md:space-y-[167px] lg:space-y-[120px]">
        {features.map((feature, idx) => (
          <Feature key={feature.title} {...feature} idx={idx} />
        ))}
      </section>
      <section className="my-[120px] md:my-[180px] md:bg-[#F6F6F6] md:py-[66px] lg:py-[86px]">
        <div className="flex flex-col items-center justify-center">
          <p className="mb-[22px] md:mb-9 text-base md:text-xl md:leading-[30px] text-black text-center">
            Ready to use Minergram?
          </p>
          <div className="flex flex-col md:flex-row items-center gap-[22px] lg:gap-x-8">
            <Link
              to="/"
              as="button"
              type="button"
              id="btn-primary-hover"
              className="bg-[#FF6C00] hover:bg-[#FF842B] focus:bg-[#AA4800] disabled:bg-[#D2D2D2] rounded-lg py-5px-[69px] flex items-center justify-center text-white h-[64px] w-[232px]"
            >
              Get Started
            </Link>
            <Link
              to="/documentation"
              as="button"
              type="button"
              className="border border-[#FF6C00] hover-border-white bg-white hover:bg-[#FFE2CC] focus:bg-[#FFCEAA] disabled:bg-[#D2D2D2] disabled:border-[#686868] rounded-lg flex items-center justify-center text-[#FF6C00] h-[64px] w-[232px]"
            >
              View documentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HowItWorks;

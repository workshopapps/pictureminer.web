import React from 'react';
import { features } from './data/features';
import { Link } from 'react-router-dom';
import Computer from './assets/computer.webp';

import Feature from './components/feature';

function WhyMinergram() {
  return (
    <main className="font-Axiforma">
      <section className="flex flex-col md:flex-col max-[480px]:max-w-full md:py-[30px] max-[480px]:p-[25px] items-center m-auto max-w-[60%] my-[30px] min-[1024px]:pt-[25px]">
        <div className="text-center">
          <h4 className="font-medium text-2xl lg:leading-[56px] font-Axiforma text-[#061D33] max-[480px]:text-2xl min-[1024px]:text-4xl min-[1200px]:text-5xl">
            Why Choose Discripto API?
          </h4>
          <p className="mt-[18px] md:mt-5 lg:mt-[25px] text-xs leading-[18px] lg:text-lg lg:leading-7 text-[#08253F]">
            Discripto is an accurate image recognition API that makes life
            easier by digitizing the many laborious data gathering, processing,
            and increasing production processes.
          </p>
          <button
            type="button"
            className="items-center w-[200px] h-[48px] bg-[#FF6C00] rounded-lg gap-[8px] py-[16px] px-[24px] font-sans font-normal text-[14px] leading-[20px] text-white hover:bg-[#FF9D55] my-[50px] "
          >
            <Link to="/signup">Get Started</Link>
          </button>
        </div>
        <div>
          <img
            src={Computer}
            alt="Image of computer and a woman"
            className="object-cover max-[480px]:hidden"
          />
        </div>
      </section>
      <section className="bg-[#F7F7F7] lg:py-[100px] lg:px-[50px] md:mt-[58px] lg:mt-[120px]">
        <p className="text-center text-4xl font-medium py-[20px] max-[480px]:text-2xl">
          Our Unique Selling Point
        </p>
        <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-8 lg:px-[50px] md:px-[100px] md:py-[30px] min-[1024px]:gap-5">
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default WhyMinergram;

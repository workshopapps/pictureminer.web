import React from 'react';

import { features } from './data/features';
import Computer from './assets/computer.png';
import { testimonials } from './data/testimonials';
import Testimonial from './components/testimonial';
import Feature from './components/feature';


function WhyTozilla() {
  return (
    <main className="font-Axiforma">
      <section className="flex flex-col md:flex-row items-center gap-y-[18px] px-[22px] md:px-20">
        <div className="md:max-w-[399px] lg:max-w-[487px]">
          <h4 className="font-medium text-2xl lg:text-[35px] lg:leading-[56px] font-Axiforma text-[#061D33]">
            Why Should you Choose to use Minergram API?
          </h4>
          <p className="mt-[18px] md:mt-5 lg:mt-[25px] text-xs leading-[18px] lg:text-lg lg:leading-7 text-[#08253F]">
            Minergram is a game-changing and very accurate image recognition API
            that makes life easier by digitizing the many laborious data
            gathering, processing, and increasing production processes while
            also improving the quality of our daily lives. Tozilla helps you
            gain valuable insight into your operations that enables true
            business transformation and is widely used in industries.
          </p>
        </div>
        <div>
          <img
            src={Computer}
            alt="Image of computer and a woman"
            className="object-cover"
          />
        </div>
      </section>
      <section className="md:gap-x-10 gap-y-5 flex flex-wrap justify-center lg:justify-start mx-[114px] md:mx-[196px] lg:mx-[130px] mt-[18px] md:mt-[58px] mb-11 md:mb-[74px] lg:my-[120px]">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature}/>
        ))}
      </section>
      <section className="py-[15px] md:py-[45px] lg:py-20 px-[27px] md:px-20 lg:px-[158px] bg-[#E0E0E0]">
        <div className="flex items-center justify-between w-[366px] text-black">
          <h4 className="font-medium text-sm md:text-3xl md:leading-[38px] lg:text-4xl lg:leading-[44px] text-[#051626] -tracking-[0.02em] font-Axiforma">
            Testimonials
          </h4>
          <p className="text-xs leading-[18px] font-Axiforma md:hidden">
            see more
          </p>
        </div>
        <div className="flex gap-x-[30px] md:gap-x-5 lg:gap-x-[21px] md:mt-[15px] lg:mt-10">
            {testimonials.map((testimonial, idx) => (
                <Testimonial key={idx} {...testimonial}/>
            ))}
        </div>
      </section>
    </main>
  );
}

export default WhyTozilla;

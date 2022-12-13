import { Link } from 'react-router-dom';

import Feature from './components/feature';
import { features } from './data/features';
import './styles.scss';
import { motion } from 'framer-motion';
function HowItWorks() {
  return (
    <motion.main
      className="font-Axiforma"
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: 'spring', duration: 1, ease: 'easeOut' }}
    >
      <section className="relative mt-2 md:mt-0 lg:mt-[49px]">
        <div className="bg-[#092C4C] h-[300px] md:h-[400px] flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center text-center w-[267px] md:w-[395px] lg:w-[517px] md:py-10 lg:py-10">
            <h1 className="font-medium md:font-bold text-2xl md:text-4xl lg:text-6xl md:leading-[50px] lg:leading-[72px] md:-tracking-[0.02em] text-[#FFFDFD]">
              How It Works
            </h1>
            <h5 className="mt-1.5 md:mt-0 lg:w-[700px] lg:mt-2 md:font-semibold lg:font-medium text-[#FFFDFD]/80 text-sm lg:text-2xl lg:leading-[35px]">
              Don’t sweat it! Here’s how Discripto allows you to mine your
              picture content from any device, anytime, anywhere!
            </h5>
            <button
              type="button"
              className="md:relative mt-7 bottom-0 mx-auto md:translate-y-0 translate-y-1/2 bg-[#FF6C00] hover:bg-[#FF9D55] w-40 h-12 leading-[26px] text-white flex items-center justify-center rounded-lg"
            >
              <Link to="/signup">Get Started</Link>
            </button>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center py-8 px-5">
        <p className="font-bold text-xl md:text-2xl">Solutions We Provide</p>
      </div>
      <section className="space-y-10 md:space-y-[100px] mb-20">
        {features.map((feature, idx) => (
          <Feature key={feature.title} {...feature} idx={idx} />
        ))}
      </section>
      <section className="bg-[#F6F6F6] py-[66px] lg:py-[86px]">
        <div className="flex flex-col items-center justify-center">
          <p className="mb-[22px] md:mb-9 text-base md:text-xl md:leading-[30px] text-black text-center">
            Ready to use Discripto?
          </p>
          <div className="flex flex-col md:flex-row items-center gap-[22px] lg:gap-x-8">
            <Link
              to="/signup"
              as="button"
              type="button"
              id="btn-primary-hover"
              className="bg-[#FF6C00] hover:bg-[#FF9D55] focus:bg-[#AA4800] disabled:bg-[#D2D2D2] rounded-lg py-5px-[69px] flex items-center justify-center text-white h-[64px] w-[232px]"
            >
              Get Started
            </Link>
            <Link
              to="/documentation"
              as="button"
              type="button"
              className="border border-[#FF6C00] bg-white hover:bg-[#F6F6F6] focus:bg-[#FFCEAA] disabled:bg-[#D2D2D2] disabled:border-[#686868] rounded-lg flex items-center justify-center text-[#FF6C00] h-[64px] w-[232px]"
            >
              View documentation
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default HowItWorks;

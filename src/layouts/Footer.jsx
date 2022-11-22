import React from 'react';
import MinerGram from '../assets/Minergram 1-2.png';
import ForMD from '../components/ForMD';
import FormFooter from '../components/FormInputs/FormFooter';
import ForSmAndLg from '../components/ForSmAndLg';
function Footer() {
  return (
    <footer className="bg-[#092C4C] py-14 px-4 md:py-[60px] md:px-[100px] text-white">
      <div className="flex flex-wrap flex-row justify-between gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="mb-4">Company</h2>
          <Link to="/about-us">About us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/partner-with-us">Partner with us</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-4">Resources</h2>
          <Link to="/blog">Blog</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/support">Support</Link>
          <Link to="/why-tozilla">Why Tozilla</Link>
          <Link to="/customer-stories">Customer Stories</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-4">Legal</h2>
          <Link to="/terms-of-use">Terms</Link>
          <Link to="/privacy-policy">Privacy</Link>
          {/* <Link to="/contact">Contact</Link> */}
        </div>
        <div className="flex flex-col gap-2">
          <div className="mb-6">
            <img src={logoFooter} alt="logo" />
          </div>
          <p className="text-white leading-[24px]">
            </p>
        </div>
        <div className="bg-[#092C4C] flex flex-col  w-[425px] gap-20 p-8  md:w-screen lg:w-screen max-w-screen-2xl lg:items-center  ">
          <div className="flex flex-col gap-16  md:flex-row-reverse lg:flex-row-reverse   lg:gap-80   ">
            <div className="flex flex-col pt-8">
              <div className="flex flex-col gap-[16px] p-0 items-start ">
                <img src={MinerGram} alt="MinerGram" />
                <h2 className=" text-white font-semibold text-[16px] leading-[24px]  ">
                Subscribe to our newsletter
                </h2>
                <FormFooter />
          </div></div></div></div>
      <div className="flex flex-col gap-16  md:flex-row-reverse lg:flex-row-reverse   lg:gap-80   ">
        <div className="flex flex-col pt-8">
          <div className="flex flex-col gap-[16px] p-0 items-start ">
            <img src={MinerGram} alt="MinerGram" />
            <h2 className=" text-white font-semibold text-[16px] leading-[24px]  ">
              Subscribe to our newsletter
            </h2>
            <FormFooter />
          </div>
        </div>
        <div className="block md:hidden lg:block">
          <ForSmAndLg />
        </div>
        <div className="hidden md:block lg:hidden">
          <ForMD />
        </div>
      </div>

      <div className="flex flex-col gap-10 md:items-center lg:flex-row lg:gap-4 ">
        <hr className=" text-[#EAECF0] w-[290px] h-[1px] md:hidden lg:block lg:w-[456px] " />
        <h2 className="text-[#98A2B3] font-normal leading-[24px] text-[16px] font-sans ">
          {' '}
          &copy; {new Date().getFullYear()} Minergram. All rights reserved.
        </h2>
        <hr className=" hidden text-[#EAECF0] w-[290px] h-[1px] md:hidden lg:block lg:w-[456px]" />
      </div>
    </div>
    <footer/>
  );
}

export default Footer;
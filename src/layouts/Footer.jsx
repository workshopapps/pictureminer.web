/* eslint-disable  */
import React, { useState, useEffect } from 'react';
import logoFooter from '../assets/logo-footer.svg';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import { newsSubscriptionAction } from '../context/actions';
import Loader from '../components/Loader';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  const {
    state: {
      newsSubscription: { loading, success, serverResponse, error },
    },
    dispatch,
  } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await newsSubscriptionAction({ email })(dispatch);
  };

  useEffect(() => {
    if (success) {
      // console.log(serverResponse)
      setResponse(serverResponse?.message);
      setEmail('');
    }
  }, [success]);

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setResponse('');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [response]);

  return (
    <footer className="bg-[#09264c] py-14 px-4 md:px-[100px] border-t border-white text-white">
      <div className="flex flex-wrap flex-row justify-between gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="mb-4">Company</h2>
          <Link to="/about-us">About Us</Link>

          <Link to="/faq">FAQ</Link>
          <Link to="/how-it-works">How it Works</Link>
          <Link to="/contact-us">Get in touch</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-4">Resources</h2>
          <Link to="/pricing">Pricing</Link>

          <Link to="/why-discripto">Why Discripto</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-4">Legal</h2>
          <Link to="/terms-of-use">Terms</Link>

          {/* <Link to="/contact">Contact</Link> */}
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/">
            <div className="mb-6">
              <img src={logoFooter} alt="logo" />
            </div>
          </Link>
          <p className="text-white leading-[24px]">
            Subscribe to our newsletter
          </p>
          <form onSubmit={handleSubmit}>
            {error ? (
              <p className="text-red-400 text-lg">{error && error}</p>
            ) : null}
            {response && response ? (
              <p className="text-green-400 text-lg">{response}</p>
            ) : null}
            {loading ? <Loader /> : null}
            <div className=" h-[44px] rounded-[8px] flex">
              <input
                required
                onChange={(e) => setEmail(e.target.value.trim())}
                value={email}
                type="email"
                placeholder="Enter email address"
                className=" flex-1  h-[44px] flex items-center text-[sm] leading-[20px] mt-3 py-3 md:px-4 px-2 outline-none bg-white border border-solid border-l-[#909090] border-t-[#909090] border-b-[#909090] rounded-l-lg rounded-r-none font-normal   focus:outline-none "
              />
              <button
                type="submit"
                // disabled="true"
                className="flex-1 py-3 md:px-4 px-2 h-[44px] flex justify-center items-center text-sm  border border-[#FF6C00]  font-medium leading-[20px] text-white bg-[#FF6C00]  mt-3 rounded-r-lg text-[14px] text-center  hover:bg-[#FF9D55]"
              >
                {loading ? 'Loading...' : 'Subscribe'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative mt-8 flex justify-between items-center">
        <div className=" hidden sm:block bg-[#EAECF0] h-[2px] flex-1"></div>
        <p
          className="text-[#F7F7F7] flex-1 font-normal  text-center relative w-fit mt-2"
          style={{
            zIndex: 10,
          }}
        >
          &copy; 2022 Discripto. All rights reserved.
        </p>
        <div className="bg-[#EAECF0] h-[2px] flex-1 hidden sm:block"></div>
      </div>
    </footer>
  );
};

export default Footer;

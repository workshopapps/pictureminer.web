import React, { useState } from 'react';
import './styles/pricing.css';
import { BiLike } from 'react-icons/bi';
import { SlCheck } from 'react-icons/sl';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Pricing() {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <motion.div
      className="mt-16 md:mt-20"
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: 'spring', duration: 1, ease: 'easeOut' }}
    >
      <header className="text-center pricing-container">
        <h1 className="text-large font-bold leading-tight">
          We’ve got a strategical plan that works best for you.
        </h1>
        <p className="text-small font-bold mt-2">
          Plan begins with 14 day trial on first subscription.
        </p>
        <div className="mt-12 md:mt-20 text-center">
          <div className="flex items-center justify-center space-x-1">
            <p className="font-bold">100% Cash-back Guaranteed</p>
            <BiLike className="mb-1 text-gray-500" />
          </div>
          <p className="text-xSmall font-bold text-grey300">
            Change your mind? We’ll refund your payment within one week of
            purchase.
          </p>
        </div>
      </header>
      <section className="mt-16 md:mt-20 mx-auto max-w-screen-xl bg-white dark:bg-gray-900">
        {/* Toggle */}
        <div className="flex items-center space-x-6 px-4 md:justify-center">
          <h2 className="font-bold text-small ">
            {isChecked ? 'Monthly' : 'Yearly(Save 12%)'}
          </h2>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              defaultChecked={true}
            />
            <div
              className="w-11 h-6 bg-mainOrange rounded-full peer peer-focus:ring-4 peer-focus:ring-lightOrange peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mainOrange"
              onClick={() => setIsChecked((prevState) => !prevState)}
            ></div>
            <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card  */}
            <div className="flex flex-col p-6 mx-auto max-w-2xl text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:py-8 ">
              <div className="flex justify-between items-baseline mt-8">
                <h3 className="mb-4 text-large font-semibold">Starter</h3>
                <span className="mr-2 text-normal font-extrabold">Free</span>
              </div>
              <div className="w-20 border-2 border-mainOrange border-solid"></div>
              {/* List items  */}
              <ul role="list" className="mb-8 mt-16 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>2 GB free storage space</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>10 free trials </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Image upload not more than 16MB</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />
                  <span>Live chat</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />
                  <span>24/7 Hour support </span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCloseCircle className="text-xl text-red-500" />
                  <span>Gain access to uploads by others</span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCloseCircle className="text-xl text-red-500" />
                  <span>Faster processing speed </span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCloseCircle className="text-xl text-red-500" />
                  <span>Upload two images simultaneously</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="w-[60%] text-white bg-mainOrange focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center space-x-4 hover:bg-white hover:text-[#FF6C00] "
              >
                <span className="text-small"> Get Started</span>
                <span className="text-3xl font-light">&#8250;</span>
              </Link>
            </div>
            {/* Pricing Card  */}
            <div className="flex flex-col p-6 mx-auto max-w-2xl text-center  bg-[#FFE2CC] rounded-lg border border-gray-100 shadow xl:py-8">
              <div className="flex justify-between items-baseline mt-8">
                <h3 className="mb-4 text-large font-semibold">Standard</h3>
                <div>
                  <span className="mr-2 text-normal font-extrabold">
                    {isChecked ? '$14' : '$148'}
                  </span>
                  {!isChecked && <p className="mt-1 line-through">$168</p>}
                </div>
              </div>
              <div className="w-20 border-2 border-mainOrange border-solid"></div>
              {/* List items  */}
              <ul role="list" className="mb-8 mt-16 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>6 GB free storage space</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>25 free trials </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Image upload not more than 200MB</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />
                  <span>Live chat</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />
                  <span>24/7 Hour support </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />{' '}
                  <span>Gain access to uploads by others</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />{' '}
                  <span>Faster processing speed </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />{' '}
                  <span>Upload two images simultaneously</span>
                </li>
              </ul>
              <Link
                to={`/pricing/standard${isChecked}`}
                className="w-[60%] text-white bg-mainOrange focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center space-x-4 hover:bg-white hover:text-[#FF6C00] "
              >
                {' '}
                <span className="text-small"> Choose plan</span>
                <span className="text-3xl font-light">&#8250;</span>
              </Link>
            </div>
            {/* Pricing Card  */}
            <div className="flex flex-col p-6 mx-auto max-w-2xl text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:py-8 ">
              <div className="flex justify-between items-baseline mt-8">
                <h3 className="mb-4 text-large font-semibold">Premium</h3>
                <div>
                  <span className="mr-2 text-normal font-extrabold">
                    {isChecked ? '$25' : '$422'}
                  </span>
                  {!isChecked && <p className="mt-1 line-through">$480</p>}
                </div>
              </div>
              <div className="w-20 border-2 border-mainOrange border-solid"></div>
              {/* List items  */}
              <ul role="list" className="mb-8 mt-16 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Unlimited free storage space</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>40 free trials </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Image upload not more than 500MB</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />
                  <span>Live chat</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg " />
                  <span>24/7 Hour support </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Gain access to uploads by others</span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Faster processing speed </span>
                </li>
                <li className="flex items-center space-x-3">
                  <SlCheck className="text-lg" />
                  <span>Upload two images simultaneously</span>
                </li>
              </ul>
              <Link
                to={`/pricing/premium${isChecked}`}
                className="w-[60%] text-white bg-mainOrange focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center space-x-4 hover:bg-white hover:text-[#FF6C00] "
              >
                <span className="text-small"> Choose plan</span>
                <span className="text-3xl font-light">&#8250;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Pricing;

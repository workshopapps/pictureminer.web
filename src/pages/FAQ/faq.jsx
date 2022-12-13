/* eslint-disable */
import { useState } from 'react';
import './styles/index.css';
import { faqData } from './faqData';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggleAccordion = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const faqLists = faqData.map((faq, index) => {
    return (
      <>
        <div
          className={`w-11/12 md:w-4/5 mx-auto p-4 border-b border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100/50 ${
            clicked === index ? 'bg-gray-100/50' : ''
          } `}
        >
          <div
            className="flex items-center justify-between text-gray-500 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="font-bold text-normal">{faq.question}</h2>
            {clicked === index ? (
              <MdOutlineKeyboardArrowUp className="w-6 h-6 shrink-0" />
            ) : (
              <MdOutlineKeyboardArrowDown className="w-6 h-6 shrink-0" />
            )}
          </div>
          {clicked === index ? (
            <div className="mt-6 ">
              {faq.answer.map((answer) => (
                <p className="my-3 text-gray-500 " key={answer}>
                  {answer}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </>
    );
  });

  return (
    <motion.div
      className=""
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: 'spring', duration: 0.85, ease: 'easeOut' }}
    >
      <div className=" container-faq my-20">
        <h1 className="text-large text-center font-bold mb-12">
          Frequently Asked Questions
        </h1>
        <div className="border border-solid border-gray-400 rounded-xl py-10 space-y-4">
          {faqLists}
        </div>
      </div>
      <div className="bg-lightOrange/70 px-6 py-10 md-px-10 md:py-16 lg:p-32 flex flex-col md:flex-row items-start md:items-center md:justify-between">
        <div className="space-y-4">
          <h2 className="text-xl font-bold lg:text-3xl">
            Can’t find what you’re looking for?
          </h2>
          <p className="text-normal font-bold">
            Send us a message if you still need clarifications
          </p>
        </div>
        {/* <button className="bg-mainOrange hover:bg-[#FF9D55] px-[45px] py-[18.5px] md:px-28  rounded-lg text-small text-white font-semibold mt-10 md:mt-0">
          Get in touch
        </button> */}
        <Link
          to="/contact-us"
          as="button"
          type="button"
          id="btn-primary-hover"
          className="bg-mainOrange hover:bg-[#FF9D55] px-[45px] py-[18.5px] md:px-28  rounded-lg text-small text-white font-semibold mt-10 md:mt-0"
        >
          Get in Touch
        </Link>
      </div>
    </motion.div>
  );
};

export default Faq;

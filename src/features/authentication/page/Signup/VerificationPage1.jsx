import React from 'react';
import { Link } from 'react-router-dom';
import FormNav from '../../components/FormNav';
import mail from '../../images/Mail.png';

const VerificationPage1 = () => {
  return (
    <div>
      <FormNav />
      <div className="w-[90%] sm:w-[674px] md:w-[866px] h-[748px] items-center mx-auto my-10 sm:p-10 bg-white border border-[#B4B4B4]">
        <div className="items-center mx-auto my-40 sm:my-20 sm:w-[528px]">
          <img src={mail} alt="/" className="mx-auto" />
          <div className="text-center my-5">
            <h1 className="text-xl sm:text-3xl font-bold my-5">
              Verify your email address
            </h1>
            <p className="mb-10 text-base text-[#4F4F4F]">
              You&apos;ve entered {} as the email address for your account.
              Please verify this email by clicking the button below
            </p>
            <Link
              to="/verification-code"
              className="px-10 py-3 text-center mx-auto bg-[#FF971E] text-white text-base sm:text-lg rounded-xl"
            >
              Verify your email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage1;

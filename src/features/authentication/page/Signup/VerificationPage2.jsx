import React from 'react';
import { Link } from 'react-router-dom';
import FormNav from '../../components/FormNav';
import mail from '../../images/Mail.png';

const VerificationPage2 = (props) => {
  return (
    <div>
      <FormNav />
      <div className="w-[90%] sm:w-[674px] md:w-[866px] h-[748px] items-center mx-auto my-10 sm:p-10 sm:my-auto bg-white border border-[#B4B4B4]">
        <div className="items-center mx-auto my-40 sm:my-20">
          <img src={mail} alt="/" className="mx-auto" />
          <div className="text-center my-5">
            <h1 className="text-xl sm:text-3xl font-bold my-5">
              Verify your email address
            </h1>
            <p className="mb-10 text-base text-[#4F4F4F]">
              Kindly provide the 6 digit code sent to {props.email}
            </p>
            <p>
              <input type="number" className="border mb-5" />
            </p>
            <Link
              to="/verified"
              className="px-10 py-3 text-center mx-auto bg-[#FF971E] text-white text-base sm:text-lg rounded-xl"
            >
              Verify your email
            </Link>
            <p className="mt-10">
              Didn&apos;t receive the mail?{' '}
              <Link to="/" className="text-[#FF971E]">
                Click here to resend
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage2;

import React from 'react';
import approval from '../../images/Approval.png';
import { Link } from 'react-router-dom';
import FormNav from '../../components/FormNav';

const ResetSuccessPage = () => {
  return (
    <div>
      <FormNav />
      <div className="w-[310px] h-[380px] sm:w-[528px] sm:h-[600px] text-[#434343] border border-[#434343] bg-[#FFFFFF] mx-auto mt-10 p-10">
        <div className="items-center mx-auto my-10 sm:my-20">
          <img src={approval} alt="/" className="mx-auto" />
          <div className="text-center my-5">
            <h1 className="font-bold my-5">Password successfully Reset</h1>
            <Link
              to="/login"
              className="px-10 py-3 text-center mx-auto bg-[#FF971E] text-white text-base sm:text-lg rounded-xl"
            >
              Login to account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccessPage;

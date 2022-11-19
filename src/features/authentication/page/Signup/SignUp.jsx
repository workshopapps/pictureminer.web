import React from 'react';
import { Link } from 'react-router-dom';
import FormNav from '../../components/FormNav';
import SignUpForm from '../../components/SignUpForm';
import active1 from '../../images/active1.png';
import inactive2 from '../../images/inactive2.png';

const SignUp = () => {
  return (
    <div>
      <FormNav />
      <div className="w-[90%] items-center mx-auto my-10">
        <div className="bg-white sm:w-[329px] md:w-[528px] mx-auto text-[#434343] p-5 sm:p-10 sm:mt-10 border border-[#434343]">
          <h1 className="text-2xl text-black sm:text-3xl font-bold my-5 sm:text-center">
            Create your account
          </h1>
          <div className="w-[90%] flex items-center justify-center mx-auto my-5">
            <div className="mr-10 sm:flex items-center">
              <Link to="/signup">
                <img src={active1} alt="/" className="mx-auto my-2" />
              </Link>
              <Link to="/signup" className="bg-[#F6F6F6] p-2">
                Business Info
              </Link>
            </div>
            <div className="sm:flex items-center">
              <Link to="/personal-info">
                <img src={inactive2} alt="/" className="mx-auto my-2" />
              </Link>
              <Link to="/personal-info" className="bg-[#FCFCFC] p-2">
                Personal Info
              </Link>
            </div>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

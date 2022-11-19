import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormButton from '../../components/FormButton';
import { ArrowLeft } from 'iconsax-react';
import LoginFormInput from '../../components/LoginFormInput';
import FormNav from '../../components/FormNav';

const ForgetPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/password-reset');
  };
  return (
    <div>
      <FormNav />
      <div className="w-[310px] h-[450px] sm:w-[528px] sm:h-[600px] text-[#434343] border border-[#434343] bg-[#FFFFFF] mx-auto mt-10 p-10">
        <h1 className="text-black text-xl sm:text-3xl text-center font-bold my-5">
          Forgot Password?
        </h1>
        <p className="text-base text-[#4F4F4F] text-center">
          No worries, we&apos;ll send you reset instructions
        </p>
        <form onSubmit={handleSubmit} className="text-base text-[#292929] my-5">
          <LoginFormInput
            label="Email"
            name="email"
            type="email"
            value=""
            onchange={(e) => e.target.value.trim()}
            placeholder="Email"
          />
          <FormButton name="Reset Password" />
          <div className="flex items-center mx-auto justify-center">
            <ArrowLeft size={20} />
            <Link to="/login" className="text-[#FF971E]">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;

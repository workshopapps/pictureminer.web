import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormButton from '../../components/FormButton';
import FormNav from '../../components/FormNav';
import LoginFormInput from '../../components/LoginFormInput';

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/reset-successful');
  };
  return (
    <div>
      <FormNav />
      <div className="w-[310px] h-[500px] sm:w-[528px] sm:h-[600px] text-[#434343] border border-[#434343] bg-[#FFFFFF] mx-auto mt-10 p-10">
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
          <LoginFormInput
            label="New Password"
            name="password"
            type="password"
            value=""
            onchange={(e) => e.target.value.trim()}
            placeholder="New Password"
          />
          <LoginFormInput
            label="Confirm Password"
            name="password"
            type="password"
            value=""
            onchange={(e) => e.target.value.trim()}
            placeholder="Confirm password"
          />
          <FormButton name="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

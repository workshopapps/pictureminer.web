import React from 'react';
import Button from '../../components/Button';
import Arrow from './assets/arrow.svg';

export default function ForgotPassword() {
  return (
    <div className=" max-w-[528px] mx-auto text-center border-[0.5px] border-[#434343] py-[160px] px-[89px]">
      <h1 className="text-[32px] font-bold leading-[53px]">Forgot Password?</h1>
      <p className="mt-1 text-[#4F4F4F]">
        No worries, we’ll send your reset instructions.
      </p>
      <div className="flex flex-col text-left mt-4">
        <label htmlFor="email" className="font-medium text-[#292929]">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-[#909090] rounded-lg px-[14px] py-4 text-sm font-medium text-[#9F9F9F] text-center mb-6"
        />
      </div>
      <Button text={'Reset password'} />
      <a href="" className="flex justify-center text-[#4F4F4F]">
        <img src={Arrow} alt="arrow-icon" className="mr-2" />
        Back to login
      </a>
    </div>
  );
}

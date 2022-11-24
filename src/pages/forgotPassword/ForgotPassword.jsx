import React, { useState } from 'react';
import Button from '../../components/Button';
import PasswordNavBar from '../../layouts/PasswordNavBar';
import Arrow from './assets/arrow.svg';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  function handleSubmit() {
    console.log(email);
    // ...
    // ...
    // ...
  }

  return (
    <>
      <PasswordNavBar />
      <div className="bg-[#F8F8F8] px-6 py-[25px] sm:py-[50px]">
        <div className="w-full sm:max-w-[528px] mx-auto text-center border-[0.5px] border-[#434343] py-[160px] px-4 sm:px-[89px] bg-white">
          <h1 className="text-[32px] font-bold leading-[53px]">
            Forgot Password?
          </h1>
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
              value={email}
              className="border border-[#909090] rounded-lg px-[14px] py-4 text-sm font-medium text-[#9F9F9F] mb-6"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <Button text={'Reset password'} onClick={handleSubmit} />
          <a href="" className="flex justify-center text-[#4F4F4F] mt-2">
            <img src={Arrow} alt="arrow-icon" className="mr-2" />
            Back to login
          </a>
        </div>
      </div>
    </>
  );
}

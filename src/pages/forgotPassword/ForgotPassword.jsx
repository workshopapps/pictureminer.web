import React, { useState } from 'react';
import Button from '../../components/Button';
import PasswordNavBar from '../../layouts/PasswordNavBar';
import Arrow from './assets/arrow.svg';
import checkMark from './assets/checkMark.webp';
import { instance } from './utils';

export default function ForgotPassword() {
  const [boolSuccess, setBoolSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit() {
    try {
      const res = await instance.post('', {
        title: email,
        body: '',
        userId: '',
      });
      // setSuccessMessage(
      //   res.status === 'success' ? res.message : 'Email does not exist'
      // );
      if (res.status === 'success') {
        setBoolSuccess(res.status === 'success');
      } else {
        setErrorMessage('Email does not exist');
      }
    } catch (error) {
      setErrorMessage(error.message ?? 'An error as occured');
      console.error(error);
    }
  }

  return (
    <>
      <PasswordNavBar />
      <div className="bg-[#F8F8F8] px-6 py-[25px] sm:py-[50px]">
        <div className="w-full sm:max-w-[528px] mx-auto text-center border-[0.5px] border-[#434343] py-[160px] px-4 sm:px-[89px] bg-white">
          {boolSuccess ? (
            <div>
              <img
                src={checkMark}
                alt=" checkMark "
                className="w-[122px] mx-auto"
              />
              <h1 className="text-[32px] font-bold leading-[53px] mt-6">
                Password sent to mail
              </h1>
            </div>
          ) : (
            <>
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
              {errorMessage && (
                <p className="text-[#D64751] text-lg mb-3"> {errorMessage} </p>
              )}
              <Button
                text={'Reset password'}
                onClick={handleSubmit}
                disabled={email === ''}
              />
              <a href="" className="flex justify-center text-[#4F4F4F] mt-2">
                <img src={Arrow} alt="arrow-icon" className="mr-2" />
                Back to login
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}

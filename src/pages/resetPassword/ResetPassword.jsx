import React, { useState } from 'react';
import Button from '../../components/Button';
import PasswordNavBar from '../../layouts/PasswordNavBar';
import checkMark from './assets/checkMark.webp';

export default function ResetPassword() {
  const [boolSuccess, setBoolSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit() {
    const body = {
      email,
      password,
      confirmPassword,
    };
    console.log(body);
    // ...
    // ...
    // ...
    if (email.length > 20) {
      setBoolSuccess(true);
    }
  }

  return (
    <>
      <PasswordNavBar />
      <div className="bg-[#F8F8F8] py-[50px]">
        <div className="w-[100%] sm:max-w-[528px] mx-auto text-center border-[0.5px] border-[#434343] py-[80px] px-[89px] bg-white">
          {boolSuccess ? (
            <div>
              <img
                src={checkMark}
                alt=" checkMark "
                className="w-[122px] mx-auto"
              />
              <h1 className="text-[32px] font-bold leading-[53px] mt-6">
                Password Successfully Reset
              </h1>
            </div>
          ) : (
            <>
              <h1 className="text-[32px] font-bold leading-[53px]">
                Reset Password
              </h1>
              <p className="mt-1 text-[#4F4F4F]">
                No worries, we’ll send your reset instructions.
              </p>
              <form>
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
                <div className="flex flex-col text-left mt-4">
                  <label
                    htmlFor="password"
                    className="font-medium text-[#292929]"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    className="border border-[#909090] rounded-lg px-[14px] py-4 text-sm font-medium text-[#9F9F9F] mb-6"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col text-left mt-4">
                  <label
                    htmlFor="confirm-password"
                    className="font-medium text-[#292929]"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    value={confirmPassword}
                    required
                    className="border border-[#909090] rounded-lg px-[14px] py-4 text-sm font-medium text-[#9F9F9F] mb-6"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
                <Button text={'Done'} onClick={handleSubmit} />
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

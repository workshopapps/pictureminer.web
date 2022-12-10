import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import PasswordNavBar from '../../layouts/PasswordNavBar';
import { InfoCircle, TickCircle } from 'iconsax-react';
import { instance } from '../forgotPassword/utils';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      email === '' ||
      password === '' ||
      confirmPassword === '' ||
      password !== confirmPassword
    ) {
      return;
    }
    setLoading(true);
    const body = {
      email,
      password,
      confirm_password: confirmPassword,
    };

    try {
      const res = await (await instance.post('reset', body)).data;
      setLoading(false);
      console.log(res);
      if (res.status === 'success') {
        setSuccessMessage(
          res.message + '. Redirecting to login page in 2 seconds.....'
        );
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setErrorMessage('An error has occured');
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message ?? 'An error has occured');
      console.error(error);
    }
  }

  function renderIcon() {
    // setPasswordMatch(true);

    if (confirmPassword === '' || password === '') {
      return '';
    } else if (confirmPassword !== password) {
      return (
        <InfoCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D64751]" />
      );
    } else {
      return (
        <TickCircle className="text-[#12B76A] absolute right-3 top-1/2 -translate-y-1/2" />
      );
    }
  }

  return (
    <>
      <PasswordNavBar />
      <div className="bg-[#F8F8F8] py-[50px]">
        <div className="w-[100%] sm:max-w-[528px] mx-auto text-center border-[0.5px] border-[#434343] py-[80px] px-[89px] bg-white">
          <>
            <h1 className="text-[32px] font-bold leading-[53px]">
              Reset Password
            </h1>
            <p className="mt-1 text-[#4F4F4F]">
              No worries, we’ll send your reset instructions.
            </p>
            <form onSubmit={handleSubmit}>
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
                <div className="relative mb-6">
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    value={confirmPassword}
                    required
                    className={`border rounded-lg px-[14px] py-4 text-sm font-medium text-[#9F9F9F] w-full ${
                      confirmPassword !== '' &&
                      password !== '' &&
                      password === confirmPassword
                        ? 'border-[#12B76A] focus:border-[#12B76A] focus:ring-0'
                        : 'border-[#909090]'
                    } `}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  {renderIcon()}
                </div>
              </div>
              {errorMessage && (
                <p className="text-[#D64751] text-lg mb-3"> {errorMessage} </p>
              )}
              {successMessage && (
                <p className="text-[#12B76A] text-lg mb-3">{successMessage} </p>
              )}
              <Button
                text={loading ? 'Loading...' : 'Done'}
                disabled={
                  email === '' ||
                  password === '' ||
                  confirmPassword === '' ||
                  password !== confirmPassword ||
                  loading
                }
                loading={loading}
              />
            </form>
          </>
        </div>
      </div>
    </>
  );
}

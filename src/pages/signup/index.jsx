import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthInput from '../../components/form/AuthInput';
import { useGlobalContext } from '../../context/context';
import check from '../../assets/checkmark-orange.svg';
import { signup } from '../../context/actions';
import Loader from '../../components/Loader';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const {
    state: {
      signup: { loading, success, error },
    },
    dispatch,
  } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Password mismatch!');
      return;
    }

    await signup({ firstName, lastName, username, email, password })(dispatch);
  };

  // useEffect(() => {
  //   console.log({
  //     loading,
  //     success,
  //     serverResponse,
  //     error,
  //   });
  // }, [loading, success, serverResponse, error]);

  if (success) {
    return (
      <main className=" font-axiforma border  border-[#434343] rounded-[12px] w-[95%] max-w-[664px] flex flex-col  mx-auto my-[5rem] text-center px-4 items-center py-10  md:h-[500px]  justify-center gap-4">
        <div className="w-full max-w-[122px] h-full max-h-[130px]">
          <img src={check} alt="signup successful" className="w-full h-full" />
        </div>
        <h1 className="text-[#1d1d1d] leading-[44px] text-[36px]  text-center">
          Account created
        </h1>
        <p className="leading-[20px] text-[14px] font-normal mx-auto">
          Congratulations, your account has been created successfully.
        </p>
        <Link
          to="/login"
          className="bg-[#FF6C00] hover:text-[#FF9D55] w-full max-w-[365px] text-white flex justify-center items-center rounded-[8px] mt-4 h-[50px] mb-3 mx-auto"
        >
          Login to account
        </Link>
      </main>
    );
  }

  return (
    <main className=" font-axiforma border border-[#434343] rounded-[12px] w-[95%] max-w-[664px] flex flex-col  mx-auto my-[5rem]">
      <h1 className="text-[#1d1d1d] leading-[44px] text-[36px] mt-14 mb-5 text-center">
        Create your account
      </h1>
      <div className="px-6">
        {error ? <p className="text-red-400 text-lg">{error}</p> : null}
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <AuthInput
            label="First name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value.trim())}
          />
          <AuthInput
            label="Last name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value.trim())}
          />
          <AuthInput
            label="Username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value.trim())}
          />
          <AuthInput
            label="Email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value.trim())}
          />

          <AuthInput
            label="Password"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPasswordError('');
              setPassword(e.target.value.trim());
            }}
          />
          {passwordError ? (
            <p className="text-red-400 text-lg">{passwordError}</p>
          ) : null}
          {error ? <p className="text-red-400 text-lg">{error}</p> : null}
          <AuthInput
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => {
              setPasswordError('');
              setConfirmPassword(e.target.value.trim());
            }}
          />

          {/* {loading && (
            <p className="text-center text-[18px] font-semibold">Loading....</p>
          )} */}
          {loading && (
            <Loader />
          )}

          <div>
            <p className="leading-[20px] text-[14px] font-normal mx-auto">
              By clicking the “Create account” button, you agree to
              Discripto&apos;s{' '}
              <Link
                to="/terms-of-use"
                className="text-[#ff6c00] hover:text-[#FF9D55]"
              >
                terms of acceptable use.
              </Link>
            </p>
            <button
              type="submit"
              className="bg-[#FF6C00] hover:bg-[#FF9D55] w-full text-white flex justify-center items-center rounded-[8px] mt-4 h-[50px] mb-3"
              disabled={loading}
            >
              {loading ? 'Loading......' : 'Create account'}
            </button>
            <p className="leading-[20px] text-[14px] font-normal text-center  mb-8">
              Already have an account?{' '}
              <Link to="/login" className="text-[#ff6c00] hover:text-[#FF9D55]">
                Log in
              </Link>{' '}
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;

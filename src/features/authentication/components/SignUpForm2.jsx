import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormButton from './FormButton';
import LoginFormInput from './LoginFormInput';

const SignUpForm2 = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/verify');
    setEmail(email);
    console.log(email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="text-base text-[#292929] my-5">
        <LoginFormInput
          label="Full Name"
          name="Fname"
          type="text"
          value=""
          onchange={(e) => e.target.value.trim()}
          placeholder="Full name"
        />
        <LoginFormInput
          label="Phone Number"
          name="phone"
          type="number"
          value=""
          onchange={(e) => e.target.value.trim()}
          placeholder="Phone Number"
        />
        <LoginFormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onchange={(e) => setEmail(e.target.value.trim())}
          placeholder="Email"
        />
        <LoginFormInput
          label="Password"
          name="password"
          type="password"
          value=""
          onchange={(e) => e.target.value.trim()}
          placeholder="password"
        />
        <p className="my-10 text-sm font-semibold">
          By clicking the &apos;Create account&apos; button, you agree to
          Tozilla&apos;s{' '}
          <Link to="/" className="text-[#FF971E]">
            terms of acceptance use.
          </Link>
        </p>
        <FormButton name="Create Account" />
        <p className="text-xs text-center sm:hidden">
          Already have an account?{' '}
        </p>
        <Link
          to="/login"
          className="sm:hidden px-20 py-3 my-3 items-center mx-auto flex border border-[#FF971E] text-[#FF971E] text-base sm:text-lg rounded-lg"
        >
          Login to account
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm2;

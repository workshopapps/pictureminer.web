import React from 'react';
import { Link } from 'react-router-dom';
import FormButton from './FormButton';
import LoginFormInput from './LoginFormInput';

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="'text-base text-[#292929] my-5">
        <LoginFormInput
          label="Email"
          name="email"
          type="email"
          value=""
          onchange={(e) => e.target.value.trim()}
          placeholder="Email address"
          required
        />
        <LoginFormInput
          label="Password"
          name="password"
          type="password"
          value=""
          onchange={(e) => e.target.value.trim()}
          placeholder="Password"
          required
        />
        <h6>
          <Link to="/password-forget" className="text-xs text-[#FF971E]">
            Forgot Password?
          </Link>
        </h6>
        <FormButton name="Login" />
        <p className="text-center">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-[#FF971E]">
            Sign up
          </Link>{' '}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

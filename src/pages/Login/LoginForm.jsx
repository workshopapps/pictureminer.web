import React from 'react';
import FormInput from './FormInput';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
const LoginForm = ({ onSubmit, errorMessage, loading }) => {
  return (
    <form className="loginform" onSubmit={onSubmit}>
      <FormInput
        placeholder="Enter your email"
        type="email"
        name="Email"
        id="email"
        label="Email Address"
      />

      <FormInput
        placeholder="Please enter your password"
        type="password"
        name="Password"
        id="password"
        label="Password"
      />

      <div className="forgot">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      <Button
        text="Login"
        type="submit"
        className="loginbutton flex justify-center items-center"
        loading={loading}
      />
      {errorMessage && (
        <div className="invalidLogin">Invalid Login Details</div>
      )}

      <div className="dont">
        Dont have an account?{' '}
        <Link to="/signup" className="create">
          Create an account
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

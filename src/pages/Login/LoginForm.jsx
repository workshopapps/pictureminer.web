import React from 'react';
import FormInput from './FormInput';
import Button from '../../components/ui/Button';
const LoginForm = ({ onSubmit }) => {
  return (
    <form className='loginform' onSubmit={onSubmit} >
      <FormInput
        placeholder="Enter your email"
        type="email"
        name="Email"
        id="email"/>

      <FormInput
      placeholder= 'Please enter your password'
      type='password'
      name= 'Password'
      id = 'password'
      />

      <div className='forgot'>
        Forgot Password?
      </div>

      <Button
        text='Login'
        type='submit'
        className='loginbutton'

      />

    </form>
  );
};

export default LoginForm;
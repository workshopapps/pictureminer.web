import React from 'react';
import FormInput from './FormInput';
const LoginForm = () => {
  return (
    <div className='loginform'>
      <FormInput
        placeholder="Enter your email"
        type="email"
        name="Email"
        id="email"


      />
      <FormInput
      placeholder= 'Please enter your password'
      type='password'
      name= 'Password'
      id = 'password'

      />

    </div>
  );
};

export default LoginForm;
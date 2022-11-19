import React from 'react';
import FormNav from '../../components/FormNav';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  return (
    <div>
      <FormNav />
      <div className="w-[310px] h-[450px] sm:w-[528px] sm:h-[600px] text-[#434343] border border-[#434343] bg-[#FFFFFF] mx-auto mt-10 p-4 sm:p-10">
        <h1 className="text-black text-xl sm:text-3xl text-center font-bold my-5">
          Login
        </h1>
        <p className="text-base text-[#4F4F4F] text-center">
          Welcome back! Please enter your details
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

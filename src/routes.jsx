import React from 'react';

import { Routes, Route } from 'react-router-dom';
// import Layout from "./layouts/Layout";
import ErrorPage from './Error';
import App from './App';
import Login from './features/authentication/page/Login/Login';
import VerificationPage2 from './features/authentication/page/Signup/VerificationPage2';
import VerificationPage3 from './features/authentication/page/Signup/VerificationPage3';
import VerificationPage1 from './features/authentication/page/Signup/VerificationPage1';
import SignUp2 from './features/authentication/page/Signup/SignUp2';
import SignUp from './features/authentication/page/Signup/SignUp';
import ForgetPassword from './features/authentication/page/Login/ForgetPassword';
import ResetPasswordPage from './features/authentication/page/Login/ResetPasswordPage';
import ResetSuccessPage from './features/authentication/page/Login/ResetSuccessPage';

const RoutesComponents = () => {
  return (
    <>
      <Routes>
        {/* <Route path="" element={<App />}> */}
        <Route index path="/" element={<App />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/personal-info" element={<SignUp2 />} />
        <Route path="/verify" element={<VerificationPage1 />} />
        <Route path="/verification-code" element={<VerificationPage2 />} />
        <Route path="/verified" element={<VerificationPage3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-forget" element={<ForgetPassword />} />
        <Route path="/password-reset" element={<ResetPasswordPage />} />
        <Route path="/reset-successful" element={<ResetSuccessPage />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};

export default RoutesComponents;

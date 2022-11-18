import React from 'react';

import { Routes, Route } from 'react-router-dom';
// import Layout from "./layouts/Layout";
import ErrorPage from './Error';
import CustomerStories from './pages/CustomerStories';
import App from './App';

const RoutesComponents = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<App />}>
          <Route index path="/" element={<App />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
        <Route path="customer-stories" element={<CustomerStories />}>
          {' '}
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponents;

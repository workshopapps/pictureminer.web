import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ErrorPage from './Error';
import App from './App';
import { CareerApplication, CareerLanding } from './pages/career';

const RoutesComponents = () => {
  return (
    <Layout>
      <Routes>
        {/* <Route path="" element={<App />}> */}
        <Route index path="/" element={<App />}></Route>

        <Route path="/careers" element={<CareerLanding />} />
        <Route path="/careers/application" element={<CareerApplication />} />
        <Route path="*" element={<ErrorPage />}></Route>
        {/* </Route> */}
      </Routes>
    </Layout>
  );
};

export default RoutesComponents;

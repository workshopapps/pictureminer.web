import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ErrorPage from './Error';
import App from './App';

const RoutesComponents = () => {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<App />}>
          <Route index path="/" element={<App />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </Layout>
  );
};

export default RoutesComponents;

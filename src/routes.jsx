import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ErrorPage from './Error';
import App from './App';
import Termsofuse from './pages/terms-of-use/Termsofuse';

const RoutesComponents = () => {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<App />}>
          <Route index path="/" element={<App />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/terms-of-use" element={<Termsofuse />}></Route>
        </Route>
      </Routes>
    </Layout>
  );
};

export default RoutesComponents;

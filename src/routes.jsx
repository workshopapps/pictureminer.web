import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
// import Layout from "./layouts/Layout";
import ErrorPage from "./Error";
import App from "./App";

const RoutesComponents = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<App />}>
          <Route index path="/" element={<App />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponents;

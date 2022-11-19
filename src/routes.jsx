import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ErrorPage from './Error';
import App from './App';
import { CareerApplication } from './pages/career';

// import DashboardLayout from './layouts/dashboard/DashboardLayout';
// import Dashboard from './pages/dashboard/Dashboard';
import Billing from './pages/dashboard/Billing';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import AccountSettings from './pages/dashboard/AccountSettings';

const RoutesComponents = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index path="/" element={<App />}></Route>
          <Route path="/careers/application" element={<CareerApplication />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>

        {/* <Route path="" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="account-setup" element={<AccountSettings />} />
          <Route path="billing" element={<Billing />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponents;

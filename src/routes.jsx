import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ErrorPage from './Error';
import App from './App';
import {
  CareerApplication,
  CareerLanding,
  CareerMoreJobs,
  CareerSingleJobView,
} from './pages/career';

import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import DocumentationHome from './pages/documentation/Home/DocumentationHome';
import GettingStarted from './pages/documentation/GettingStartedPage/GettingStarted';
import Installations from './pages/documentation/InstallationsPage/Installations';

import { useGlobalContext } from './context/context';

const RoutesComponents = () => {
  const {
    state: {
      // This has other key-value like loading, error etc
      // eslint-disable-next-line no-unused-vars
      login: { serverResponse: user },
    },
  } = useGlobalContext();

  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index path="/" element={<App />}></Route>
          <Route
            index
            path="/documentation"
            element={<DocumentationHome />}
          ></Route>
          <Route
            path="/documentation/getting-started"
            element={<GettingStarted />}
          ></Route>
          <Route
            path="/documentation/installations"
            element={<Installations />}
          ></Route>
          <Route path="/careers" element={<CareerLanding />} />
          <Route path="/careers/application" element={<CareerApplication />} />
          <Route path="/careers/more-jobs" element={<CareerMoreJobs />} />
          <Route
            path="/careers/jobs/singles"
            element={<CareerSingleJobView />}
          />
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>

        <Route path="" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponents;

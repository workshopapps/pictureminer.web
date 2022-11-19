import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './Error';

import {
  CareerApplication,
  CareerLanding,
  CareerMoreJobs,
  CareerSingleJobView,
} from './pages/career';

import CustomerStories from './pages/CustomerStories';
import { CareerApplication } from './pages/career';
import About from './pages/About/components/About';


import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import DocumentationHome from './pages/documentation/Home/DocumentationHome';
import GettingStarted from './pages/documentation/GettingStartedPage/GettingStarted';
import Installations from './pages/documentation/InstallationsPage/Installations';

const RoutesComponents = () => {
  return (
    <>
      <Routes>
          <Route path="/about-us" element={<About />} />
        <Route path="" element={<Layout />}>
          <Route index path="/" element={<App />}></Route>
          <Route path="/careers/application" element={<CareerApplication />} />
          <Route path="/careers/more-jobs" element={<CareerMoreJobs />} />
          <Route
            path="/careers/jobs/singles"
            element={<CareerSingleJobView />}
          />
          <Route path="/terms-of-use" element={<Termsofuse />}></Route>
          <Route path="/privacy-policy" element={<Privacypolicy />}></Route>
          <Route path="/faq" element={<Faq />}></Route>

          <Route path="/careers/more-jobs" element={<CareerMoreJobs />} />
          <Route
            path="/careers/jobs/singles"
            element={<CareerSingleJobView />}
          />
          <Route path="*" element={<ErrorPage />}></Route>

          <Route path="why-tozilla" element={<WhyTozilla />} />
        </Route>

        <Route path="" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponents;

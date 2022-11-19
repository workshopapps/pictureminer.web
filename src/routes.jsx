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

import CustomerStories from './pages/CustomerStories';
import { CareerApplication } from './pages/career';


import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Images from './pages/dashboard/Images';

import BlogList from './pages/blog/BlogList';
import ExtensionBlog from './pages/blog/components/ExtensionBlog';

import AccountSettings from './pages/dashboard/AccountSettings';
import Billing from './pages/dashboard/Billing';

import DocumentationHome from './pages/documentation/Home/DocumentationHome';
import GettingStarted from './pages/documentation/GettingStartedPage/GettingStarted';
import Installations from './pages/documentation/InstallationsPage/Installations';

import WhyTozilla from './pages/whyTozilla/whyTozilla';

import ExamplePage from './pages/documentation/ExamplePage/ExamplePage';
import UtilitiesPage from './pages/documentation/UtilitiesPage/UtilitiesPage';

import LandingPage from './pages/LandingPage/LandingPage';
import MinergramDemo from './pages/LandingPage/MinergramDemo/MinergramDemo';
import ImageDetails from './pages/dashboard/ImageDetails';


const RoutesComponents = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route exact path="" element={<LandingPage />} />
          <Route path="/demo" element={<MinergramDemo />} />
          <Route path="/documentation" element={<DocumentationHome />}></Route>
          <Route
            path="/documentation/getting-started"
            element={<GettingStarted />}
          ></Route>
          <Route path="customer-stories" element={<CustomerStories />}></Route>
          <Route
            path="/documentation/installations"
            element={<Installations />}
          ></Route>

          <Route path="/careers" element={<CareerLanding />} />

          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog-page" element={<ExtensionBlog />} />
          <Route
            path="/documentation/examples"
            element={<ExamplePage />}
          ></Route>
          <Route
            path="/documentation/utilities"
            element={<UtilitiesPage />}
          ></Route>

          <Route path="/careers/application" element={<CareerApplication />} />
          <Route path="/careers/more-jobs" element={<CareerMoreJobs />} />
          <Route
            path="/careers/jobs/singles"
            element={<CareerSingleJobView />}
          />
          <Route path="*" element={<ErrorPage />}></Route>

		  <Route path="why-tozilla" element={<WhyTozilla/>}/>

        </Route>


        <Route path="" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/images" element={<Images />} />

          <Route path="/images/:imageId" element={<ImageDetails />} />

          <Route path="/account-setup" element={<AccountSettings />} />
          <Route path="/billing" element={<Billing />} />

        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponents;

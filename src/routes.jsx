import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './Error';
import Login from './pages/Login';

import {
  CareerApplication,
  CareerLanding,
  CareerMoreJobs,
  CareerSingleJobView,
} from './pages/career';

import CustomerStories from './pages/CustomerStories';
import About from './pages/About/components/About';
// import { CareerApplication } from './pages/career';
import ProtectedRoutes from './ProtectedRoutes';
import Termsofuse from './pages/terms-of-use/Termsofuse';
import PartnerWithUs from './pages/PartnerWithUs/App';

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
import UtilitiesPage from './pages/documentation/UtilitiesPage/UtilitiesPage';

import ExamplePage from './pages/documentation/ExamplePage/ExamplePage';
import LandingPage from './pages/LandingPage/LandingPage';
import MinergramDemo from './pages/LandingPage/MinergramDemo/MinergramDemo';
import Integrations from './pages/documentation/IntegrationPage/Integrations';
import Web from './pages/documentation/WebPage/Web';
import WhyTozilla from './pages/whyTozilla/WhyTozilla';

import ImageDetails from './pages/dashboard/ImageDetails';

import Privacypolicy from './pages/privacypolicy/privacypolicy';

import ApiDocumentation from './pages/documentation/ApiDocumentation';

import Faq from './pages/FAQ/faq';

import Layout from './layouts/Layout';
import HowItWorks from './pages/howItWorks/howItWorks';
import SupportPage from './pages/support';
import Home from './pages/PartnerWithUs/page/Home';
import Apply from './pages/PartnerWithUs/page/Apply';
import ApplicationReceived from './pages/PartnerWithUs/page/ApplicationReceived';
import ScrollToTop from './layouts/ScrollToTop';
const RoutesComponents = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route exact path="" element={<LandingPage />} />
            <Route path="/demo" element={<MinergramDemo />} />
            <Route path="/About-us" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />}></Route>
            <Route
              path="/documentation"
              element={<DocumentationHome />}
            ></Route>
            <Route
              path="/documentation/getting-started"
              element={<GettingStarted />}
            ></Route>
            <Route
              path="customer-stories"
              element={<CustomerStories />}
            ></Route>
            <Route path="support" element={<SupportPage />}></Route>
            <Route
              path="/documentation/integrations"
              element={<Integrations />}
            ></Route>
            <Route path="/documentation/web" element={<Web />}></Route>
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
            <Route
              path="/documentation/apis"
              element={<ApiDocumentation />}
            ></Route>

            <Route
              path="/careers/application"
              element={<CareerApplication />}
            />
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
            <Route path= '/login' element={<Login />} />
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/application" element={<ApplicationReceived />} />
          <Route element = {<ProtectedRoutes/>}>
          <Route path="" element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/images" element={<Images />} />

            <Route path="/images/:imageId" element={<ImageDetails />} />

            <Route path="/account-setup" element={<AccountSettings />} />
            <Route path="/billing" element={<Billing />} />
          </Route>
          </Route>

        </Routes>
      </ScrollToTop>
    </>
  );
};

export default RoutesComponents;

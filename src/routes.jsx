import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './Error';
import Login from './pages/Login';
import About from './pages/About/components/About';
import Termsofuse from './pages/terms-of-use/Termsofuse';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Images from './pages/dashboard/Images';
import AccountSettings from './pages/dashboard/AccountSettings';
import Billing from './pages/dashboard/Billing';
import DocumentationHome from './pages/documentation/Documentation';
import GettingStarted from './pages/documentation/components/TabContent-1';
// import ExampleCLI from './pages/documentation/components/ExampleCLI';
// import Installations from './pages/documentation/InstallationsPage/Installations';
// import UtilitiesPage from './pages/documentation/UtilitiesPage/UtilitiesPage';
// import ExamplePage from './pages/documentation/ExamplePage/ExamplePage';
import LandingPage from './pages/LandingPage/LandingPage';
import EcommercePage from './pages/LandingPage/EcommercePage/EcommercePage';
import Hospitality from './pages/LandingPage/HospitalityPage/Hospitality';
import SearchEngine from './pages/LandingPage/SearchEnginePage/SearchEngine';
import Healthcare from './pages/LandingPage/HealthcarePage/Healthcare';
import ExternalDemoPage from './pages/LandingPage/ExternalPage/ExternalPage';
// import Integrations from './pages/documentation/IntegrationPage/Integrations';
// import Web from './pages/documentation/WebPage/Web';
import WhyMinergram from './pages/whyTozilla/WhyMinergram';
import ImageDetails from './pages/dashboard/ImageDetails';
import Privacypolicy from './pages/privacypolicy/privacypolicy';
// import ApiDocumentation from './pages/documentation/ApiDocumentation';
import Faq from './pages/FAQ/faq';
import Layout from './layouts/Layout';
import HowItWorks from './pages/howItWorks/howItWorks';
import ScrollToTop from './layouts/ScrollToTop';
import Pricing from './pages/pricing/Pricing';
import ImageUpload from './pages/dashboard/ImageUpload';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import ResetPassword from './pages/resetPassword/ResetPassword';
import Payment from './pages/pricing/Payment';
import Signup from './pages/signup';
import { AppProvider } from './context/context';
import { getLocalStorage } from './localStorage';
import UserContext from './context/UserContext';
import BatchDetails from './pages/dashboard/BatchDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from './pages/contactUs/ContactUs';
import { AnimatePresence } from 'framer-motion';

const RoutesComponents = () => {
  const { setUser } = useContext(UserContext);

  const userData = getLocalStorage('user');
  useEffect(() => {
    setUser(userData);
  }, []);

  return (
    <AppProvider>
      <AnimatePresence mode="wait">
        <ScrollToTop>
          <ToastContainer />
          <Routes location={location} key={location.pathname}>
            <Route path="" element={<Layout />}>
              <Route exact path="" element={<LandingPage />} />
              <Route exact path="/hospitality" element={<Hospitality />} />
              <Route exact path="/search-engine" element={<SearchEngine />} />
              <Route exact path="/health-care" element={<Healthcare />} />
              <Route path="/signup" element={<Signup />} />

              {/* <Route path="/demo" element={<MinergramDemo />} /> */}
              <Route path="/demo" element={<ExternalDemoPage />} />

              <Route path="/e-commerce" element={<EcommercePage />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/how-it-works" element={<HowItWorks />} />

              <Route path="/pricing" element={<Pricing />}></Route>
              <Route path="/pricing/:paymentPlan" element={<Payment />} />
              <Route
                path="/documentation"
                element={<DocumentationHome />}
              ></Route>
              <Route
                path="/documentation/getting-started"
                element={<GettingStarted />}
              ></Route>

              <Route path="/terms-of-use" element={<Termsofuse />}></Route>
              <Route path="/privacy-policy" element={<Privacypolicy />}></Route>
              <Route path="/faq" element={<Faq />}></Route>
              <Route path="/contact-us" element={<ContactUs />}></Route>
              <Route path="*" element={<ErrorPage />}></Route>

              {/* <Route path="why-tozilla" element={<WhyTozilla />} /> */}
              <Route path="/why-discripto" element={<WhyMinergram />} />

              <Route path="/login" element={<Login />} />
            </Route>
            {/*If your riute us priviate, use Protected Route */}

            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/images" element={<Images />} />
              <Route path="/imageUpload" element={<ImageUpload />} />

              <Route path="/images/:imageId" element={<ImageDetails />} />
              <Route path="/images/batch/:batchId" element={<BatchDetails />} />

              <Route path="/account-setup" element={<AccountSettings />} />
              <Route path="/billing" element={<Billing />} />
            </Route>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </ScrollToTop>
      </AnimatePresence>
    </AppProvider>
  );
};

export default RoutesComponents;

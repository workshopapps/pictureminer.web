import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ErrorPage from './Error';
import App from './App';
import { CareerApplication } from './pages/career';
import About from './pages/About/components/About';

import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Images from './pages/dashboard/Images';
import DocumentationHome from './pages/documentation/Home/DocumentationHome';
import GettingStarted from './pages/documentation/GettingStartedPage/GettingStarted';
import Installations from './pages/documentation/InstallationsPage/Installations';
import ExamplePage from './pages/documentation/ExamplePage/ExamplePage';
import UtilitiesPage from './pages/documentation/UtilitiesPage/UtilitiesPage';

<<<<<<< HEAD
=======
import Main from './pages/LandingPage/main';

>>>>>>> 326fe514d3d673f3b72bb73ef68513b2c4d9b22a
const RoutesComponents = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index path="/" element={<App />}></Route>
<<<<<<< HEAD
          <Route path="/about-us" element={<About />} />
=======
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
          <Route
            path="/documentation/examples"
            element={<ExamplePage/>}
          ></Route>
           <Route
            path="/documentation/utilities"
            element={<UtilitiesPage/>}
          ></Route>
>>>>>>> 326fe514d3d673f3b72bb73ef68513b2c4d9b22a
          <Route path="/careers/application" element={<CareerApplication />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
        <Route path="" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
        </Route>
=======
          <Route path="/images" element={<Images />} />
        </Route>
		    <Route path='/landingpage' element={<Main />} />
>>>>>>> 326fe514d3d673f3b72bb73ef68513b2c4d9b22a
      </Routes>
    </>
  );
};

export default RoutesComponents;

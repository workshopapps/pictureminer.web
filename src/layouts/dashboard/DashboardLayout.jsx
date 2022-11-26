import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import { useGlobalContext } from '../../context/context';
import UserContext from '../../context/UserContext';

import DashboardNavbar from './DashboardNavbar';
import Sidebar from './Sidebar';
import Login from '../../pages/Login';
import axios from 'axios';
import { getLocalStorage } from '../../localStorage';
import NavBar from '../Navbar';
import Footer from '../Footer';
axios.defaults.baseURL = 'https://minergramtest.herokuapp.com/api/v1/';

const DashboardLayout = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <div className="dashboard_layout">
          <Sidebar />
          <div className="dashboard_pages">
            <DashboardNavbar data={user} />
            <Outlet />
          </div>
        </div>
      ) : (
        <>
          <NavBar />
          <p>
            Please Login with email:email@test.com and password:password for
            testing and grading
          </p>
          <Login />
          <Footer />
        </>
      )}
    </>
  );
};

export default DashboardLayout;

import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import DashboardNavbar from './DashboardNavbar';
import Sidebar from './Sidebar';
import Login from '../../pages/Login';
import axios from 'axios';
import NavBar from '../Navbar';
import Footer from '../Footer';
axios.defaults.baseURL = 'https://discripto.hng.tech/api1/api/v1/';

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
          <Login />
          <Footer />
        </>
      )}
    </>
  );
};

export default DashboardLayout;

import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
// import { useGlobalContext } from '../../context/context';
import UserContext from '../../context/UserContext';

import DashboardNavbar from './DashboardNavbar';
import Sidebar from './Sidebar';
import Login from '../../pages/Login';

const DashboardLayout = () => {
  // const {
  //   state: {
  //     // This has other key-value like loading, error etc
  //     // eslint-disable-next-line no-unused-vars
  //     login: { serverResponse: user },
  //   },
  // } = useGlobalContext();

  const { user } = useContext(UserContext);

  return (
    <>
      {
        <div className="dashboard_layout">
          <Sidebar />
          <div className="dashboard_pages">
            <DashboardNavbar data={'user'} />
            <Outlet />
          </div>
        </div>
        // ) : (
        //   <Login />
      }
    </>
  );
};

export default DashboardLayout;

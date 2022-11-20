import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="dashboard_layout">
      <Sidebar />
      <div className="dashboard_pages">
        <DashboardNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="dashboard_layout">
      <Sidebar />
      <div className="dashboard_pages">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

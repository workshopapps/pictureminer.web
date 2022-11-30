/* eslint-disable indent */
import React from 'react';
import { Outlet } from 'react-router-dom';

// import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="flex flex-col  justify-between">
      <Navbar />
      <div
        style={{
          minHeight: '90vh',
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

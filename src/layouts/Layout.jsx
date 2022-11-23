/* eslint-disable indent */
import React from 'react';
import { Outlet } from 'react-router-dom';

// import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="Layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

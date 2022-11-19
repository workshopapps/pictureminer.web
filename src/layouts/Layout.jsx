/* eslint-disable indent */
import React from 'react';
// import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

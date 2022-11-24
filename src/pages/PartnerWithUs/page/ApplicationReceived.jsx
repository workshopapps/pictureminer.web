import React from 'react';
import ApplicationIsReceived from '../../../components/Cards/ApplicationIsReceived';
import Footer from '../../../layouts/Footer';
import NavBar from '../../../layouts/Navbar';
function ApplicationReceived() {
  return (
    <div className='h-screen'>
    <NavBar/>
    <ApplicationIsReceived/>
    <Footer/>
    </div>
  );
}

export default ApplicationReceived;

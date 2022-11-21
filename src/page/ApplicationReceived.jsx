import React from 'react';
import ApplicationIsReceived from '../components/Cards/ApplicationIsReceived';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

function ApplicationReceived() {
  return (
    <div className='h-screen'>
    <Header/>
    <ApplicationIsReceived/>
    <Footer/>
    </div>
  );
}

export default ApplicationReceived;

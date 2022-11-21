import React from 'react';
import Header from '../layouts/Header';
import ApplyCard from '../components/Cards/ApplyCard';
import Footer from '../layouts/Footer';
function Apply() {
  return (
    <div className='h-screen'>
     <Header/>
     <ApplyCard/>
     <Footer/>
    </div>
  );
}

export default Apply;

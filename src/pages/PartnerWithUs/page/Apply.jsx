import React from 'react';

import ApplyCard from '../../../components/Cards/ApplyCard';
import Footer from '../../../layouts/Footer';
import NavBar from '../../../layouts/Navbar';
function Apply() {
  return (
    <div className='h-screen'>
      <NavBar/>
      <ApplyCard/>
     <Footer/>
    </div>
  );
}

export default Apply;

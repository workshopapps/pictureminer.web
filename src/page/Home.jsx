import React from 'react';
import Partner from '../components/Cards/Partner';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

function Home() {
  return (
    <div className='bg-white m-auto '>
        <Header />
        <Partner/>
        <Footer/>
    </div>
  );
}

export default Home;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../PartnerWithUs/page/Home';
import Apply from '../PartnerWithUs/page/Home';
import ApplicationReceived from '../PartnerWithUs/page/ApplicationReceived.jsx';
function App() {
  return (
    <section className=" relative flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply/>} />
        <Route path="/application" element={<ApplicationReceived />} />
      </Routes>
    </section>
  );
}

export default App;

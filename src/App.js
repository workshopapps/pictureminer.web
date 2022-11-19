import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Apply from './page/Apply';
import Home from './page/Home';
import ApplicationReceived from './page/ApplicationReceived';

function App() {
  return (
    <section className=" relative flex h-screen items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/application" element={<ApplicationReceived />} />
      </Routes>
    </section>
  );
}

export default App;

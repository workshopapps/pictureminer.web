import React, { useState } from 'react';
import './styles/documentation.css';
import TabContent1 from './components/TabContent-1';
import TabContent2 from './components/TabContent-2';
// import ExampleCLI from './components/Routes/ExampleCLI';
// import { Routes, Route } from 'react-router-dom';

function Documentation() {
  const [tabState, setTabState] = useState(1);

  return (
    <>
      <div className="">
        {/* Tabs */}
        <div className="container__documentation flex mt-4 lg:mt-10 ml-8 md:ml-10 lg:ml-20">
          <div
            className={` py-4 px-5 rounded-t-lg font-bold cursor-pointer ${
              tabState === 1 ? 'bg-secBlue text-white' : 'bg-transparent'
            }`}
            onClick={() => setTabState(1)}
          >
            Get Started
          </div>
          <div
            className={`px-5 py-4 rounded-t-lg font-bold cursor-pointer ${
              tabState === 2 ? 'bg-secBlue text-white' : 'bg-transparent'
            }`}
            onClick={() => setTabState(2)}
          >
            Integration
          </div>
        </div>
        {/* Tab content */}

        {tabState === 1 && <TabContent1 setTabState={setTabState} />}

        {tabState === 2 && <TabContent2 setTabState={setTabState} />}
      </div>
      {/* <Routes>
        <Route exact path="/examplecli" element={<ExampleCLI />}></Route>
        <Route></Route>
      </Routes> */}
    </>
  );
}

export default Documentation;

// import logo from './logo.svg';
import './App.css';
// import * as Sentry from "@sentry/react";

import ExamplePage from './pages/documentation/ExamplePage/ExamplePage';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ExamplePage />
  );
}

export default App;
// export default Sentry.withProfiler(App);
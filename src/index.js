import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import RoutesComponents from './routes';
import './styles/workflow.scss';
import './App.css';
import './index.css';

function IndexPage() {
  return (
    <>
      <BrowserRouter>
        <RoutesComponents />
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  <IndexPage />

  // </React.StrictMode>
);

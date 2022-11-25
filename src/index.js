import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import RoutesComponents from './routes';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserProvider from './context/UserProvider';
import './styles/workflow.scss';
import './App.css';
import './index.css';
const queryClient = new QueryClient();
function IndexPage() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <BrowserRouter>
            <RoutesComponents />
          </BrowserRouter>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  <IndexPage />

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

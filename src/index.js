import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import RoutesComponents from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { QueryClient, QueryClientProvider } from 'react-query';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import UserProvider from './context/UserProvider';
import './styles/workflow.scss';
import './App.css';
import './index.css';

import * as atatus from 'atatus-spa';
atatus.config('5557669338b74ff5a0d164dd5468741e').install();


atatus.notify(new Error('Test Atatus Setup'));
// process.env.NODE_ENV === 'production' &&
//   Sentry.init({
//     dsn: 'https://e0f9b66780df4cac87132e6630de5edb@o4504279417421824.ingest.sentry.io/4504279420305409',
//     integrations: [new BrowserTracing()],

//     // Set tracesSampleRate to 1.0 to capture 100%
//     // of transactions for performance monitoring.
//     // We recommend adjusting this value in production
//     tracesSampleRate: 1.0,
//   });

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
// reportWebVitals();

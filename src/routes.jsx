import React from 'react';

import { Routes, Route } from 'react-router-dom';
import ErrorPage from './Error';
import App from './App';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';

import Layout from './layouts/Layout';
import HowItWorks from './pages/howItWorks/howItWorks';

const RoutesComponents = () => {

	return (
		<>
			<Routes>
				<Route path="" element={<App />}>
					<Route index path="/" element={<App />}></Route>
					<Route path="*" element={<ErrorPage />}></Route>
				</Route>
				<Route path="" element={<DashboardLayout />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
				<Route path="/how-it-works" element={<Layout><HowItWorks/></Layout>}/>
			</Routes>
		</>
	);

};

export default RoutesComponents;

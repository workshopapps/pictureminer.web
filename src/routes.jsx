import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ErrorPage from './Error';
import App from './App';
import { CareerApplication } from './pages/career';

import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';

import LandingPage from './pages/LandingPage/LandingPage';

const RoutesComponents = () => {

	return (
		<>
			<LandingPage />
			<Routes>
				<Route path='/landingpage' element={<LandingPage />} />
				<Route path="" element={<Layout />}>
					<Route index path="/" element={<App />}></Route>
           <Route path="/careers/application" element={<CareerApplication />} />
					<Route path="*" element={<ErrorPage />}></Route>
				</Route>
				<Route path="" element={<DashboardLayout />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</>
	);


};

export default RoutesComponents;

// import { lazy } from "react";
import { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import NotFound from './components/NotFound';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import Home from './pages/Home';

const Dashboard = lazy(() => import('./pages/App/Dashboard'));

const Router = () => {
	const location = useLocation();

	return (
		<div className="bg-dark">
			<Switch location={location}>
				<PrivateRoute path="/app">
					<Dashboard />
				</PrivateRoute>
				<PublicRoute path="/">
					<Home />
				</PublicRoute>
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};

export default Router;

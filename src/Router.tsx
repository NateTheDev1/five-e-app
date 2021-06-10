// import { lazy } from "react";
import { Route, Switch, useLocation } from 'react-router';
import NotFound from './components/NotFound';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import Home from './pages/Home';

const Router = () => {
	const location = useLocation();

	return (
		<Switch location={location}>
			<PrivateRoute path="/app">
				<h1>App</h1>
			</PrivateRoute>
			<PublicRoute path="/">
				<Home />
			</PublicRoute>
			<Route component={NotFound} />
		</Switch>
	);
};

export default Router;

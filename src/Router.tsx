import { Route, Switch, useLocation } from 'react-router';
import GoogleAd from './components/GoogleAd';
import NotFound from './components/NotFound';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import Dashboard from './pages/App/Dashboard';
import Home from './pages/Home';

const Router = () => {
	const location = useLocation();

	return (
		<div className="bg-bgmain app">
			<Switch location={location}>
				<PrivateRoute path="/app">
					<Dashboard />
				</PrivateRoute>
				<PublicRoute path="/">
					<Home />
				</PublicRoute>
				<Route component={NotFound} />
			</Switch>
			<GoogleAd />
		</div>
	);
};

export default Router;

// import { lazy } from "react";
import { Route, Switch, useLocation } from 'react-router';
import NotFound from './components/NotFound';
import Home from './pages/Home';

const Router = () => {
	const location = useLocation();

	return (
		<Switch location={location}>
			<Route path="/">
				<Home />
			</Route>
			<Route component={NotFound} />
		</Switch>
	);
};

export default Router;

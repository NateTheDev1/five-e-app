import { lazy } from 'react';
import { Route, Switch } from 'react-router';

const Login = lazy(() => import('./Onboarding/Login'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
	return (
		<div className=" bg-gray-800">
			<Switch>
				<Route exact path="/">
					<Login />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
};

export default Home;

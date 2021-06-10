import { lazy } from 'react';
import { Route, Switch } from 'react-router';
import NotFound from '../components/NotFound';

const Login = lazy(() => import('./Onboarding/Login'));
const Footer = lazy(() => import('../components/Footer'));
const Signup = lazy(() => import('./Onboarding/Signup'));

const Home = () => {
	return (
		<div
			className=" bg-gray-800 h-screen w-screen"
			style={{ overflow: 'hidden' }}
		>
			<Switch>
				<Route path="/register">
					<Signup />
				</Route>
				<Route exact path="/">
					<Login />
				</Route>
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</div>
	);
};

export default Home;

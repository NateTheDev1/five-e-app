import { lazy } from 'react';
import { Route, Switch } from 'react-router';
import Navbar from '../../components/Navbar';
import NotFound from '../../components/NotFound';

const DashboardHome = lazy(() => import('./DashboardHome'));

const Dashboard = () => {
	return (
		<div className=" bg-gray-800 h-screen pb-10 w-screen text-white">
			<Navbar />
			<Switch>
				<Route exact path="/app">
					<DashboardHome />
				</Route>
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};
export default Dashboard;

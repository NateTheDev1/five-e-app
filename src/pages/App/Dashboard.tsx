import { lazy } from 'react';
import { Route, Switch } from 'react-router';
import Navbar from '../../components/Navbar';
import NotFound from '../../components/NotFound';

const DashboardHome = lazy(() => import('./DashboardHome'));
const CharactersView = lazy(() => import('./Character/CharactersView'));
const NewCharacter = lazy(() => import('./Character/NewCharacter'));
const Soundboards = lazy(() => import('./Soundboard'));

const Dashboard = () => {
	return (
		<div className=" bg-gray-800 h-screen pb-10 w-screen text-white">
			<Navbar />
			<Switch>
				<Route path="/app/soundboard">
					<Soundboards />
				</Route>
				<Route path="/app/characters/new">
					<NewCharacter />
				</Route>
				<Route path="/app/characters/:key">
					<p>Character view in development</p>
				</Route>
				<Route exact path="/app/characters">
					<CharactersView />
				</Route>
				<Route exact path="/app">
					<DashboardHome />
				</Route>
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};
export default Dashboard;

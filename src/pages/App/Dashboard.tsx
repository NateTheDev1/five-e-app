import { Capacitor } from '@capacitor/core';
import { lazy } from 'react';
import { Route, Switch } from 'react-router';
import BottomNav from '../../components/BottomNav';
import Navbar from '../../components/Navbar';
import NotFound from '../../components/NotFound';
import DashboardHome from './DashboardHome';

const CharactersView = lazy(() => import('./Character/CharactersView'));
const NewCharacter = lazy(() => import('./Character/NewCharacter'));
const Soundboards = lazy(() => import('./Soundboard'));
const CharacterSheet = lazy(() => import('./Character/CharacterSheet'));

const Dashboard = () => {
	return (
		<div className=" bg-gray-800 h-screen pb-10 w-screen text-white">
			{Capacitor.getPlatform() === 'web' && <Navbar />}
			<Switch>
				<Route path="/app/soundboard">
					<Soundboards />
				</Route>
				<Route path="/app/characters/new">
					<NewCharacter />
				</Route>
				<Route path="/app/characters/:charKey">
					<CharacterSheet />
				</Route>
				<Route exact path="/app/characters">
					<CharactersView />
				</Route>
				<Route exact path="/app">
					<DashboardHome />
				</Route>
				<Route component={NotFound} />
			</Switch>
			<div className="pb-20"></div>
			{Capacitor.getPlatform() !== 'web' && <BottomNav />}
		</div>
	);
};
export default Dashboard;

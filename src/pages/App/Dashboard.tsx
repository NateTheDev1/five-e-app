import { Capacitor } from '@capacitor/core';
import { lazy } from 'react';
import { Route, Switch } from 'react-router';
import BottomNav from '../../components/BottomNav';
import Navbar from '../../components/Navbar';
import NotFound from '../../components/NotFound';
import TopBarMobile from '../../components/TopBarMobile';
import Compendium from './Compendium';
import DashboardHome from './DashboardHome';

const CharactersView = lazy(() => import('./Character/CharactersView'));
const NewCharacter = lazy(() => import('./Character/NewCharacter'));
const Soundboards = lazy(() => import('./Soundboard'));
const CharacterSheet = lazy(() => import('./Character/CharacterSheet'));
const Soundboard = lazy(() => import('./Soundboard/Soundboard'));

const Dashboard = () => {
	return (
		<div className=" bg-bgmain h-screen pb-10 w-screen text-white">
			{Capacitor.getPlatform() === 'web' && <Navbar />}
			{Capacitor.getPlatform() !== 'web' && <TopBarMobile title="Home" />}
			<Switch>
				<Route path="/app/compendium">
					<Compendium />
				</Route>
				<Route path="/app/soundboard/:soundboardId">
					<Soundboard />
				</Route>
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

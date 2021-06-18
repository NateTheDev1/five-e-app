import { lazy } from 'react';
import { Switch, Route } from 'react-router';
import Stats from './Stats';

const GeneralInfo = lazy(() => import('./GeneralInfo'));
const Races = lazy(() => import('./Races'));
const Classes = lazy(() => import('./Classes'));
const BackgroundView = lazy(() => import('./BackgroundView'));

const NewCharacter = () => {
	return (
		<Switch>
			<Route exact path="/app/characters/new/stats">
				<Stats />
			</Route>
			<Route exact path="/app/characters/new/background">
				<BackgroundView />
			</Route>
			<Route exact path="/app/characters/new/classes">
				<Classes />
			</Route>
			<Route exact path="/app/characters/new/races">
				<Races />
			</Route>
			<Route exact path="/app/characters/new">
				<GeneralInfo />
			</Route>
		</Switch>
	);
};

export default NewCharacter;

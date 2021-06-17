import { lazy } from 'react';
import { Switch, Route } from 'react-router';

const GeneralInfo = lazy(() => import('./GeneralInfo'));
const Races = lazy(() => import('./Races'));
const Classes = lazy(() => import('./Classes'));
const Stats = lazy(() => import('./Stats'));
const Finish = lazy(() => import('./Finish'));
const BackgroundView = lazy(() => import('./BackgroundView'));

const NewCharacter = () => {
	return (
		<Switch>
			<Route exact path="/app/characters/new/finish">
				<Finish />
			</Route>
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

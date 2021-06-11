import { lazy } from 'react';
import { Switch, Route } from 'react-router';

const GeneralInfo = lazy(() => import('./GeneralInfo'));
const Races = lazy(() => import('./Races'));
const Classes = lazy(() => import('./Classes'));

const NewCharacter = () => {
	return (
		<Switch>
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

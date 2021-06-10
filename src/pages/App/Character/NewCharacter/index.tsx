import { lazy } from 'react';
import { Switch, Route } from 'react-router';

const GeneralInfo = lazy(() => import('./GeneralInfo'));

const NewCharacter = () => {
	return (
		<Switch>
			<Route exact path="/app/characters/new/races">
				<h1>Races</h1>
			</Route>
			<Route exact path="/app/characters/new">
				<GeneralInfo />
			</Route>
		</Switch>
	);
};

export default NewCharacter;

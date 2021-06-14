import { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Animate } from 'react-simple-animate';
import phb from '../../../../core/phb';
import { Race as RaceType } from '../../../../core/types';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { animProps } from '../../../Onboarding/Login';
import Race from './Race';

const races = phb.races;

const Races = () => {
	// const history = useHistory();
	// const newCharacter = CharacterSelectors.useSelectNewCharacter();
	// const updateCharacter = CharacterActions.useUpdateNewCharacter();

	// const [selectedRace, setSelectedRace] =
	// 	useState<RaceType | undefined>(undefined);

	// useEffect(() => {
	// 	if (selectedRace) {
	// 		const newChar = newCharacter;

	// 		if (newChar) {
	// 			newChar.race = selectedRace;
	// 			updateCharacter(newChar);
	// 			history.push('/app/characters/new/classes');
	// 		}
	// 	}
	// }, [newCharacter, history, selectedRace, updateCharacter]);

	// if (!newCharacter || newCharacter.playerName.length < 1) {
	// 	return <Redirect to="/app/characters/new" />;
	// }

	return (
		<Animate duration={0.2} play {...animProps}></Animate>
		// 	<div className="px-5 mt-10 container w-full max-w-prose mx-auto">
		// 		<h3 className="text-lg mb-3 font-bold">Select a race</h3>
		// 		<hr />
		// 		<div className="races mt-8 text-black pb-5 mx-auto">
		// 			{newCharacter.race && (
		// 				<Race
		// 					individual={true}
		// 					keyVal={-1}
		// 					setSelectedRace={setSelectedRace}
		// 					selectedRace={selectedRace}
		// 					race={newCharacter.race}
		// 				/>
		// 			)}

		// 			{races.map((race, key) => (
		// 				<Race
		// 					key={key}
		// 					race={race}
		// 					keyVal={key}
		// 					setSelectedRace={setSelectedRace}
		// 					selectedRace={selectedRace}
		// 				/>
		// 			))}
		// 		</div>
		// 	</div>
	);
};

export default Races;

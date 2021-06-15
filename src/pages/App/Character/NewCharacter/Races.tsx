import { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Animate } from 'react-simple-animate';
import { races } from '../../../../corev2/core';
import { Race as RaceType } from '../../../../corev2/Race';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { animProps } from '../../../Onboarding/Login';
import Race from './Race';
import Select from 'react-select';

const raceOptions = Object.keys(races).map(race => ({
	value: races[race],
	label: races[race].name
}));

const Races = () => {
	const history = useHistory();
	const newCharacter = CharacterSelectors.useSelectNewCharacter();
	const updateCharacter = CharacterActions.useUpdateNewCharacter();
	const [play, setPlay] = useState(false);

	const [selectedRace, setSelectedRace] = useState<RaceType | undefined>(
		newCharacter?.race
	);

	useEffect(() => {
		if (!play) {
			setPlay(true);
		}

		if (selectedRace) {
			const newChar = newCharacter;

			if (newChar) {
				newChar.race = selectedRace;
				updateCharacter(newChar);
			}
		}
	}, [play, setPlay, selectedRace, newCharacter, updateCharacter]);

	if (!newCharacter || newCharacter.characterName.length < 1) {
		return <Redirect to="/app/characters/new" />;
	}

	return (
		<Animate duration={0.2} play={play} {...animProps}>
			<div className="px-4 pb-5 mt-5 container w-full max-w-prose mx-auto">
				<div className="bg-white p-3 text-black rounded-md">
					<h3 className="text-lg mb-3 font-light opacity-90">
						Race selection
					</h3>
					<p className="text-sm my-3 opacity-50 font-light leading-10">
						Your choice of character race provides you with a basic
						set of advantages and special abilities. If you’re a
						fighter, are you a stubborn dwarf monster-slayer, a
						graceful elf blademaster, or a fierce dragonborn
						gladiator? If you’re a wizard, are you a brave human
						spell-for-hire or a devious tiefling conjurer? Your
						character race not only affects your ability scores and
						powers but also provides the first cues for building
						your character’s story.
					</p>
					<hr className=" border-gray-300" />
					<div className="mt-8">
						{selectedRace && (
							<button
								onClick={() =>
									history.push('/app/characters/new/classes')
								}
								className="bg-red-500 w-full h-auto mb-4 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
							>
								Continue
							</button>
						)}
						<Select
							value={{
								label: selectedRace?.name,
								value: selectedRace
							}}
							isSearchable={false}
							options={raceOptions}
							onChange={e => {
								if (e) {
									const newChar = newCharacter;
									newChar.race = e.value;
									updateCharacter(newCharacter);
									setSelectedRace(e.value);
								}
							}}
						/>
					</div>
					<div className="mt-8">
						{!selectedRace && (
							<p className="text-center opacity-50">
								Select a race to see more information.
							</p>
						)}
						{selectedRace && <Race race={selectedRace} />}
					</div>
				</div>
			</div>
		</Animate>
	);
};

export default Races;

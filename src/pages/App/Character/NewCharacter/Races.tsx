import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Animate } from 'react-simple-animate';
import { races } from '../../../../corev2/core';
import { Race as RaceType } from '../../../../corev2/Race';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { animProps } from '../../../Onboarding/Login';
import Race from './Race';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/solid';

const raceOptions = Object.keys(races).map(race => ({
	value: races[race],
	label: races[race].name
}));

const Races = () => {
	const newCharacter = CharacterSelectors.useSelectNewCharacter();
	const updateCharacter = CharacterActions.useUpdateNewCharacter();
	const [play, setPlay] = useState(false);

	const [selectedRace, setSelectedRace] = useState<RaceType | undefined>(
		newCharacter?.race ?? races['halfelf']
	);

	const [raceOpen, setRaceOpen] = useState<RaceType | undefined>(undefined);

	useEffect(() => {
		if (!play) {
			setPlay(true);
		}
	}, [play, setPlay, selectedRace, newCharacter, updateCharacter]);

	if (!newCharacter || newCharacter.characterName.length < 1) {
		return <Redirect to="/app/characters/new" />;
	}

	return (
		<Animate duration={0.2} play={play} {...animProps}>
			<div className="mt-5 container w-full md:max-w-screen-lg mx-auto">
				<div className=" p-3 rounded-md text-white">
					<h3 className="text-lg mb-3 font-light opacity-90 text-center">
						Race selection
					</h3>
					<p className="text-sm my-3 opacity-50 font-light leading-10  text-center">
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

					{selectedRace && (
						<div className="rounded-md bg-gray-800 text-white p-3 shadow-xl mb-5 ">
							<div
								className="flex items-center justify-between cursor-pointer"
								onClick={() => {
									setRaceOpen(selectedRace);
								}}
							>
								<h4>{selectedRace.name}</h4>
								<div className="flex">
									<CheckCircleIcon className="w-5 h-5 text-green-400" />
									<ChevronRightIcon className="w-5 h-5" />
								</div>
							</div>

							{raceOpen === selectedRace && (
								<Race
									selectedRace={selectedRace}
									race={raceOpen}
									setRaceOpen={setRaceOpen}
									setSelectedRace={setSelectedRace}
								/>
							)}
						</div>
					)}
					<div className="mt-8">
						{raceOptions.map((race, key) => (
							<div
								className="rounded-md bg-gray-800 text-white p-3 shadow-xl mb-5 "
								key={key}
							>
								<div
									className="flex items-center justify-between cursor-pointer"
									onClick={() => {
										setRaceOpen(race.value);
									}}
								>
									<h4>{race.label}</h4>
									<div className="flex">
										{selectedRace === race.value && (
											<CheckCircleIcon className="w-5 h-5 text-green-400" />
										)}
										<ChevronRightIcon className="w-5 h-5" />
									</div>
								</div>

								{raceOpen === race.value && (
									<Race
										selectedRace={selectedRace}
										race={raceOpen}
										setRaceOpen={setRaceOpen}
										setSelectedRace={setSelectedRace}
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</Animate>
	);
};

export default Races;

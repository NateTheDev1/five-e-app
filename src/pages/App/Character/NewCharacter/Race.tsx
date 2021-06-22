import React, { useState } from 'react';
import Select, { OptionsType } from 'react-select';
import {
	LanguageConstants,
	Race as RaceType,
	StatConstants
} from '../../../../corev2/Race';
import RaceTrait from './RaceTraits';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';

import Dialog from '@material-ui/core/Dialog';
import { useHistory } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
import { Fab } from '@material-ui/core';
import { useEffect } from 'react';

const Race = ({
	race,
	setSelectedRace,
	setRaceOpen,
	selectedRace
}: {
	race: RaceType;
	setSelectedRace: any;
	selectedRace: RaceType | undefined;
	setRaceOpen: React.Dispatch<React.SetStateAction<RaceType | undefined>>;
}) => {
	const history = useHistory();

	const newCharacter = CharacterSelectors.useSelectNewCharacter();
	const updateCharacter = CharacterActions.useUpdateNewCharacter();

	const [stepComplete, setStepComplete] = useState(false);

	const [selectedLanguages, setSelectedLanguages] = useState<
		OptionsType<{
			label: any;
			value: any;
			disabled: boolean;
		}>
	>(
		newCharacter?.languages
			.filter(lang => !race.languages.includes(lang))
			.map(l => ({
				label: l,
				value: l,
				disabled: false
			})) ?? []
	);

	const [selectedBonuses, setSelectedBonuses] = useState<
		OptionsType<{
			label: any;
			value: any;
			disabled: boolean;
		}>
	>(
		newCharacter?.bonuses
			.filter(bon => !race.bonuses.find(b => b.stat === bon.stat))
			.map(bonus => ({
				label: bonus.stat,
				value: bonus,
				disabled: false
			})) ?? []
	);

	const extraLanguages =
		race.extraLanguage && !race.extraLanguage.all
			? race.extraLanguage.languages
					.filter(lang => !race.languages.includes(lang))
					.map(l => ({
						label: l,
						value: l,
						disabled: false
					}))
			: Object.keys(LanguageConstants)
					.filter(lang => !race.languages.includes(lang))
					.map(lang => ({
						label: lang,
						value: lang,
						disabled: false
					}));

	const extraBonuses =
		race.extraBonuses && !race.extraBonuses.all
			? race.extraBonuses.stats
					.filter(bon => !race.bonuses.find(b => b.stat === bon))
					.map(bon => ({
						label: bon,
						value: bon,
						disabled: false
					}))
			: Object.keys(StatConstants)
					.filter(bon =>
						race.bonuses.find(b => b.stat === bon) ? false : true
					)
					.map(bon => ({
						label: bon,
						value: bon,
						disabled: false
					}));

	useEffect(() => {
		let bonuses = false;
		let languages = false;
		// let profs = false;

		if (selectedBonuses.length === (race.extraBonuses?.choose ?? 0)) {
			bonuses = true;
		}

		if (selectedLanguages.length === (race.extraLanguage?.choose ?? 0)) {
			languages = true;
		}

		setStepComplete(bonuses === true && languages === true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedLanguages, selectedBonuses]);

	return (
		<Dialog
			fullScreen
			className="bg-bgmain h-full overflow-y-hidden"
			open={true}
			onClose={() => setRaceOpen(undefined)}
		>
			<div
				className="top flex  justify-between w-100 pb-8 bg-gray-800 h-12 items-center shadow-2xl p-4 text-white "
				style={{
					paddingTop:
						Capacitor.getPlatform() === 'ios' ? '60px' : '30px'
				}}
			>
				<h4
					className=" font-medium text-md text-red-500 uppercase leading-7"
					style={{ letterSpacing: '1rem' }}
				>
					{race.name}
				</h4>
				<svg
					onClick={() => {
						const newChar = newCharacter;

						if (newChar && selectedRace !== race) {
							setSelectedRace(undefined);
							newChar.race = undefined;

							newChar.bonuses = [];
							newChar.languages = [];

							updateCharacter(newChar);
						}

						setRaceOpen(undefined);
					}}
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 cursor-pointer"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</div>
			<div className=" p-4 bg-bgmain h-full overflow-scroll text-white flex flex-col">
				<p className="mt-2 leading-10 font-light sm:text-sm">
					{race.description}
				</p>
				<h5 className="font-semibold mt-5">Bonuses</h5>
				{race.bonuses.map((b, key) => (
					<p className="my-2 text-sm" key={key}>
						- {b.stat} +{b.amount}
					</p>
				))}
				{race.bonuses.length < 1 && (
					<p className="my-2 text-sm">None</p>
				)}
				<div className="mt-4">
					{race.extraBonuses && (
						<>
							<p className="mb-2 font-light">
								Select {race.extraBonuses?.choose} additional{' '}
								{race.extraBonuses.choose > 1
									? 'bonuses'
									: 'bonuse'}{' '}
								to increase by {race.extraBonuses.increase}
							</p>
							<Select
								closeMenuOnSelect={false}
								className="text-black"
								isSearchable={false}
								onChange={e => {
									if (e) {
										setSelectedBonuses(e);
									}
								}}
								value={selectedBonuses}
								options={extraBonuses}
								isMulti={true}
								isOptionDisabled={option =>
									(!selectedBonuses.includes(option) &&
										race.extraBonuses &&
										selectedBonuses.length ===
											race.extraBonuses.choose) ??
									false
								}
							/>
						</>
					)}
				</div>
				<h5 className="font-semibold mt-5">Languages</h5>
				{race.languages.map((l, key) => (
					<p className="my-2 text-sm" key={key}>
						- {l}
					</p>
				))}

				<div className="mt-4">
					{race.extraLanguage && (
						<>
							<p className="mb-2 font-light">
								Select {race.extraLanguage?.choose} additional{' '}
								{race.extraLanguage.choose > 1
									? 'languages'
									: 'language'}
							</p>
							<Select
								className="text-black"
								onChange={e => {
									if (e) {
										setSelectedLanguages(e);
									}
								}}
								isSearchable={false}
								value={selectedLanguages}
								options={extraLanguages}
								isMulti={true}
								isOptionDisabled={option =>
									(!selectedLanguages.includes(option) &&
										race.extraLanguage &&
										selectedLanguages.length ===
											race.extraLanguage.choose) ??
									false
								}
							/>
						</>
					)}
				</div>
				<h5 className="font-semibold mt-4 ">Traits</h5>
				<p className="mt-2 text-sm mb-2">{race.traitDescription}</p>
				{race.traits.map((trait, key) => (
					<RaceTrait trait={trait} key={key} />
				))}
				<div className="pb-12"></div>
			</div>
			<Fab
				disabled={!stepComplete}
				onClick={() => {
					const newChar = newCharacter;

					if (newChar) {
						setSelectedRace(undefined);
						newChar.race = undefined;

						setSelectedRace(race);
						newChar.race = race;

						newChar.languages = [
							...race.languages,
							...selectedLanguages.map(lang => lang.label)
						];

						if (race.abilityIncrease) {
							if (race.abilityIncrease.all) {
								newChar.bonuses = [
									...Object.keys(StatConstants).map(stat => ({
										amount: 1,
										stat: stat
									}))
								];
							}
						}

						newChar.bonuses = [...race.bonuses];

						if (race && race.extraBonuses !== undefined) {
							newChar.bonuses = [
								...race.bonuses,
								...selectedBonuses.map(bonus => ({
									amount: race.extraBonuses?.increase ?? 0,
									stat: bonus.label
								}))
							];
						}

						updateCharacter(newChar);

						window.scrollTo(0, 0);

						history.push('/app/characters/new/classes');
					}
				}}
				aria-label="Continue"
				style={{
					margin: '0 auto',
					top: 'auto',
					right: 50,
					bottom: 20,
					left: 50,
					position: 'fixed',
					color: 'white',
					background: '#EF4444',
					width: '75vw'
				}}
				classes={{ disabled: 'fab-disabled' }}
				variant="extended"
			>
				Continue
			</Fab>
		</Dialog>
	);
};

export default Race;

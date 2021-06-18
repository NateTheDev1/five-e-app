import { useState } from 'react';
import Select, { OptionsType } from 'react-select';
import {
	LanguageConstants,
	Race as RaceType,
	StatConstants
} from '../../../../corev2/Race';
import { animProps } from '../../../Onboarding/Login';
import RaceTrait from './RaceTraits';
import { Animate } from 'react-simple-animate';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { useEffect } from 'react';

const Race = ({ race }: { race: RaceType }) => {
	const newCharacter = CharacterSelectors.useSelectNewCharacter();
	const updateCharacter = CharacterActions.useUpdateNewCharacter();

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
		const newChar = newCharacter;

		if (newChar) {
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
		}
	}, [
		selectedBonuses,
		selectedLanguages,
		race,
		updateCharacter,
		newCharacter
	]);

	return (
		<Animate play {...animProps}>
			<div className="w-full mb-8 rounded-md bg-gray-200 text-whiteshadow-lg p-4 shadow-xl">
				<h4
					className="font-medium text-red-500 uppercase leading-10"
					style={{ letterSpacing: '1rem' }}
				>
					{race.name}
				</h4>
				<p className="mt-2 leading-10 font-light sm: text-sm">
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
				<div className="mt-5">
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

				<div className="mt-5">
					{race.extraLanguage && (
						<>
							<p className="mb-2 font-light">
								Select {race.extraLanguage?.choose} additional{' '}
								{race.extraLanguage.choose > 1
									? 'languages'
									: 'language'}
							</p>
							<Select
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
				<h5 className="font-semibold mt-5">Traits</h5>
				<p className="mt-2 mb-4 text-sm">{race.traitDescription}</p>
				{race.traits.map((trait, key) => (
					<RaceTrait trait={trait} key={key} />
				))}
			</div>
		</Animate>
	);
};

export default Race;

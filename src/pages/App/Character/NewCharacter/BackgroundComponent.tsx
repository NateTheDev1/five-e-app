import { useState } from 'react';
import { OptionsType } from 'react-select';
import { Animate } from 'react-simple-animate';
import { CharacterBackground } from '../../../../corev2/Backgrounds/CharacterBackgrounds';
import { animProps } from '../../../Onboarding/Login';
import Select from 'react-select';
import { SkillConstants } from '../../../../corev2/core';
import { useEffect } from 'react';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { CharacterActions } from '../../../../redux/Character/actions';

const BackgroundComponent = ({
	backgroundRef
}: {
	backgroundRef: CharacterBackground;
}) => {
	const newCharacter = CharacterSelectors.useSelectNewCharacter();
	const updateCharacter = CharacterActions.useUpdateNewCharacter();

	const [originalPros, setOriginalProfs] = useState<string[]>([]);
	const [selectedSkills, setSelectedSkills] = useState<
		OptionsType<{
			label: any;
			value: any;
		}>
	>([]);

	useEffect(() => {
		const newChar = newCharacter;

		if (newChar) {
			newChar.proficiencies = [
				...newChar.proficiencies,
				...selectedSkills.map(s => s.value)
			];

			updateCharacter(newChar);
		}
	}, [selectedSkills, newCharacter, updateCharacter]);

	useEffect(() => {
		if (originalPros.length < 1) {
			setOriginalProfs(newCharacter?.proficiencies ?? []);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [originalPros.length]);

	return (
		<Animate play {...animProps}>
			<div className="w-full mb-8 rounded-md bg-gray-200 text-whiteshadow-lg p-4 shadow-xl">
				<h4
					className="font-medium text-red-500 uppercase leading-10"
					style={{ letterSpacing: '1rem' }}
				>
					{backgroundRef.name}
				</h4>
				<p className="mt-2 leading-10 font-light sm: text-sm">
					{backgroundRef.description}
				</p>

				{backgroundRef.skillProficiencies &&
					backgroundRef.skillProficiencies.length > 0 && (
						<>
							<h5 className="font-semibold mt-5">
								Skill Proficiencies
							</h5>
							{backgroundRef.skillProficiencies.map((s, key) => (
								<p className="my-2 text-sm" key={key}>
									- {s}
								</p>
							))}
						</>
					)}
				{backgroundRef.skillProficiencyChoices && (
					<>
						<h5 className="font-semibold mt-5 mb-3">
							Choose Additional Skill Proficiencies
						</h5>
						{backgroundRef.skillProficiencyChoices.map((c, key) => (
							<Select
								value={selectedSkills || ''}
								isSearchable={false}
								onChange={e => {
									if (e) {
										setSelectedSkills(e);
									}
								}}
								options={
									c.choose.all
										? Object.values(SkillConstants)
												.filter(
													s =>
														!originalPros.includes(
															s
														)
												)
												.map(s => ({
													label: s,
													value: s
												}))
										: c.choose.from
												.filter(
													s =>
														!originalPros.includes(
															s
														)
												)
												.map(s => ({
													label: s,
													value: s
												}))
								}
								isMulti={true}
								isOptionDisabled={option =>
									!selectedSkills.includes(option) &&
									selectedSkills.length === c.choose.num
								}
							/>
						))}
					</>
				)}
				{backgroundRef.gamingChoices && (
					<>
						<h5 className="font-semibold mt-5 mb-3">
							Choose Gaming Set Proficiencies
						</h5>
						{backgroundRef.gamingChoices.map((g, key) => (
							<Select
								value={selectedSkills || ''}
								isSearchable={false}
								onChange={(e, eb) => {
									if (e) {
										if (newCharacter) {
											//@ts-ignore
											if (
												eb['action'] === 'remove-value'
											) {
												const index =
													newCharacter.proficiencies.indexOf(
														eb['removedValue'].value
													);
												if (index) {
													newCharacter.proficiencies.splice(
														index,
														1
													);
												}
											}
										}
										setSelectedSkills(e);
									}
								}}
								options={
									g.choose.all
										? Object.values(SkillConstants)
												.filter(
													g =>
														!originalPros.includes(
															g
														)
												)
												.map(g => ({
													label: g,
													value: g
												}))
										: g.choose.from
												.filter(
													g =>
														!originalPros.includes(
															g
														)
												)
												.map(g => ({
													label: g,
													value: g
												}))
								}
								isMulti={true}
								isOptionDisabled={option =>
									!selectedSkills.includes(option) &&
									selectedSkills.length === g.choose.num
								}
							/>
						))}
					</>
				)}
			</div>
		</Animate>
	);
};

export default BackgroundComponent;

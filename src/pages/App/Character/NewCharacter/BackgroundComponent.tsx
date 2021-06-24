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
import { LanguageConstants } from '../../../../corev2/Race';

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
	const [selectedLanguages, setSelectedLanguages] = useState<
		OptionsType<{
			label: any;
			value: any;
		}>
	>([]);

	const [selectedEquipment, setSelectedEquipment] = useState<
		OptionsType<{
			label: any;
			value: any;
		}>
	>([]);
	const [selectedTrait, setSelectedTrait] = useState<
		| {
				label: any;
				value: any;
		  }
		| undefined
	>({
		value: newCharacter?.personalityTraits,
		label: newCharacter?.personalityTraits
	});

	const [selectedFlaw, setSelectedFlaw] = useState<
		| {
				label: any;
				value: any;
		  }
		| undefined
	>({
		value: newCharacter?.flaws,
		label: newCharacter?.flaws
	});

	const [selectedBond, setSelectedBond] = useState<
		| {
				label: any;
				value: any;
		  }
		| undefined
	>({
		value: newCharacter?.bonds,
		label: newCharacter?.bonds
	});

	const [selectedIdeal, setSelectedIdeal] = useState<
		| {
				label: any;
				value: any;
		  }
		| undefined
	>({
		value: newCharacter?.ideals,
		label: newCharacter?.ideals
	});

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
			<div className="w-full mb-8 rounded-md  text-whiteshadow-lg p-4 shadow-xl">
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
								className="text-black"
								key={key}
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
								className="text-black"
								key={key}
								value={selectedSkills || ''}
								isSearchable={false}
								onChange={(e, eb) => {
									if (e) {
										if (newCharacter) {
											//@ts-ignore
											if (
												eb['action'] === 'remove-value'
											) {
												const index = newCharacter.proficiencies.indexOf(
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
				{backgroundRef.languagesChoices && (
					<>
						<h5 className="font-semibold mt-5 mb-3">
							Additional Languages
						</h5>
						{backgroundRef.languagesChoices.map((l, key) => (
							<Select
								className="text-black"
								key={key}
								value={selectedLanguages || ''}
								isSearchable={false}
								onChange={(e, eb) => {
									if (
										eb['action'] === 'select-option' &&
										newCharacter &&
										eb['option']
									) {
										newCharacter.languages = [
											...newCharacter.languages,
											eb['option'].value
										];
									}

									if (
										eb['action'] === 'remove-value' &&
										newCharacter
									) {
										newCharacter.languages = newCharacter.languages.filter(
											lang =>
												lang !==
												eb['removedValue'].value
										);
									}

									if (e) {
										setSelectedLanguages(e);
									}
								}}
								options={
									l.choose.all
										? Object.values(LanguageConstants)
												.filter(
													l =>
														!newCharacter?.languages.includes(
															l
														)
												)
												.map(l => ({
													label: l,
													value: l
												}))
										: l.choose.from
												.filter(
													s =>
														!newCharacter?.languages.includes(
															s
														)
												)
												.map(s => ({
													label: l,
													value: l
												}))
								}
								isMulti={true}
								isOptionDisabled={option =>
									!selectedLanguages.includes(option) &&
									selectedLanguages.length === l.choose.num
								}
							/>
						))}
					</>
				)}
				{backgroundRef.equipmentChoices && (
					<>
						<h5 className="font-semibold mt-5 mb-3">
							Additional Equipment
						</h5>
						{backgroundRef.equipmentChoices.map((eq, key) => (
							<Select
								className="text-black"
								key={key}
								value={selectedEquipment || ''}
								isSearchable={false}
								onChange={(e, eb) => {
									//@ts-ignore
									if (
										eb['action'] === 'remove-value' &&
										newCharacter
									) {
										newCharacter.inventory = newCharacter.inventory.filter(
											item =>
												item.name ===
												(eb['removedValue'] as any)
										);
									}

									if (
										eb['action'] === 'select-option' &&
										newCharacter
									) {
										newCharacter.inventory = [
											...newCharacter.inventory,
											{
												name: eb['option']?.value,
												quantity: 1
											}
										];
									}

									if (e) {
										setSelectedEquipment(e);
									}
								}}
								options={eq.choose.from
									.filter(
										eq =>
											!newCharacter?.inventory.find(
												item => item.name === eq
											)
									)
									.map(eq => ({
										label: eq,
										value: eq
									}))}
								isMulti={true}
								isOptionDisabled={option =>
									!selectedEquipment.includes(option) &&
									selectedEquipment.length === eq.choose.num
								}
							/>
						))}
					</>
				)}
				<h5 className="font-semibold mt-5 mb-3">Background Features</h5>
				{backgroundRef.backgroundFeatures.map((bf, key) => (
					<div className="mt-4" key={key}>
						<p className="my-2 text-sm font-medium text-red-500">
							{bf.title}
						</p>
						<p className="my-2 text-sm leading-8">
							{bf.description}
						</p>
					</div>
				))}
				<h5 className="font-semibold mt-5 mb-3">Traits</h5>
				<button
					className="bg-red-500 w-30 h-auto mb-4 hover:bg-red-500 text-white font-bold py-1 px-2 text-xs rounded"
					onClick={() => {
						if (newCharacter) {
							const num = Math.floor(Math.random() * 7);
							setSelectedTrait({
								value:
									backgroundRef.traitsSelection?.selections[
										num
									].text,
								label:
									backgroundRef.traitsSelection?.selections[
										num
									].text
							});
							newCharacter.personalityTraits =
								backgroundRef.traitsSelection?.selections[num]
									.text ?? '';
						}
					}}
				>
					Random Roll
				</button>
				<Select
					className="text-black"
					isSearchable={false}
					value={[selectedTrait] ?? ''}
					isMulti={false}
					options={[
						...backgroundRef.traitsSelection!.selections.map(s => ({
							value: s.text,
							label: s.text
						}))
					]}
					onChange={e => {
						if (e) {
							setSelectedTrait(e as any);
						}
						if (newCharacter) {
							newCharacter.personalityTraits = e?.value ?? '';

							updateCharacter(newCharacter);
						}
					}}
				/>
				<h5 className="font-semibold mt-5 mb-3">Flaws</h5>
				<button
					className="bg-red-500 w-30 h-auto mb-4 hover:bg-red-500 text-white font-bold py-1 px-2 text-xs rounded"
					onClick={() => {
						if (newCharacter) {
							const num = Math.floor(Math.random() * 5);
							setSelectedFlaw({
								value:
									backgroundRef.flawsSelection?.selections[
										num
									].text,
								label:
									backgroundRef.flawsSelection?.selections[
										num
									].text
							});
							newCharacter.flaws =
								backgroundRef.flawsSelection?.selections[num]
									.text ?? '';
						}
					}}
				>
					Random Roll
				</button>
				<Select
					className="text-black"
					isSearchable={false}
					value={[selectedFlaw] ?? ''}
					isMulti={false}
					options={[
						...backgroundRef.flawsSelection!.selections.map(s => ({
							value: s.text,
							label: s.text
						}))
					]}
					onChange={e => {
						if (e) {
							setSelectedFlaw(e as any);
						}
						if (newCharacter) {
							newCharacter.flaws = e?.value ?? '';

							updateCharacter(newCharacter);
						}
					}}
				/>
				<h5 className="font-semibold mt-5 mb-3">Bonds</h5>
				<button
					className="bg-red-500 w-30 h-auto mb-4 hover:bg-red-500 text-white font-bold py-1 px-2 text-xs rounded"
					onClick={() => {
						if (newCharacter) {
							const num = Math.floor(Math.random() * 5);
							setSelectedBond({
								value:
									backgroundRef.bondsSelection?.selections[
										num
									].text,
								label:
									backgroundRef.bondsSelection?.selections[
										num
									].text
							});
							newCharacter.flaws =
								backgroundRef.bondsSelection?.selections[num]
									.text ?? '';
						}
					}}
				>
					Random Roll
				</button>
				<Select
					className="text-black"
					isSearchable={false}
					value={[selectedBond] ?? ''}
					isMulti={false}
					options={[
						...backgroundRef.bondsSelection!.selections.map(s => ({
							value: s.text,
							label: s.text
						}))
					]}
					onChange={e => {
						if (e) {
							setSelectedBond(e as any);
						}
						if (newCharacter) {
							newCharacter.bonds = e?.value ?? '';

							updateCharacter(newCharacter);
						}
					}}
				/>
				<h5 className="font-semibold mt-5 mb-3">Ideals</h5>
				<button
					className="bg-red-500 w-30 h-auto mb-4 hover:bg-red-500 text-white font-bold py-1 px-2 text-xs rounded"
					onClick={() => {
						if (newCharacter) {
							const num = Math.floor(Math.random() * 5);
							setSelectedIdeal({
								value:
									backgroundRef.idealsSelection?.selections[
										num
									].text,
								label:
									backgroundRef.idealsSelection?.selections[
										num
									].text
							});
							newCharacter.flaws =
								backgroundRef.idealsSelection?.selections[num]
									.text ?? '';
						}
					}}
				>
					Random Roll
				</button>
				<Select
					className="text-black"
					isSearchable={false}
					value={[selectedIdeal] ?? ''}
					isMulti={false}
					options={[
						...backgroundRef.idealsSelection!.selections.map(s => ({
							value: s.text,
							label: s.text
						}))
					]}
					onChange={e => {
						if (e) {
							setSelectedIdeal(e as any);
						}
						if (newCharacter) {
							newCharacter.ideals = e?.value ?? '';

							updateCharacter(newCharacter);
						}
					}}
				/>
			</div>
		</Animate>
	);
};

export default BackgroundComponent;

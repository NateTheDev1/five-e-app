import { useState } from 'react';
import { OptionsType } from 'react-select';
import Select from 'react-select';
import { Animate } from 'react-simple-animate';
import { CharacterClass } from '../../../../corev2/CharacterClasses/CharacterClass';
import { instruments, SkillConstants } from '../../../../corev2/core';
import { animProps } from '../../../Onboarding/Login';
import { useEffect } from 'react';

export const ClassView = ({ classRef }: { classRef: CharacterClass }) => {
	const [selectedSkills, setSelectedSkills] = useState<
		OptionsType<{
			label: any;
			value: any;
		}>
	>([]);

	const [selectedProfs, setSelectedProfs] = useState<{
		[key: number]: OptionsType<{
			label: any;
			value: any;
		}>;
	}>({});

	const [selectedInstruments, setSelectedInstruments] = useState<
		OptionsType<{
			label: any;
			value: any;
		}>
	>([]);

	const proficiencyOptions = classRef.proficiencies
		.map(p => {
			if (p.choose) {
				return p;
			} else return null;
		})
		.filter(cls => cls !== null);

	const equipmentOptions = classRef.equipmentChoices
		?.map(eq => {
			if (eq.choose) {
				return eq;
			} else return null;
		})
		.filter(cls => cls !== null);

	console.log(selectedProfs);

	useEffect(() => {
		setSelectedInstruments([]);
		setSelectedProfs([]);
		setSelectedSkills([]);
	}, [classRef]);

	return (
		<Animate play {...animProps}>
			<div className="w-full mb-8 rounded-md bg-gray-200 text-whiteshadow-lg p-4 shadow-xl">
				<h4
					className="font-medium text-red-500 uppercase leading-10"
					style={{ letterSpacing: '1rem' }}
				>
					{classRef.name}
				</h4>
				<p className="mt-2 leading-10 font-light sm: text-sm">
					{classRef.description}
				</p>
				<h5 className="font-semibold mt-5">Hit Die</h5>
				<p className="my-2 text-sm">
					{classRef.hitDie.amount}d{classRef.hitDie.sides}
				</p>
				<h5 className="font-semibold mt-5">Hit Points At Level One</h5>
				<p className="my-2 text-sm">
					{classRef.hitPoints.levelOne.base} +{' '}
					{classRef.hitPoints.levelOne.modifierKey} modifier
				</p>
				<h5 className="font-semibold mt-5">
					Hit Points At Higher Levels
				</h5>
				<p className="my-2 text-sm">
					{classRef.hitDie.amount}d{classRef.hitDie.sides} (
					{classRef.hitPoints.higherLevels.base} average) +{' '}
					{classRef.hitPoints.higherLevels.modifierKey} modifier
				</p>
				<h5 className="font-semibold mt-5">
					Hit Points At Higher Levels
				</h5>
				<p className="my-2 text-sm">
					{classRef.hitDie.amount}d{classRef.hitDie.sides} (
					{classRef.hitPoints.higherLevels.base} average) +{' '}
					{classRef.hitPoints.higherLevels.modifierKey} modifier
				</p>
				<h5 className="font-semibold mt-5">Primary Abilities</h5>
				<p className="my-2 text-sm">{classRef.primaryAbility}</p>
				<h5 className="font-semibold mt-5">Saving Throws</h5>
				{classRef.saves.map((s, key) => (
					<p className="my-2 text-sm" key={key}>
						- {s}
					</p>
				))}
				<h5 className="font-semibold mt-5">Proficiencies</h5>
				{proficiencyOptions.map((p, key) => (
					<div className="mt-5" key={key}>
						{p?.skills && (
							<>
								<p className="mb-2 font-light">{p?.title}</p>
								<Select
									isSearchable={false}
									onChange={e => {
										if (e) {
											setSelectedSkills(e);
										}
									}}
									value={selectedSkills}
									options={
										!p.choose?.all
											? p.choose?.from.map(el => ({
													label: el,
													value: el
											  }))
											: Object.values(SkillConstants).map(
													el => ({
														label: el,
														value: el
													})
											  )
									}
									isMulti={true}
									isOptionDisabled={option =>
										!selectedSkills.includes(option) &&
										selectedSkills.length ===
											(p.choose ? p.choose.num : 0)
									}
								/>
							</>
						)}
						{p?.type === 'instruments' && (
							<>
								<p className="mb-2 font-light">{p?.title}</p>
								<Select
									isSearchable={false}
									onChange={e => {
										if (e) {
											setSelectedInstruments(e);
										}
									}}
									value={selectedInstruments}
									options={
										!p?.choose?.all
											? p?.choose?.from.map(el => ({
													label: el,
													value: el
											  }))
											: Object.values(instruments).map(
													el => ({
														label: el,
														value: el
													})
											  )
									}
									isMulti={true}
									isOptionDisabled={option =>
										!selectedInstruments.includes(option) &&
										selectedInstruments.length ===
											(p?.choose ? p?.choose.num : 0)
									}
								/>
							</>
						)}
					</div>
				))}

				<h5 className="font-semibold mt-5">Equipment</h5>
				{classRef.equipmentChoices
					?.filter(eq => !eq.choose)
					.map((eq, key) => (
						<p key={key}>
							- {eq.title} ({eq.quantity})
						</p>
					))}

				<h5 className="font-semibold mt-5">Equipment Options</h5>

				{equipmentOptions?.map((eq, key) => (
					<div key={key} className="mt-5">
						<p className="mb-2 font-light">{eq?.title}</p>
						<Select
							isSearchable={false}
							options={eq?.choose?.from.map((el, key) => ({
								label: key === 0 ? 'a' : key === 1 ? 'b' : 'c',
								value: el
							}))}
							onChange={e => {
								if (e) {
									//@ts-ignore
									setSelectedProfs({
										...selectedProfs,
										[key]: e
									});
								}
							}}
							value={selectedProfs[key]}
						/>
					</div>
				))}

				{classRef.languages.length > 0 && (
					<>
						<h5 className="font-semibold mt-5">Languages</h5>
						{classRef.languages.map((lang, key) => (
							<p key={key}>- {lang}</p>
						))}
					</>
				)}
			</div>
		</Animate>
	);
};

export default ClassView;

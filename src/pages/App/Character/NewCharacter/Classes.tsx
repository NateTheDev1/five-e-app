import { useEffect } from 'react';
import { useState } from 'react';
import { Animate } from 'react-simple-animate';
import { CharacterClass } from '../../../../corev2/CharacterClasses/CharacterClass';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { animProps } from '../../../Onboarding/Login';
import { Redirect, useHistory } from 'react-router';
import { classes } from '../../../../corev2/core';
import ClassView from './ClassView';
import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/solid';

const classOptions = Object.keys(classes).map(cls => ({
	value: classes[cls],
	label: classes[cls].name
}));

const Classes = () => {
	const history = useHistory();
	const [play, setPlay] = useState(false);

	const newCharacter = CharacterSelectors.useSelectNewCharacter();
	const updateCharacter = CharacterActions.useUpdateNewCharacter();

	const [selectedClass, setSelectedClass] = useState<
		CharacterClass | undefined
	>(newCharacter?.class ?? classes['fighter']);

	const [classOpen, setClassOpen] = useState<CharacterClass | undefined>(
		undefined
	);

	useEffect(() => {
		if (!play) {
			setPlay(true);
		}

		if (selectedClass) {
			const newChar = newCharacter;

			if (newChar) {
				newChar.class = selectedClass;
				updateCharacter(newChar);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [play, setPlay]);

	if (!newCharacter || newCharacter.characterName.length < 1) {
		return <Redirect to="/app/characters/new" />;
	}

	return (
		<Animate duration={0.2} play={play} {...animProps}>
			<div
				className=" mt-5 container w-full md:max-w-screen-lg mx-auto"
				style={{ marginTop: '15px' }}
			>
				<div className=" p-3 text-white rounded-md mt-4">
					<h3 className="text-lg mb-3 font-light opacity-90 text-center">
						Class selection
					</h3>
					<p className="text-sm my-3 opacity-50 font-light leading-10 text-center">
						Your class is the primary definition of what your
						character can do in the extraordinary magical landscape
						of Dungeons & Dragons. A class is more than a
						profession; it is your character’s calling.
					</p>
					<div className="mt-8">
						{/* {selectedClass && (
							<button
								onClick={() => {
									if (
										selectedClass &&
										selectedClass.equipmentChoices
									) {
										const newChar = newCharacter;
										newChar.inventory = [
											...newCharacter.inventory,
											...selectedClass.equipmentChoices
												.filter(eq => !eq.choose)
												.map((item: any) => ({
													name: item.title,
													quantity: item.quantity
												}))
										];
										updateCharacter(newChar);
									}

									window.scrollTo(0, 0);

									history.push(
										'/app/characters/new/background'
									);
								}}
								className="bg-red-500 w-full h-auto mb-4 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
							>
								Continue
							</button>
						)} */}
						{/* <Select
							value={{
								label: selectedClass?.name,
								value: selectedClass
							}}
							isSearchable={false}
							options={classOptions}
							onChange={e => {
								if (e) {
									const newChar = newCharacter;
									newChar.class = e.value;
									updateCharacter(newCharacter);
									setSelectedClass(e.value);
								}
							}}
						/> */}
					</div>
					{selectedClass && (
						<div className="rounded-md bg-gray-800 text-white p-3 shadow-xl mb-5 mt-4 ">
							<div
								className="flex items-center justify-between cursor-pointer"
								onClick={() => {
									setClassOpen(selectedClass);
								}}
							>
								<h4>{selectedClass.name}</h4>
								<div className="flex">
									<CheckCircleIcon className="w-5 h-5 text-green-400" />
									<ChevronRightIcon className="w-5 h-5" />
								</div>
							</div>

							{classOpen === selectedClass && (
								<ClassView
									selectedClass={selectedClass}
									classRef={classOpen}
									setClassOpen={setClassOpen}
									setSelectedClass={setSelectedClass}
								/>
							)}
						</div>
					)}
					{selectedClass && <hr className="mt-8" />}

					<div className="mt-8">
						{classOptions.map((cls, key) => (
							<div
								className="rounded-md bg-gray-800 text-white p-3 shadow-xl mb-5 "
								key={key}
							>
								<div
									className="flex items-center justify-between cursor-pointer"
									onClick={() => {
										setClassOpen(cls.value);
									}}
								>
									<h4>{cls.label}</h4>
									<div className="flex">
										{selectedClass?.name ===
											cls.value.name && (
											<CheckCircleIcon className="w-5 h-5 text-green-400" />
										)}
										<ChevronRightIcon className="w-5 h-5" />
									</div>
								</div>

								{classOpen === cls.value && (
									<ClassView
										selectedClass={selectedClass}
										classRef={classOpen}
										setClassOpen={setClassOpen}
										setSelectedClass={setSelectedClass}
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

export default Classes;

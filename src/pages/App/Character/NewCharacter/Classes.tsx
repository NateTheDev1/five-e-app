// import { useEffect, useState } from 'react';
// import { Redirect, useHistory } from 'react-router';
// import phb from '../../../../core/phb';
// import { Class as ClassType } from '../../../../core/types';
// import { CharacterActions } from '../../../../redux/Character/actions';
// import { CharacterSelectors } from '../../../../redux/Character/selectors';
// import { animProps } from '../../../Onboarding/Login';
// import ClassView from './ClassView';

import { useEffect } from 'react';
import { useState } from 'react';
import { Animate } from 'react-simple-animate';
import { CharacterClass } from '../../../../corev2/CharacterClasses/CharacterClass';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { animProps } from '../../../Onboarding/Login';
import { Redirect, useHistory } from 'react-router';
import { classes } from '../../../../corev2/core';
import Select from 'react-select';
import ClassView from './ClassView';

// const Classes = () => {
// 	// const history = useHistory();
// 	// const newCharacter = CharacterSelectors.useSelectNewCharacter();
// 	// const updateCharacter = CharacterActions.useUpdateNewCharacter();

// 	// const [selectedClass, setSelectedClass] =
// 	// 	useState<ClassType | undefined>(undefined);

// 	// useEffect(() => {
// 	// 	if (selectedClass) {
// 	// 		const newChar = newCharacter;

// 	// 		if (newChar) {
// 	// 			newChar.c = selectedClass;
// 	// 			updateCharacter(newChar);
// 	// 			history.push('/app/characters/new/stats');
// 	// 		}
// 	// 	}
// 	// }, [newCharacter, history, selectedClass, updateCharacter]);

// 	// if (!newCharacter || newCharacter.playerName.length < 1) {
// 	// 	return <Redirect to="/app/characters/new" />;
// 	// }

// 	return (
// 		<Animate duration={0.2} play {...animProps}>
// 			{/* <div className="px-5 mt-10 container w-full max-w-prose mx-auto">
// 				<h3 className="text-lg mb-3 font-bold">Select a class</h3>
// 				<hr />
// 				<div className="classes mt-8 text-black pb-5 mx-auto">
// 					{newCharacter.class && (
// 						<ClassView
// 							keyVal={-1}
// 							individual={true}
// 							classRef={newCharacter.class}
// 							setSelectedClass={setSelectedClass}
// 							selectedCLass={selectedClass}
// 						/>
// 					)}
// 					{phb.classes.map((cls, key) => (
// 						<ClassView
// 							keyVal={key}
// 							key={key}
// 							classRef={cls}
// 							setSelectedClass={setSelectedClass}
// 							selectedCLass={selectedClass}
// 						/>
// 					))}
// 				</div>
// 			</div> */}
// 		</Animate>
// 	);
// };

// export default Classes;

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
	>(newCharacter?.class);

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
	}, [play, setPlay]);

	if (!newCharacter || newCharacter.characterName.length < 1) {
		return <Redirect to="/app/characters/new" />;
	}

	return (
		<Animate duration={0.2} play={play} {...animProps}>
			<div className="px-4 pb-5 mt-5 container w-full max-w-prose mx-auto">
				<div className="bg-white p-3 text-black rounded-md">
					<h3 className="text-lg mb-3 font-light opacity-90">
						Class selection
					</h3>
					<p className="text-sm my-3 opacity-50 font-light leading-10">
						Your class is the primary definition of what your
						character can do in the extraordinary magical landscape
						of Dungeons & Dragons. A class is more than a
						profession; it is your character’s calling.
					</p>
					<hr className=" border-gray-300" />
					<div className="mt-8">
						{selectedClass && (
							<button
								onClick={() =>
									history.push(
										'/app/characters/new/background'
									)
								}
								className="bg-red-500 w-full h-auto mb-4 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
							>
								Continue
							</button>
						)}
						<Select
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
						/>
					</div>
					<div className="mt-8">
						{!selectedClass && (
							<p className="text-center opacity-50">
								Select a class to see more information.
							</p>
						)}
						{selectedClass && (
							<ClassView classRef={selectedClass} />
						)}
					</div>
				</div>
			</div>
		</Animate>
	);
};

export default Classes;

import { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Animate } from 'react-simple-animate';
import phb from '../../../../core/phb';
import { Class as ClassType } from '../../../../core/types';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { animProps } from '../../../Onboarding/Login';
import ClassView from './ClassView';

const Classes = () => {
	const history = useHistory();
	const newCharacter = CharacterSelectors.useSelectNewCharacter();
	const updateCharacter = CharacterActions.useUpdateNewCharacter();

	const [selectedClass, setSelectedClass] =
		useState<ClassType | undefined>(undefined);

	useEffect(() => {
		newCharacter?.serialize();
		if (selectedClass) {
			const newChar = newCharacter;

			if (newChar) {
				newChar.class = selectedClass;
				updateCharacter(newChar);
				history.push('/app/characters/new/stats');
			}
		}
	}, [newCharacter, history, selectedClass, updateCharacter]);

	if (!newCharacter || newCharacter.playerName.length < 1) {
		return <Redirect to="/app/characters/new" />;
	}

	return (
		<Animate duration={0.2} play {...animProps}>
			<div className="px-5 mt-10 container w-full max-w-prose mx-auto">
				<h3 className="text-lg mb-3 font-bold">Select a class</h3>
				<hr />
				<div className="classes mt-8 text-black pb-5 mx-auto">
					{newCharacter.class && (
						<ClassView
							keyVal={-1}
							individual={true}
							classRef={newCharacter.class}
							setSelectedClass={setSelectedClass}
							selectedCLass={selectedClass}
						/>
					)}
					{phb.classes.map((cls, key) => (
						<ClassView
							keyVal={key}
							key={key}
							classRef={cls}
							setSelectedClass={setSelectedClass}
							selectedCLass={selectedClass}
						/>
					))}
				</div>
			</div>
		</Animate>
	);
};

export default Classes;

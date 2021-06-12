import { Redirect } from 'react-router';
import { Animate } from 'react-simple-animate';
import { animProps } from '../../../Onboarding/Login';

import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import phb from '../../../../core/phb';
import { useState } from 'react';

const Finish = () => {
	const newCharacter = CharacterSelectors.useSelectNewCharacter();
	const updateCharacter = CharacterActions.useUpdateNewCharacter();

	const [selectedBackground, setSelectedBackground] = useState('Charlatan');

	if (!newCharacter || newCharacter.playerName.length < 1) {
		return <Redirect to="/app/characters/new" />;
	}

	const onBGChange = (val: string) => {
		setSelectedBackground(val);
	};

	return (
		<Animate duration={0.2} play {...animProps}>
			<div className="px-5 mt-10 container w-full max-w-prose mx-auto">
				<h3 className="text-lg mb-3 font-bold">Finish Up</h3>
				<hr />
				<h3 className="mt-8 text-lg font-bold">Background</h3>
				<select
					className="w-full mt-4 p-2 rounded-md text-black"
					value={selectedBackground}
					onChange={e => onBGChange(e.target.value)}
				>
					{phb.backgrounds.map((bg, key) => (
						<option key={key} value={bg.text}>
							{bg.text}
						</option>
					))}
				</select>
			</div>
		</Animate>
	);
};

export default Finish;

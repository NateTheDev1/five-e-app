import { useState } from 'react';
import { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Select from 'react-select';
import { Animate } from 'react-simple-animate';
import { CharacterBackground } from '../../../../corev2/Backgrounds/CharacterBackgrounds';
import { backgrounds } from '../../../../corev2/core';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { animProps } from '../../../Onboarding/Login';
import BackgroundComponent from './BackgroundComponent';

const backgroundOptions = Object.keys(backgrounds).map(bg => ({
	value: backgrounds[bg],
	label: backgrounds[bg].name
}));

const BackgroundView = () => {
	const history = useHistory();
	const [play, setPlay] = useState(false);

	const newCharacter = CharacterSelectors.useSelectNewCharacter();
	const updateCharacter = CharacterActions.useUpdateNewCharacter();

	const [selectedBackground, setSelectedBackground] = useState<
		CharacterBackground | undefined
	>(newCharacter?.background);

	useEffect(() => {
		if (!play) {
			setPlay(true);
		}

		if (selectedBackground) {
			const newChar = newCharacter;

			if (newChar) {
				newChar.background = selectedBackground;
				updateCharacter(newChar);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setPlay, play]);

	if (!newCharacter || newCharacter.characterName.length < 1) {
		return <Redirect to="/app/characters/new" />;
	}

	return (
		<Animate duration={0.2} play={play} {...animProps}>
			<div className=" mt-5 container w-full max-w-prose mx-auto">
				<div className="bg-white p-3 text-black rounded-md">
					<h3 className="text-lg mb-3 font-light opacity-90">
						Background selection and other character details
					</h3>
					<p className="text-sm my-3 opacity-50 font-light leading-10">
						Every story has a beginning. Your character’s background
						reveals where you came from, how you became an
						adventurer, and your place in the world. Choosing a
						background provides you with important story cues about
						your character’s identity. The most important question
						to ask about your background is what changed? Why did
						you stop doing whatever your background describes and
						start adventuring? Where did you get the money to
						purchase your starting gear, or, if you come from a
						wealthy background, why don’t you have more money? How
						did you learn the skills of your class? What sets you
						apart from ordinary people who share your background?
					</p>
					<hr className=" border-gray-300" />
					<div className="mt-8">
						{selectedBackground && (
							<button
								onClick={() => {
									history.push(
										'/app/characters/new/background'
									);
								}}
								className="bg-red-500 w-full h-auto mb-4 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
							>
								Continue
							</button>
						)}
						<Select
							value={{
								label: selectedBackground?.name,
								value: selectedBackground
							}}
							isSearchable={false}
							options={backgroundOptions}
							onChange={e => {
								if (e) {
									const newChar = newCharacter;
									newChar.background = e.value;
									updateCharacter(newCharacter);
									setSelectedBackground(e.value);
								}
							}}
						/>
					</div>
					<div className="mt-8">
						{!selectedBackground && (
							<p className="text-center opacity-50">
								Select a background to see more information.
							</p>
						)}
						{selectedBackground && (
							<BackgroundComponent
								backgroundRef={selectedBackground}
							/>
						)}
					</div>
				</div>
			</div>
		</Animate>
	);
};

export default BackgroundView;

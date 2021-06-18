import { lazy, useState } from 'react';
import { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Select from 'react-select';
import { Animate } from 'react-simple-animate';
import { CharacterBackground } from '../../../../corev2/Backgrounds/CharacterBackgrounds';
import { alignments, backgrounds, lifestyles } from '../../../../corev2/core';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { animProps } from '../../../Onboarding/Login';

const BackgroundComponent = lazy(() => import('./BackgroundComponent'));

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

	const [generalInfo, setGeneralInfo] = useState({
		eyes: newCharacter?.eyes ?? '',
		skin: newCharacter?.skin ?? '',
		hair: newCharacter?.hair ?? '',
		backstory: newCharacter?.backstory ?? '',
		height: newCharacter?.height ?? '',
		weight: newCharacter?.weight ?? '',
		age: newCharacter?.age ?? '',
		alignment: newCharacter?.alignment,
		faith: newCharacter?.faith ?? '',
		lifestyle: newCharacter?.lifestyle
	});

	const onChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });

		if (newCharacter) {
			//@ts-ignore
			newCharacter[e.target.name] = e.target.value;

			updateCharacter(newCharacter);
		}
	};

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
			<div className=" mt-5 container w-full md:max-w-screen-lg mx-auto">
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
						start adventuring?
					</p>
					<hr className=" border-gray-300" />
					<div className="mt-8">
						{selectedBackground && (
							<button
								onClick={() => {
									history.push('/app/characters/new/stats');
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
					<div className="w-full mb-8 rounded-md bg-gray-200 text-whiteshadow-lg p-4 shadow-xl">
						<div className="mb-8">
							<label
								className="block mt-5 text-black text-sm font-bold mb-4"
								htmlFor="alignment"
							>
								Alignment
							</label>
							<Select
								isSearchable={false}
								name="alignment"
								onChange={ev => {
									onChange({
										target: {
											name: 'alignment',
											value: ev!.value
										}
									} as any);
								}}
								options={[
									...alignments.map(al => ({
										value: al,
										label: al.title
									}))
								]}
							/>
							{newCharacter.alignment &&
								newCharacter.alignment.title !== 'None' && (
									<p className="text-sm mt-5 text-center opacity-60 leading-8">
										{newCharacter.alignment?.description}
									</p>
								)}
						</div>
						<div className="mb-8">
							<label
								className="block mt-5 text-black text-sm font-bold mb-4"
								htmlFor="lifestyle"
							>
								Lifestyle
							</label>
							<Select
								isSearchable={false}
								name="lifestyle"
								onChange={ev => {
									onChange({
										target: {
											name: 'lifestyle',
											value: ev!.value
										}
									} as any);
								}}
								options={[
									...lifestyles.map(al => ({
										value: al,
										label: al.title
									}))
								]}
							/>
							{newCharacter.lifestyle &&
								newCharacter.lifestyle.title !== 'None' && (
									<p className="text-sm mt-5 text-center opacity-60 leading-8">
										{newCharacter.lifestyle?.description}
									</p>
								)}
						</div>
						<div className="mb-8">
							<label
								className="block mt-5 text-black text-sm font-bold mb-2"
								htmlFor="faith"
							>
								Faith
							</label>

							<input
								onChange={onChange}
								value={generalInfo.faith}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="faith"
								type="text"
								autoComplete="faith"
								name="faith"
								placeholder="Azuth, god of wizards"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block mt-5 text-black text-sm font-bold mb-4"
								htmlFor="backstory"
							>
								Backstory
							</label>

							<textarea
								onChange={onChange}
								value={generalInfo.backstory}
								className="shadow appearance-none border resize-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="backstory"
								cols={2}
								rows={8}
								maxLength={500}
								autoComplete="backstory"
								name="backstory"
								placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie iaculis eros iaculis auctor."
							/>
						</div>
						<div className="mb-8 w-full flex justify-between items-center">
							<div className="left w-2/5">
								<label
									className="block mt-5 text-black text-sm font-bold mb-4"
									htmlFor="height"
								>
									Height
								</label>
								<input
									onChange={onChange}
									value={generalInfo.height}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="height"
									type="text"
									autoComplete="height"
									name="height"
									placeholder="6'1"
								/>
							</div>
							<div className="left w-2/5">
								<label
									className="block mt-5 text-black text-sm font-bold mb-4"
									htmlFor="weight"
								>
									Weight (lbs)
								</label>
								<input
									onChange={onChange}
									value={generalInfo.weight}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="weight"
									type="text"
									autoComplete="weight"
									name="weight"
									placeholder="170"
								/>
							</div>
						</div>
						<div className="mb-8 w-full flex justify-between items-center">
							<div className="left w-2/5">
								<label
									className="block mt-5 text-black text-sm font-bold mb-4"
									htmlFor="eyes"
								>
									Eye Color
								</label>
								<input
									onChange={onChange}
									value={generalInfo.eyes}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="eyes"
									type="text"
									autoComplete="eyes"
									name="eyes"
									placeholder="Blue"
								/>
							</div>
							<div className="left w-2/5">
								<label
									className="block mt-5 text-black text-sm font-bold mb-4"
									htmlFor="hair"
								>
									Hair Color
								</label>
								<input
									onChange={onChange}
									value={generalInfo.hair}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="hair"
									type="text"
									autoComplete="hair"
									name="hair"
									placeholder="Black"
								/>
							</div>
						</div>
						<div className="mb-8 w-full flex justify-between items-center">
							<div className="left w-2/5">
								<label
									className="block mt-5 text-black text-sm font-bold mb-4"
									htmlFor="skin"
								>
									Skin Color
								</label>
								<input
									onChange={onChange}
									value={generalInfo.skin}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="skin"
									type="text"
									autoComplete="skin"
									name="skin"
									placeholder="Brown"
								/>
							</div>
							<div className="left w-2/5">
								<label
									className="block mt-5 text-black text-sm font-bold mb-4"
									htmlFor="age"
								>
									Age
								</label>
								<input
									onChange={onChange}
									value={generalInfo.age}
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="age"
									type="text"
									autoComplete="age"
									name="age"
									placeholder="20"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Animate>
	);
};

export default BackgroundView;

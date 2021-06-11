import { useState } from 'react';
import faker from 'faker';
import { Animate } from 'react-simple-animate';
import { animProps } from '../../../Onboarding/Login';
import { CharacterActions } from '../../../../redux/Character/actions';
import DndCharacter from '../../../../core/dndcharacter';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { useHistory } from 'react-router';

const GeneralInfo = () => {
	const newCharacterRef = CharacterSelectors.useSelectNewCharacter();

	const history = useHistory();

	const [generalInfo, setGeneralInfo] = useState({
		playerName: newCharacterRef?.playerName ?? '',
		characterName: newCharacterRef?.characterName ?? '',
		backstory: newCharacterRef?.backstory ?? '',
		height: newCharacterRef?.height ?? '',
		weight: newCharacterRef?.weight ?? '',
		appearance: newCharacterRef?.appearance ?? '',
		eyes: newCharacterRef?.eyes ?? '',
		skin: newCharacterRef?.skin ?? '',
		hair: newCharacterRef?.skin ?? '',
		age: newCharacterRef?.age ?? '',
		factionLogo: newCharacterRef?.factionLogo ?? ''
	});

	const updateNewCharacter = CharacterActions.useUpdateNewCharacter();

	const generateRandomName = () => {
		setGeneralInfo({
			...generalInfo,
			characterName: faker.name.firstName() + ' ' + faker.name.lastName()
		});
	};

	const onChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newCharacter = new DndCharacter();

		newCharacter.playerName = generalInfo.playerName;
		newCharacter.characterName = generalInfo.characterName;
		newCharacter.backstory = generalInfo.backstory;
		newCharacter.height = generalInfo.height;
		newCharacter.weight = generalInfo.weight;
		newCharacter.appearance = generalInfo.appearance;
		newCharacter.eyes = generalInfo.eyes;
		newCharacter.skin = generalInfo.skin;
		newCharacter.hair = generalInfo.hair;
		newCharacter.factionLogo = generalInfo.factionLogo;
		newCharacter.age = generalInfo.age;

		updateNewCharacter(newCharacter);

		history.push('/app/characters/new/races');
	};

	return (
		<Animate duration={0.2} play {...animProps}>
			<div className="px-5 mt-10 container w-full max-w-prose mx-auto">
				<h3 className="text-lg mb-3 font-bold">General Info</h3>
				<hr />
				<form className="mt-8" onSubmit={onSubmit}>
					<div className="mb-6">
						<div className="mb-8">
							<label
								className="block mt-5 text-white text-sm font-bold mb-4"
								htmlFor="playerName"
							>
								Your Name
							</label>
							<input
								onChange={onChange}
								value={generalInfo.playerName}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="playerName"
								type="text"
								autoComplete="name"
								name="playerName"
								required
								placeholder="John Doe"
							/>
						</div>
						<div className="mb-8">
							<label
								className="block mt-5 text-white text-sm font-bold mb-2"
								htmlFor="characterName"
							>
								Character Name
							</label>
							<p
								className="underline mb-3 opacity-80 text-sm cursor-pointer hover:opacity-100 transition duration-150"
								onClick={generateRandomName}
							>
								Randomize
							</p>

							<input
								onChange={onChange}
								value={generalInfo.characterName}
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="characterName"
								type="text"
								autoComplete="characterName"
								name="characterName"
								required
								placeholder="Doredren The Blacksmith"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block mt-5 text-white text-sm font-bold mb-4"
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
								placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie iaculis eros iaculis auctor. Sed blandit, enim quis iaculis fringilla, ligula odio rutrum quam, ac facilisis eros sem in tortor. Donec ut nibh vel massa rhoncus bibendum vitae et tellus."
							/>
						</div>
						<div className="mb-8 w-full flex justify-between items-center">
							<div className="left w-2/5">
								<label
									className="block mt-5 text-white text-sm font-bold mb-4"
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
									required
									placeholder="6'1"
								/>
							</div>
							<div className="left w-2/5">
								<label
									className="block mt-5 text-white text-sm font-bold mb-4"
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
									required
									placeholder="170"
								/>
							</div>
						</div>
						<div className="mb-8 w-full flex justify-between items-center">
							<div className="left w-2/5">
								<label
									className="block mt-5 text-white text-sm font-bold mb-4"
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
									required
									placeholder="Blue"
								/>
							</div>
							<div className="left w-2/5">
								<label
									className="block mt-5 text-white text-sm font-bold mb-4"
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
									required
									placeholder="Black"
								/>
							</div>
						</div>
						<div className="mb-8 w-full flex justify-between items-center">
							<div className="left w-2/5">
								<label
									className="block mt-5 text-white text-sm font-bold mb-4"
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
									required
									placeholder="Brown"
								/>
							</div>
							<div className="left w-2/5">
								<label
									className="block mt-5 text-white text-sm font-bold mb-4"
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
									required
									placeholder="20"
								/>
							</div>
						</div>
					</div>
					<button className="bg-red-500 w-full mb-4 hover:bg-red-500 text-white font-bold py-2 px-4 mt-1 rounded">
						Continue
					</button>
				</form>
			</div>
		</Animate>
	);
};

export default GeneralInfo;

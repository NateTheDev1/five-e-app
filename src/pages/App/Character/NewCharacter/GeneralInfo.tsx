import { useState } from 'react';
import faker from 'faker';
import { Animate } from 'react-simple-animate';
import { animProps } from '../../../Onboarding/Login';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { useHistory } from 'react-router';
import { Character } from '../../../../corev2/Character';
import { useEffect } from 'react';

const GeneralInfo = () => {
	const newCharacterRef = CharacterSelectors.useSelectNewCharacter();

	const history = useHistory();

	const [play, setPlay] = useState(false);

	const [generalInfo, setGeneralInfo] = useState({
		characterName: newCharacterRef?.characterName ?? '',
		eyes: newCharacterRef?.eyes ?? '',
		skin: newCharacterRef?.skin ?? '',
		hair: newCharacterRef?.hair ?? '',
		backstory: newCharacterRef?.backstory ?? '',
		height: newCharacterRef?.height ?? '',
		weight: newCharacterRef?.weight ?? '',
		age: newCharacterRef?.age ?? ''
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

		const newCharacter = new Character();

		newCharacter.loadFromSerialize(
			JSON.parse(localStorage.getItem('characterInProgress') as any) ?? {}
		);

		newCharacter.characterName = generalInfo.characterName;
		newCharacter.backstory = generalInfo.backstory;
		newCharacter.height = generalInfo.height;
		newCharacter.weight = generalInfo.weight;
		newCharacter.eyes = generalInfo.eyes;
		newCharacter.skin = generalInfo.skin;
		newCharacter.hair = generalInfo.hair;
		newCharacter.age = generalInfo.age;

		updateNewCharacter(newCharacter);

		history.push('/app/characters/new/races');
	};

	useEffect(() => {
		if (!play) {
			setPlay(true);
		}
	}, [play, setPlay]);

	return (
		<Animate duration={0.2} play={play} {...animProps}>
			<div className=" mt-5 container w-full max-w-prose mx-auto ">
				<div className="bg-white p-3 text-black rounded-md">
					<h3 className="text-lg mb-3 font-light opacity-80">
						General Info
					</h3>
					<hr className=" border-gray-500" />
					<form className="mt-4" onSubmit={onSubmit}>
						<div className="mb-8">
							<label
								className="block mt-5 text-black text-sm font-bold mb-2"
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
						<h4 className="font-medium opacity-50 mt-10 text-lg text-center">
							These details can be left blank and chosen again
							later when you select a background.
						</h4>
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
						<button
							type="submit"
							className="bg-red-500 w-full mb-4 cursor-pointer hover:bg-red-500 text-white font-bold py-2 px-4 mt-1 rounded"
						>
							Continue
						</button>
					</form>
				</div>
			</div>
		</Animate>
	);
};

export default GeneralInfo;

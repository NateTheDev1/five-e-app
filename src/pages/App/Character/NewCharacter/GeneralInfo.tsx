import { useState } from 'react';
import faker from 'faker';
import { Animate } from 'react-simple-animate';
import { animProps } from '../../../Onboarding/Login';
import { CharacterActions } from '../../../../redux/Character/actions';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { useHistory } from 'react-router';
import { Character } from '../../../../corev2/Character';
import { useEffect } from 'react';
import TextyAnim from 'rc-texty';

const GeneralInfo = () => {
	const newCharacterRef = CharacterSelectors.useSelectNewCharacter();

	const history = useHistory();

	const [play, setPlay] = useState(false);

	const [generalInfo, setGeneralInfo] = useState({
		characterName: newCharacterRef?.characterName ?? ''
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

		updateNewCharacter(newCharacter);

		window.scrollTo(0, 0);

		history.push('/app/characters/new/races');
	};

	useEffect(() => {
		if (!play) {
			setPlay(true);
		}
	}, [play, setPlay]);

	return (
		<Animate duration={0.2} play={play} {...animProps}>
			<div
				className="container w-full md:max-w-screen-lg  mx-auto"
				style={{ height: '90vh' }}
			>
				<form
					className="h-full flex flex-col px-4 justify-center"
					onSubmit={onSubmit}
				>
					<TextyAnim
						type="mask-top"
						duration={0.5}
						className="mb-3 text-3xl font-light opacity-80 text-center mt-5"
					>
						Let's start with the basics
					</TextyAnim>
					<div className="mb-8">
						<label
							className="block mt-5 mb-10 text-white text-lg font-semibold text-center"
							htmlFor="characterName"
						>
							What is your character's name?
						</label>
						<input
							onChange={onChange}
							value={generalInfo.characterName}
							className="shadow appearance-none mb-8 rounded w-full py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="characterName"
							type="text"
							autoComplete="characterName"
							name="characterName"
							required
							placeholder="Doredren The Blacksmith"
						/>
					</div>
					<button
						onClick={generateRandomName}
						type="button"
						className="bg-blue-500 text-white w-full mb-8 cursor-pointer   font-bold py-2 px-4 mt-1 rounded self-end"
					>
						Random Name
					</button>
					<button
						type="submit"
						className="bg-red-500 w-full   cursor-pointer hover:bg-red-500 text-white font-bold py-2 px-4 mt-1 rounded"
					>
						Continue
					</button>
				</form>
			</div>
		</Animate>
	);
};

export default GeneralInfo;

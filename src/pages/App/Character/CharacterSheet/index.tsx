import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../../../../corev2/Character';
import Top from './Top';

const CharacterSheet = () => {
	const { charKey }: { charKey: string } = useParams();
	const charJSON = localStorage.getItem('sidekick_characters');
	const [character, setCharacter] = useState<Character | undefined>();

	useEffect(() => {
		if (charJSON) {
			const characters: Character[] = JSON.parse(charJSON);
			setCharacter(
				characters.find((char, key) => key === Number(charKey))
			);
		}
	}, [charKey, charJSON]);

	if (!character) return null;

	return (
		<div className=" mt-5 container w-full md:max-w-screen-lg e mx-auto p-4 bg-white rounded-md text-black">
			<Top character={character} />
		</div>
	);
};

export default CharacterSheet;

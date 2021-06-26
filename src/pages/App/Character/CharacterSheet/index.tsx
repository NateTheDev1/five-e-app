import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../../../../corev2/Character';
import { core, SkillConstants } from '../../../../corev2/core';
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

	function capitalizeFirstLetter(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function getStatBonus(str: string) {
		let bonus = 0;
		const key = capitalizeFirstLetter(str);

		if (character) {
			for (let i = 0; i < character.bonuses.length; i++) {
				if (character.bonuses[i].stat === key) {
					bonus += character.bonuses[i].amount;
				}
			}
		}
		return bonus;
	}

	return (
		<div
			className=" mt-5 container w-full md:max-w-screen-lg e mx-auto p-4  rounded-md text-black"
			style={{ paddingTop: '15px' }}
		>
			<Top character={character} />
			<div className="w-full mt-4  p-5 bg-white">
				<p
					className="text-center uppercase font-light mb-2"
					style={{ letterSpacing: '0.5rem' }}
				>
					Ability Scores
				</p>
				<div className="flex flex-wrap">
					{Object.values(core.statBlocks).map((c, key) => (
						<div key={key} className="w-1/3 mb-4 h-20 p-2 ">
							<div className="bg-gray-800 h-20 text-white flex flex-col justify-center items-center">
								<p className="text-xs opacity-75">{c.text}</p>
								<p>
									{
										character.stats[
											capitalizeFirstLetter(c.text)
										]
									}{' '}
									{getStatBonus(c.text) > 0 && (
										<span>
											+{' '}
											<span className="text-yellow-500">
												{getStatBonus(c.text)}
											</span>{' '}
										</span>
									)}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CharacterSheet;

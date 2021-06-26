import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flip, toast } from 'react-toastify';
import { Character } from '../../../../corev2/Character';
import {
	core,
	SkillConstants,
	SkillModConstants
} from '../../../../corev2/core';
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

	const onStatRoll = (mod: number) => {
		const roll = core.dX(20);
		toast.dark(`You rolled a ${roll} + ${mod} = ${roll + mod} `, {
			position: 'bottom-center',
			closeOnClick: true,
			transition: Flip,
			style: { maxWidth: '80vw', margin: '0 auto', marginBottom: '10px' },
			progressClassName: 'bg-red-500',
			bodyClassName: 'text-center'
		});
	};

	function isProficienct(skill: string): boolean {
		let prof = false;

		if (character) {
			for (let i = 0; i < character.proficiencies.length; i++) {
				if (character.proficiencies[i] === skill) {
					prof = true;
				}
			}
		}

		return prof;
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

	const getProfBonus = (level: number) => {
		if (level <= 4) {
			return 2;
		}

		if (level >= 5 && level <= 8) {
			return 3;
		}

		if (level >= 9 && level <= 12) {
			return 4;
		}

		if (level >= 13 && level <= 16) {
			return 5;
		}

		if (level >= 17) {
			return 6;
		}
	};

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
						<div
							key={key}
							className="w-1/3 mb-4 h-20 p-2 "
							onClick={() => onStatRoll(getStatBonus(c.text))}
						>
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
			<div className="w-full mt-4  p-5 bg-white">
				<p
					className="text-center uppercase font-light mb-2"
					style={{ letterSpacing: '0.5rem' }}
				>
					Skills
				</p>
				<div className="flex flex-col">
					{Object.entries(SkillConstants).map(([k, val], key) => (
						<div className="w-full bg-gray-800 text-white mb-4 rounded shadow-md p-4 text-xs">
							<div>
								<p className="text-sm">{val}</p>
								<p className="mt-4 text-yellow-500">
									{
										//@ts-ignore
										SkillModConstants[k]
									}
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

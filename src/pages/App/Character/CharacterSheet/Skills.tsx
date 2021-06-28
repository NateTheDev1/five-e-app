import { Character } from '../../../../corev2/Character';
import { SkillConstants, SkillModConstants } from '../../../../corev2/core';

const Skills = ({
	character,
	getStatBonus,
	isProficienct,
	getProfBonus
}: {
	character: Character;
	getStatBonus(str: string): number;
	isProficienct(skill: string): boolean;
	getProfBonus: (level: number) => 2 | 3 | 4 | 5 | 6 | undefined;
}) => {
	return (
		<div className="w-full mt-4   p-5 bg-gray-200 shadow-inner  flex flex-col justify-center rounded-md">
			<p
				className="text-center uppercase font-light mb-2"
				style={{ letterSpacing: '0.5rem' }}
			>
				Skills
			</p>
			{Object.entries(SkillConstants).map(([k, val], key) => (
				<div
					className="flex justify-between items-center mb-4"
					key={key}
				>
					<p className="text-sm flex flex-col justify-start">
						{val}
						<span className="text-blue-500 uppercase opacity-60 text-xs">
							{
								//@ts-ignore
								SkillModConstants[k].substr(0, 3)
							}
						</span>
					</p>
					<div className="flex items-center">
						<p className="text-red-500 opacity-75 font-bold mr-2 text-sm">
							+{' '}
							{
								//@ts-ignore
								getStatBonus(SkillModConstants[k]) +
									((isProficienct(val) &&
										getProfBonus(character.level)) ??
										0)
							}
						</p>

						<button
							className="bg-bgmain text-white rounded-md p-2 text-xs"
							onClick={() => {}}
						>
							Roll
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;

import { Character } from '../../../../corev2/Character';
import { SkillConstants } from '../../../../corev2/core';

const Skills = ({ character }: { character: Character }) => {
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

	return (
		<div className="w-full mt-4  p-5 bg-white">
			<p
				className="text-center uppercase font-light mb-2"
				style={{ letterSpacing: '0.5rem' }}
			>
				Skills
			</p>
			<div className="flex flex-col">
				{Object.entries(SkillConstants).map(([k, val], key) => (
					<div
						className="w-full bg-gray-800 text-white mb-4 rounded shadow-md p-4 text-xs"
						key={key}
					>
						<div className="flex items-center">
							<p className="text-sm">
								{val} -{' '}
								<span className="text-yellow-500 opacity-60">
									{
										//@ts-ignore
										SkillModConstants[k]
									}
								</span>
							</p>
							<p>{}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;

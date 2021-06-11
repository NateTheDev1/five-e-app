import { useState } from 'react';
import { Animate } from 'react-simple-animate';
import reference from '../../../../core/reference';
import Util from '../../../../core/util';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { animProps } from '../../../Onboarding/Login';

const Stats = () => {
	const newCharacter = CharacterSelectors.useSelectNewCharacter();
	const [genMethod, setGenMethod] = useState('Standard Array');
	const [rolls, setRolls] = useState<number[]>(reference.standardStatArray);
	const [statRolls, setStatRolls] = useState({
		Strength: -1,
		Dexterity: -1,
		Constitution: -1,
		Intelligence: -1,
		Wisdom: -1,
		Charisma: -1
	});

	const [selectedRolls, setSelectedRolls] = useState<number[]>([]);

	const rollStats = () => {
		const tmpRolls: number[] = [];
		for (let i = 0; i < reference.statBlocks.length; i++) {
			tmpRolls.push(Util.statRoll());
		}
		setRolls(tmpRolls);
	};

	return (
		<Animate duration={0.2} play {...animProps}>
			<div className="px-5 mt-10 container w-full max-w-prose mx-auto">
				<h3 className="text-lg mb-3 font-bold">Build your stats</h3>
				<hr />
				<div className="stats flex flex-col mt-8">
					<h4 className="font-bold">Choose a generation method</h4>
					<select
						className="mt-5 px-2 py-2 rounded text-black"
						value={genMethod}
						onChange={e => {
							setGenMethod(e.target.value);
							if (e.target.value === 'Standard Array') {
								setStatRolls({
									Strength: -1,
									Dexterity: -1,
									Constitution: -1,
									Intelligence: -1,
									Wisdom: -1,
									Charisma: -1
								});
								setRolls(reference.standardStatArray);
							}
							if (e.target.value === 'Rolled') {
								setStatRolls({
									Strength: -1,
									Dexterity: -1,
									Constitution: -1,
									Intelligence: -1,
									Wisdom: -1,
									Charisma: -1
								});
								rollStats();
							}
						}}
					>
						<option value="Standard Array">Standard Array</option>
						<option value="Rolled">Rolled</option>
					</select>
					<p className="text-left mt-8 font-bold">Rolls</p>

					<div className="rolls flex items-center justify-between w-full  bg-white text-black rounded-md p-4 shadow-lg mt-3">
						{rolls.map((rollnum, key) => (
							<div key={key}>{rollnum}</div>
						))}
					</div>
					{genMethod === 'Rolled' && (
						<button
							onClick={() => rollStats()}
							className="bg-red-500 w-50 h-auto mb-4 hover:bg-red-500 text-white font-bold py-2 px-4 mt-5 rounded"
						>
							Roll
						</button>
					)}
				</div>
				<div className="stats mt-8">
					{reference.statBlocks.map((stat, key) => (
						<div
							className="stat flex justify-between mt-8"
							key={key}
						>
							<h4 className="text-lg">
								{stat.text} +{newCharacter?.race.bonuses[key]}
							</h4>
							<input
								type="number"
								className=" text-black text-center w-2/5 md:w-3/5 "
								placeholder="0"
								//@ts-ignore
								onChange={e =>
									setStatRolls({
										...statRolls,
										[stat.text]: e.target.value
									})
								}
								//@ts-ignore

								value={
									//@ts-ignore

									statRolls[stat.text] > 0
										? //@ts-ignore

										  Number(statRolls[stat.text])
										: null
								}
							/>
						</div>
					))}
				</div>
			</div>
		</Animate>
	);
};

export default Stats;

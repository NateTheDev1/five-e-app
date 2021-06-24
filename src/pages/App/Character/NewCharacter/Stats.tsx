import { Animate } from 'react-simple-animate';
import { useState } from 'react';
import { useEffect } from 'react';
import { animProps } from '../../../Onboarding/Login';
import { core } from '../../../../corev2/core';
import Select from 'react-select';
import { useHistory } from 'react-router';
import { CharacterSelectors } from '../../../../redux/Character/selectors';
import { CharacterActions } from '../../../../redux/Character/actions';
import { Character } from '../../../../corev2/Character';

const Stats = () => {
	const [play, setPlay] = useState(false);

	const history = useHistory();

	const newCharacter = CharacterSelectors.useSelectNewCharacter();
	const updateCharacter = CharacterActions.useUpdateNewCharacter();

	const [stepComplete, setStepComplete] = useState(false);

	useEffect(() => {
		if (!play) {
			setPlay(true);
		}
	}, [play, setPlay]);

	const [genMethod, setGenMethod] = useState('Standard Array');
	const [rolls, setRolls] = useState<number[]>(core.standardStatArray);
	const [statRolls, setStatRolls] = useState<{ [key: string]: number }>({
		Strength: newCharacter?.stats['Strength'] ?? -1,
		Dexterity: newCharacter?.stats['Dexterity'] ?? -1,
		Constitution: newCharacter?.stats['Constitution'] ?? -1,
		Intelligence: newCharacter?.stats['Intelligence'] ?? -1,
		Wisdom: newCharacter?.stats['Wisdom'] ?? -1,
		Charisma: newCharacter?.stats['Charisma'] ?? -1
	});

	useEffect(() => {
		let comps: boolean[] = [];

		for (const val of Object.values(statRolls)) {
			if (val !== -1) {
				comps.push(true);
			} else {
				comps.push(false);
			}
		}

		setStepComplete(!comps.includes(false));
	}, [statRolls]);

	const rollStats = () => {
		const tmpRolls: number[] = [];
		for (let i = 0; i < core.statBlocks.length; i++) {
			tmpRolls.push(core.statRoll());
		}
		setRolls(tmpRolls);
	};

	const filterRollSelects = (r: any) => {
		let found = false;
		let supposedInstances = 0;
		let instances = 0;

		for (let i = 0; i < rolls.length; i++) {
			if (rolls[i] === r) {
				supposedInstances++;
			}
		}

		for (let i = 0; i < core.statBlocks.length; i++) {
			if (statRolls[core.statBlocks[i].text] === r) {
				instances++;
			}
		}

		if (instances === supposedInstances) found = true;
		if (instances < supposedInstances) found = false;

		return found;
	};

	const getOgStat = (stat: string) => {
		const bons = newCharacter?.bonuses.filter(b => b.stat === stat) ?? [];

		let amt: number = 0;

		if (bons.length > 0) {
			amt = bons.reduce(
				//@ts-ignore
				(acc = 0, cur) => acc.amount + cur.amount
			).amount;
		}

		if (amt === -1) {
			amt = 0;
		}

		return amt;
	};

	return (
		<Animate duration={0.2} play={play} {...animProps}>
			<div className=" mt-5 container w-full md:max-w-screen-lg mx-auto">
				<div className="bg-bgmain p-3 text-white ">
					<h3 className="text-lg mb-3 font-light opacity-90">
						Ability Score Allocation
					</h3>
					<p className="text-sm my-3 opacity-50 font-light leading-10">
						The higher the number in the box the better your Player
						Character (PC) is at that ability. The lower the score
						the less able you are at that ability.
					</p>
					<hr className=" border-gray-300" />
					<div className="mt-2 mb-2">
						<h4 className="font-bold mb-2 text-center">
							Choose a generation method
						</h4>

						<Select
							className="text-black"
							isSearchable={false}
							value={{
								value: genMethod,
								label: genMethod
							}}
							options={[
								{
									value: 'Standard Array',
									label: 'Standard Array'
								},
								{ value: 'Rolled', label: 'Rolled' }
							]}
							onChange={e => {
								if (e) {
									if (e.value === 'Standard Array') {
										setGenMethod(e.value);
										setRolls([...core.standardStatArray]);
									} else {
										setGenMethod(e.value);
										rollStats();
									}

									if (newCharacter) {
										newCharacter.stats = {
											Strength: -1,
											Dexterity: -1,
											Constitution: -1,
											Intelligence: -1,
											Wisdom: -1,
											Charisma: -1
										};
									}

									setStatRolls({
										Strength:
											newCharacter?.stats['Strength'] ??
											-1,
										Dexterity:
											newCharacter?.stats['Dexterity'] ??
											-1,
										Constitution:
											newCharacter?.stats[
												'Constitution'
											] ?? -1,
										Intelligence:
											newCharacter?.stats[
												'Intelligence'
											] ?? -1,
										Wisdom:
											newCharacter?.stats['Wisdom'] ?? -1,
										Charisma:
											newCharacter?.stats['Charisma'] ??
											-1
									});
								}
							}}
						/>
						{genMethod === 'Rolled' && (
							<button
								className="bg-red-500 w-full mt-3 h-auto hover:bg-red-500 text-white font-bold py-1 px-2 text-sm rounded"
								onClick={() => {
									rollStats();
									setStatRolls({
										Strength:
											newCharacter?.stats['Strength'] ??
											-1,
										Dexterity:
											newCharacter?.stats['Dexterity'] ??
											-1,
										Constitution:
											newCharacter?.stats[
												'Constitution'
											] ?? -1,
										Intelligence:
											newCharacter?.stats[
												'Intelligence'
											] ?? -1,
										Wisdom:
											newCharacter?.stats['Wisdom'] ?? -1,
										Charisma:
											newCharacter?.stats['Charisma'] ??
											-1
									});
								}}
							>
								Roll Again
							</button>
						)}

						<div className="flex justify-between mt-8 w-80 mx-auto text-xs font-semibold">
							{rolls.map((roll, key) => (
								<p key={key}>{roll}</p>
							))}
						</div>

						<div className="mt-8">
							{core.statBlocks.map((stat, key) => (
								<div
									className="stat flex flex-col justify-center text-center text-white mt-8 w-full mb-8 rounded-md bg-gray-800 text-whiteshadow-lg p-4 shadow-xl"
									key={key}
								>
									<h4
										className="font-medium text-red-500 uppercase leading-10"
										style={{ letterSpacing: '0.5rem' }}
									>
										{stat.text}
									</h4>

									<Select
										className="text-black"
										isSearchable={false}
										//@ts-ignore
										value={
											//@ts-ignore
											statRolls[stat.text] !== -1
												? {
														//@ts-ignore
														value:
															statRolls[
																stat.text
															],
														//@ts-ignore
														label:
															statRolls[stat.text]
												  }
												: ''
										}
										isClearable={true}
										options={[
											...rolls
												.filter(
													r =>
														filterRollSelects(r) !==
														true
												)
												.map(roll => ({
													value: roll as any,
													label: roll as any
												}))
										]}
										onChange={(e, eq) => {
											if (eq['action'] === 'clear') {
												setStatRolls({
													...statRolls,
													[stat.text]: -1
												});
											} else {
												if (e) {
													setStatRolls({
														...statRolls,
														[stat.text]: e.value
													});
												}
											}
										}}
									/>

									<p className="text-sm opacity-70 font-bold mt-4 text-white">
										Bonuses
									</p>

									<div>
										{newCharacter?.bonuses
											.filter(b => b.stat === stat.text)
											.map((b, key) => (
												<p
													key={key}
													className="mt-2 text-xs text-white"
												>
													{b.stat} +{b.amount}
												</p>
											))}
									</div>

									<p className="text-sm opacity-70 font-bold mt-8 text-white">
										Total
									</p>
									{statRolls[stat.text] !== -1 && (
										<p className="text-white">
											{getOgStat(stat.text) +
												statRolls[stat.text]}
										</p>
									)}
								</div>
							))}
						</div>
					</div>
					<button
						disabled={!stepComplete}
						className="bg-red-500 w-full mt-3 h-auto hover:bg-red-500 text-white font-bold py-1 px-2 text-sm rounded disabled "
						onClick={() => {
							const newChar = newCharacter;

							if (newChar) {
								newChar.stats = statRolls;
								updateCharacter(newChar);

								let previousChars = localStorage.getItem(
									'sidekick_characters' ?? []
								);

								if (previousChars && previousChars.length > 0) {
									localStorage.setItem(
										'sidekick_characters',
										JSON.stringify([
											...JSON.parse(previousChars),
											newChar
										])
									);

									localStorage.removeItem(
										'characterInProgress'
									);
								} else {
									localStorage.setItem(
										'sidekick_characters',
										JSON.stringify([newChar])
									);
								}

								updateCharacter(new Character());
							}

							history.push('/app/characters');
						}}
					>
						Finish
					</button>
				</div>
			</div>
		</Animate>
	);
};

export default Stats;

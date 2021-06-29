import { Capacitor } from '@capacitor/core';
import {
	ShieldCheckIcon,
	HeartIcon,
	BadgeCheckIcon,
	ShoppingBagIcon,
	HomeIcon,
	AnnotationIcon,
	DotsHorizontalIcon,
	ClockIcon
} from '@heroicons/react/solid';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flip, toast } from 'react-toastify';
import { Character } from '../../../../corev2/Character';
import { core } from '../../../../corev2/core';
import { CharacterActions } from '../../../../redux/Character/actions';
import Skills from './Skills';
import Top from './Top';
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import Description from './Description';
import RollLog from './RollLog';

export function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const actions = [
	{ icon: <HomeIcon className="w-5 h-5" />, name: 'Home' },
	{ icon: <AnnotationIcon className="w-5 h-5" />, name: 'Description' },
	{
		icon: (
			<img
				src="https://img.icons8.com/ios-glyphs/60/000000/school-backpack.png"
				alt="backpack"
				className="w-5 h-5 opacity-60"
			/>
		),
		name: 'Inventory'
	},
	{
		icon: <ClockIcon className="w-5 h-5" />,
		name: 'Roll Log'
	}
];

const CharacterSheet = () => {
	const { charKey }: { charKey: string } = useParams();
	const charJSON = localStorage.getItem('sidekick_characters');
	const [character, setCharacter] = useState<Character | undefined>();
	const updateCharacter = CharacterActions.useUpdateNewCharacter();
	const [healthChangeAmount, setHealthChangeAmount] = useState<{
		damage: number;
		heal: number;
	}>({ damage: 0, heal: 0 });
	const [rollLogs, setRollLogs] = useState<{ title: string; roll: number }[]>(
		[]
	);
	const [rollLogOpen, setRollLogOpen] = useState(false);

	const [tabPage, setTabPage] = useState<
		'Home' | 'Description' | 'Inventory'
	>('Home');
	const [speedialOpen, setSpeedialOpen] = useState(false);

	useEffect(() => {
		if (charJSON) {
			const characters: Character[] = JSON.parse(charJSON);
			setCharacter(
				characters.find((char, key) => key === Number(charKey))
			);
		}
	}, [charKey, charJSON]);

	if (!character) return null;

	const onStatRoll = (mod: number, title?: string) => {
		const roll = core.dX(20);
		rollLogs.push({ roll, title: title ?? '' });
		toast.dark(`You rolled a ${roll} + ${mod} = ${roll + mod} `, {
			position: 'bottom-center',
			closeOnClick: true,
			transition: Flip,
			style: { maxWidth: '80vw', margin: '0 auto', marginBottom: '10px' },
			progressClassName: 'bg-red-500',
			bodyClassName: 'text-center'
		});
	};

	const saveCharacter = () => {
		const chars: Character[] = JSON.parse(
			localStorage.getItem('sidekick_characters') as any
		);

		let newChars = [];

		for (let i = 0; i < chars.length; i++) {
			if (i === Number(charKey)) {
				newChars.push(character);
			} else {
				newChars.push(chars[i]);
			}
		}

		localStorage.setItem('sidekick_characters', JSON.stringify(newChars));
	};

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

	const getPassivePerception = (perception: number) => {
		const prof = isProficienct('Perception');
		let perc = perception;

		if (prof) {
			perc += getProfBonus(character.level) ?? 0;
		}

		return 10 + perc;
	};

	const healthChange = (type: 'damage' | 'heal') => {
		if (type === 'heal') {
			let temp = character.hp;
			temp += healthChangeAmount.heal;

			if (temp > character.maxHP) {
				character.hp = character.maxHP;
			} else {
				character.hp = temp;
			}

			setHealthChangeAmount({ ...healthChangeAmount, heal: 0 });

			saveCharacter();
		}

		if (type === 'damage') {
			let temp = character.hp;

			temp -= healthChangeAmount.damage;

			character.hp = temp;

			setHealthChangeAmount({ ...healthChangeAmount, damage: 0 });

			saveCharacter();
		}
	};

	return (
		<div
			className={`container w-full md:max-w-screen-lg e mx-auto p-4 text-black bg-white ${
				Capacitor.getPlatform() === 'web' && 'mt-5'
			}`}
			style={{ paddingTop: '40px' }}
		>
			<Top character={character} />

			{tabPage === 'Home' && (
				<>
					<div className="w-full mt-4   p-5 bg-gray-200 shadow-inner  flex flex-col justify-center rounded-md">
						<p
							className="text-center uppercase font-light mb-4"
							style={{ letterSpacing: '0.5rem' }}
						>
							General
						</p>

						<div>
							<div className="flex justify-between items-center mb-4">
								<p className="font-light text-sm">Hit Points</p>
								<div className="flex items-center mr-2">
									<HeartIcon className="text-red-500 w-5 h-5 mr-2" />

									<p className="text-red-500 opacity-75 font-bold text-lg">
										{character.hp}/{character.maxHP}
									</p>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<input
									min="0"
									type="number"
									className=" shadow appearance-none  rounded w-full px-2 text-center text-gray-700 focus:outline-none focus:shadow-outline"
									placeholder="0"
									value={healthChangeAmount.damage}
									onChange={e =>
										setHealthChangeAmount({
											...healthChangeAmount,
											damage: Number(e.target.value)
										})
									}
								/>
								<button
									onClick={() => healthChange('damage')}
									className="bg-red-500 text-white rounded-md p-2 w-1/4 ml-4 text-xs"
								>
									Damage
								</button>
							</div>
							<div className="flex justify-between mt-4 items-center">
								<input
									min="0"
									onChange={e =>
										setHealthChangeAmount({
											...healthChangeAmount,
											heal: Number(e.target.value)
										})
									}
									type="number"
									className=" shadow appearance-none  rounded w-full px-2 text-center text-gray-700  focus:outline-none focus:shadow-outline"
									placeholder="0"
									value={healthChangeAmount.heal}
								/>
								<button
									onClick={() => healthChange('heal')}
									className="bg-green-500 text-white rounded-md p-2 w-1/4 ml-4 text-xs"
								>
									Heal
								</button>
							</div>
						</div>

						<hr className="mb-4 mt-4" />
						<div className="flex justify-between items-center mb-4">
							<p className="font-light text-sm">Armor Class</p>
							<div className="flex items-center">
								<ShieldCheckIcon className="text-blue-500 w-4 h-4 mr-2" />

								<p className="text-red-500 opacity-75 font-bold mr-2 text-sm">
									{10 +
										getStatBonus('Dexterity') +
										(character &&
										character.race &&
										character.race.name === 'Barbarian'
											? getStatBonus('Constitution')
											: 0) +
										(character &&
										character.race &&
										character.race.name === 'Monk'
											? getStatBonus('Wisdom')
											: 0)}
								</p>
							</div>
						</div>
						<div className="flex justify-between items-center mb-4">
							<p className="font-light text-sm">
								Proficiency Bonus
							</p>
							<div className="flex items-center">
								<p className="text-red-500 opacity-75 font-bold mr-2 text-sm">
									+{getProfBonus(character.level)}
								</p>
							</div>
						</div>
						<div className="flex justify-between items-center mb-4">
							<p className="font-light text-sm">
								Passive Perception
							</p>
							<div className="flex items-center">
								<p className="text-red-500 opacity-75 font-bold mr-2 text-sm">
									{getPassivePerception(
										getStatBonus('Wisdom')
									)}
								</p>
							</div>
						</div>
						<hr className="mb-4" />
						<div className="flex justify-between items-center mb-4">
							<p className="font-light text-sm">Initiative</p>
							<div className="flex items-center">
								<p className="text-red-500 opacity-75 font-bold mr-2 text-sm">
									+{getStatBonus('Dexterity')}
								</p>
								<button
									className="bg-bgmain text-white rounded-md p-2 text-xs"
									onClick={() =>
										onStatRoll(
											getStatBonus('Dexterity'),
											'Initiative Roll'
										)
									}
								>
									Roll
								</button>
							</div>
						</div>
					</div>

					<div className="w-full mt-4   p-5 bg-gray-200 shadow-inner  flex flex-col justify-center rounded-md">
						<p
							className="text-center uppercase font-light mb-2"
							style={{ letterSpacing: '0.5rem' }}
						>
							Ability Scores
						</p>
						{Object.values(core.statBlocks).map((c, key) => (
							<div
								className="flex justify-between items-center mb-4"
								key={key}
							>
								<p className="font-light text-sm">{c.text}</p>
								<div className="flex items-center">
									<p className="text-red-500 opacity-75 font-bold mr-2 text-sm">
										{
											character.stats[
												capitalizeFirstLetter(c.text)
											]
										}
										{getStatBonus(c.text) > 0 && (
											<span>
												+{' '}
												<span className="text-blue-500">
													{getStatBonus(c.text)}
												</span>{' '}
											</span>
										)}
									</p>
									<button
										className="bg-bgmain text-white rounded-md p-2 text-xs"
										onClick={() =>
											onStatRoll(getStatBonus(c.text))
										}
									>
										Roll
									</button>
								</div>
							</div>
						))}
					</div>
					<div className="w-full mt-4   p-5 bg-gray-200 shadow-inner  flex flex-col justify-center rounded-md">
						<p
							className="text-center uppercase font-light mb-2"
							style={{ letterSpacing: '0.5rem' }}
						>
							Saving Throws
						</p>
						{Object.values(core.statBlocks).map((c, key) => (
							<div
								className="flex justify-between items-center mb-4"
								key={key}
							>
								<p className="font-light text-sm flex items-center">
									{c.text}{' '}
									{character.saves.includes(c.text) && (
										<BadgeCheckIcon className="ml-2 h-4 w-4 text-green-500" />
									)}
								</p>
								<div className="flex items-center">
									<p className="text-red-500 opacity-75 font-bold mr-2 text-sm">
										{(getStatBonus(c.text) > 0 ||
											character.saves.includes(
												c.text
											)) && (
											<span>
												+
												<span>
													{getStatBonus(c.text) +
														//@ts-ignore
														(character.saves.includes(
															c.text
														)
															? getProfBonus(
																	character.level
															  )
															: 0)}
												</span>{' '}
											</span>
										)}
									</p>
									<button
										className="bg-bgmain text-white rounded-md p-2 text-xs"
										onClick={() =>
											onStatRoll(
												getStatBonus(c.text) +
													//@ts-ignore

													(character.saves.includes(
														c.text
													)
														? getProfBonus(
																character.level
														  )
														: 0)
											)
										}
									>
										Roll
									</button>
								</div>
							</div>
						))}
					</div>
					<Skills
						character={character}
						getStatBonus={getStatBonus}
						isProficienct={isProficienct}
						getProfBonus={getProfBonus}
						onStatRoll={onStatRoll}
					/>
				</>
			)}
			{tabPage === 'Description' && (
				<>
					<Description character={character} />
				</>
			)}

			<SpeedDial
				style={{
					right: 20,
					bottom: 95,
					position: 'fixed',
					color: 'black'
				}}
				FabProps={{
					className: 'bg-red-500 focus:outline-none',
					style: { background: '#EF4444' }
				}}
				ariaLabel="Tab Menu"
				icon={<DotsHorizontalIcon className="w-5 h-5" />}
				onClose={() => setSpeedialOpen(false)}
				onOpen={() => setSpeedialOpen(true)}
				open={speedialOpen}
				direction="up"
			>
				{actions.map(action => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						onClick={() => {
							setSpeedialOpen(false);
							if (!['Roll Log'].includes(action.name)) {
								setTabPage(action.name as any);
							}

							if (action.name === 'Roll Log') {
								setRollLogOpen(true);
							}
						}}
					/>
				))}
			</SpeedDial>
			<RollLog
				rollLogOpen={rollLogOpen}
				rollLogs={rollLogs}
				setRollLogOpen={setRollLogOpen}
			/>
		</div>
	);
};

export default CharacterSheet;

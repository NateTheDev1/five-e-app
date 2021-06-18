import { ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Animate, AnimateGroup } from 'react-simple-animate';
import { Character } from '../../../corev2/Character';
import { CharacterActions } from '../../../redux/Character/actions';
import { CharacterSelectors } from '../../../redux/Character/selectors';

import { animProps } from '../../Onboarding/Login';

const CharactersView = () => {
	const history = useHistory();

	const newCharacterRef = CharacterSelectors.useSelectNewCharacter();
	const resetCharacter = CharacterActions.useUpdateNewCharacter();
	const characters: Character[] = JSON.parse(
		localStorage.getItem('sidekick_characters') ?? '[]'
	);

	const [noteOpen, setNoteOpen] = useState(true);

	return (
		<Animate duration={0.2} play {...animProps}>
			<div className="px-5 mt-12">
				<h1 className="font-bold text-xl">Your Characters</h1>

				<div className="flex justify-start mt-5 flex-col shadow-md bg-red-500 rounded-md pt-3 pb-3 px-4">
					<div
						className="flex justify-between"
						onClick={() => setNoteOpen(!noteOpen)}
					>
						<div className="left flex">
							<p className="mr-3 font-bold">Note</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 "
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
								/>
							</svg>
						</div>
						<div className="  has-tooltip cursor-pointer flex rounded-md">
							<ChevronDownIcon className="h-6 w-6 " />
						</div>
					</div>
					{noteOpen && (
						<p className="mt-3 font-light leading-loose">
							Here you can manage your existing characters or
							create a new one.
						</p>
					)}
				</div>

				<hr className="mt-5" />

				<div className="characters container w-full mt-10 mx-auto">
					<AnimateGroup play>
						<div className="no-characters text-center">
							<Animate
								sequenceIndex={0}
								duration={0.2}
								{...animProps}
							>
								{characters.length < 0 && (
									<h3 className="text-lg font-bold ">
										You don't have any existing characters
										yet.
									</h3>
								)}
								<div className="flex flex-col md:flex-row md:justify-between flex-wrap flex-grow">
									{characters.map((char, key) => (
										<div
											key={key}
											className="sm:w-full text-black p-4 md:w-3/6 mb-4 cursor-pointer"
										>
											<div className="bg-white flex flex-col p-4 rounded-md text-left">
												<h4
													className="text-red-500 font-semibold uppercase text-sm"
													style={{
														letterSpacing: '0.5rem',
														lineHeight: 2
													}}
												>
													{char.characterName}
												</h4>
												<p className="mt-2 opacity-50 font-bold">
													Level {char.level}
												</p>
												<p className="mt-2 opacity-50 font-bold">
													{char.race?.name}{' '}
													{char.class?.name}
												</p>

												<p className="mt-2 opacity-50 font-bold">
													{char.xp} XP
												</p>
												<button
													className="bg-red-500 w-full mt-3 h-auto hover:bg-red-500 text-white font-bold py-1 px-2 text-md rounded"
													onClick={() =>
														history.push(
															'/app/characters/' +
																key
														)
													}
												>
													View
												</button>
											</div>
										</div>
									))}
								</div>
							</Animate>
							<Animate
								sequenceIndex={1}
								delay={0.2}
								duration={0.2}
								{...animProps}
							>
								<button
									onClick={() => {
										resetCharacter(new Character());
										history.push('/app/characters/new');
									}}
									className="md:w-10/12 w-full mt-8 mr-5 mb-8 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
								>
									Create One
								</button>
							</Animate>
							{newCharacterRef &&
								newCharacterRef.characterName &&
								newCharacterRef.characterName.length > 0 && (
									<Animate
										sequenceIndex={2}
										delay={0.2}
										duration={0.2}
										{...animProps}
									>
										<button
											onClick={() => {
												history.push(
													'/app/characters/new'
												);
											}}
											className="md:w-10/12 w-full mt-2 mr-5 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
										>
											Continue Character In Progress
										</button>
									</Animate>
								)}
						</div>
					</AnimateGroup>
				</div>
			</div>
		</Animate>
	);
};

export default CharactersView;

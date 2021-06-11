import { ChevronRightIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import phb from '../../../../core/phb';
import reference from '../../../../core/reference';
import { Race as RaceType } from '../../../../core/types';

const BASE_URL = 'https://api.open5e.com/races/?search=';

const Race = ({
	race,
	keyVal,
	setSelectedRace,
	selectedRace,
	individual = false
}: {
	race: RaceType;
	keyVal: number;
	setSelectedRace: React.Dispatch<React.SetStateAction<RaceType | undefined>>;
	selectedRace: RaceType | undefined;
	individual?: boolean;
}) => {
	const history = useHistory();

	const [languagesSelectedLength, setLanguagesSelectedLength] = useState(0);

	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	const [raceData, setRaceData] = useState<any>(undefined);

	const getRaceData = () => {
		setLoading(true);
		axios
			.get(BASE_URL + race.text)
			.then(res => {
				let raceRes = res.data.results.find(
					(result: any) => result.name === race.text
				);

				if (!raceRes) {
					if (race.text.includes('Elf')) {
						raceRes = res.data.results
							.find((result: any) => result.name === 'Elf')
							.subraces.find(
								(sub: any) => sub.name === race.text
							);
					} else if (race.text.includes('Dwarf')) {
						raceRes = res.data.results
							.find((result: any) => result.name === 'Dwarf')
							.subraces.find(
								(sub: any) => sub.name === race.text
							);
					} else if (race.text.includes('Halfling')) {
						raceRes = res.data.results
							.find((result: any) => result.name === 'Halfling')
							.subraces.find(
								(sub: any) =>
									sub.name === 'Lightfoot' ||
									sub.name === 'Stout'
							);
					} else if (race.text.includes('Gnome')) {
						raceRes = res.data.results
							.find((result: any) => result.name === 'Gnome')
							.subraces.find(
								(sub: any) => sub.name === race.text
							);
					}
				}

				if (raceRes) {
					const desc = getDesc(raceRes.desc);
					setRaceData({ ...raceRes, desc });
				} else {
					setRaceData(raceRes);
				}
				setLoading(false);
			})
			.catch(e => console.error(e));
	};

	const getDesc = (text: string) => {
		let str = text;
		str = str.replaceAll('#', '');

		str = str.replace(`${race.text} Traits`, '');

		return str;
	};

	return (
		<div
			className="race flex flex-col shadow-md bg-white mb-5 px-4 pt-3 pb-3 cursor-pointer"
			key={keyVal}
			onClick={() => {
				if (!raceData && !individual) {
					getRaceData();
					setOpen(!open);
				}
				if (individual) {
					history.push('/app/characters/new/classes');
				}
			}}
		>
			<div className="top flex justify-between items-center">
				<h4>{race.text}</h4>

				<div className="has-tooltip cursor-pointer flex rounded-md">
					{!individual && <ChevronRightIcon className="h-6 w-6 " />}
				</div>
			</div>
			{open && (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-11/12 my-6 mx-auto max-w-3xl">
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-xl font-semibold">
										{race.text}
									</h3>
								</div>
								<div
									style={{ maxHeight: '80vh' }}
									className="overflow-y-scroll"
								>
									{!loading ? (
										<div className="relative p-6 flex-auto">
											<p>
												{!raceData &&
													'Content not yet available for this race'}
											</p>
											{raceData && (
												<div className="">
													<p className="font-bold my-2">
														Description
													</p>
													<p className="my-4 text-gray-500 text-md leading-relaxed">
														{raceData.desc}
													</p>
													<p className="font-bold my-2">
														Speed
													</p>
													<p className="my-4 text-gray-500 text-md leading-relaxed">
														{race.speed} feet
													</p>

													{raceData.size && (
														<>
															<p className="font-bold my-2">
																Size
															</p>
															<p className="my-4 text-gray-500 text-md leading-relaxed">
																{raceData.size.replace(
																	'**_Size._**',
																	''
																)}
															</p>
														</>
													)}
													<p className="font-bold my-2">
														Ability Score Increase
													</p>
													{raceData.asi.map(
														(
															asi: any,
															key: number
														) => (
															<p
																key={key}
																className="my-4 text-gray-500 text-md leading-relaxed"
															>
																-{' '}
																{asi.attributes}{' '}
																+{asi.value}
															</p>
														)
													)}
													<p className="font-bold my-2">
														Extra Language Selection
														Choose (
														{race.extraLanguages})
													</p>

													{race.extraLanguages > 0 ? (
														<>
															{reference.languages.map(
																(lang, key) => (
																	<div
																		key={
																			key
																		}
																	>
																		<input
																			onChange={e => {
																				if (
																					race.languages.includes(
																						Number(
																							e
																								.target
																								.value
																						) as any
																					)
																				) {
																					const index =
																						race.languages.indexOf(
																							Number(
																								e
																									.target
																									.value
																							) as any
																						);
																					race.languages.splice(
																						index,
																						1
																					);
																					setLanguagesSelectedLength(
																						languagesSelectedLength -
																							1
																					);
																				} else {
																					if (
																						!race.languages.includes(
																							lang.id
																						)
																					) {
																						race.languages.push(
																							Number(
																								e
																									.target
																									.value
																							) as any
																						);
																						setLanguagesSelectedLength(
																							languagesSelectedLength +
																								1
																						);
																					}
																				}
																			}}
																			value={
																				lang.id
																			}
																			checked={race.languages.includes(
																				lang.id
																			)}
																			type="checkbox"
																		/>
																		<p>
																			{
																				lang.text
																			}
																		</p>
																	</div>
																)
															)}
														</>
													) : (
														<p className="my-4 text-gray-500 text-md leading-relaxed">
															No extra languages
															for this race.
														</p>
													)}
													<p className="font-bold my-2">
														Languages
													</p>
													{race.languages.map(
														(language, key) => (
															<p
																key={key}
																className="my-4 text-gray-500 text-md leading-relaxed"
															>
																-{' '}
																{
																	reference
																		.languages[
																		language
																	].text
																}
															</p>
														)
													)}
													<p className="font-bold my-2">
														Extra Features
													</p>
													{race.extraFeatures.map(
														(f, key) => (
															<p
																key={key}
																className="my-4 text-gray-500 text-md leading-relaxed"
															>
																- {f.text}
															</p>
														)
													)}
													{race.extraFeatures.length <
														1 && (
														<p className="my-4 text-gray-500 text-md leading-relaxed">
															No extra features
															for this race.
														</p>
													)}
												</div>
											)}
										</div>
									) : (
										<div className="mt-5 mb-5 mx-auto loader ease-linear rounded-full border-4 border-t-4 border-gray-200 w-16 h-16 "></div>
									)}
								</div>
								<div className="flex items-center justify-between p-3 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setOpen(false)}
									>
										Close
									</button>
									<button
										className="text-red-500 background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => {
											setSelectedRace(race);
											setOpen(false);
										}}
									>
										{selectedRace?.text === race.text ||
										individual
											? 'Continue'
											: 'Confirm'}
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			)}
			{individual && (
				<button className="bg-red-500 w-50 h-auto mb-4 hover:bg-red-500 text-white font-bold py-2 px-4 mt-5 rounded">
					Continue
				</button>
			)}
		</div>
	);
};

export default Race;

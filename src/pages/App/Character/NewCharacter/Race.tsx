import { ChevronRightIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useState } from 'react';
import reference from '../../../../core/reference';
import { Race as RaceType } from '../../../../core/types';

const BASE_URL = 'https://api.open5e.com/races/?search=';

const Race = ({
	race,
	keyVal
}: {
	race: RaceType;
	keyVal: number;
	setSelectedRace: React.Dispatch<React.SetStateAction<RaceType | undefined>>;
	selectedRace: RaceType | undefined;
}) => {
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
					}
				}

				console.log(raceRes);

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
			className="race flex flex-col shadow-md bg-white mb-5 px-4 pt-3 pb-3"
			key={keyVal}
		>
			<div className="top flex justify-between items-center">
				<h4>{race.text}</h4>
				<div className="  has-tooltip cursor-pointer flex rounded-md">
					<ChevronRightIcon
						className="h-6 w-6 "
						onClick={() => {
							if (!raceData) {
								getRaceData();
							}
							setOpen(!open);
						}}
					/>
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
												<p className="font-bold my-2">
													Size
												</p>
												{raceData.size && (
													<p className="my-4 text-gray-500 text-md leading-relaxed">
														{raceData.size.replace(
															'**_Size._**',
															''
														)}
													</p>
												)}
												<p className="font-bold my-2">
													Ability Score Increase
												</p>
												{raceData.asi.map(
													(asi: any, key: number) => (
														<p
															key={key}
															className="my-4 text-gray-500 text-md leading-relaxed"
														>
															- {asi.attributes} +
															{asi.value}
														</p>
													)
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
											</div>
										)}
									</div>
								) : (
									<div className="mt-5 mb-5 mx-auto loader ease-linear rounded-full border-4 border-t-4 border-gray-200 w-16 h-16 "></div>
								)}
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
										onClick={() => setOpen(false)}
									>
										Confirm
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			)}
		</div>
	);
};

export default Race;

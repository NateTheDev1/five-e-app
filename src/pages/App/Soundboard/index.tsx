import { ChevronDownIcon, PlusIcon } from '@heroicons/react/solid';
import { lazy, useState } from 'react';
import { useGetSoundboardsQuery } from '../../../graphql';

import SpinnerLoader from '../../../components/SpinnerLoader';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import { animProps } from '../../Onboarding/Login';
import { Animate } from 'react-simple-animate';

const NewSoundboard = lazy(() => import('./NewSoundboard'));

export const Soundboards = () => {
	const [noteOpen, setNoteOpen] = useState(true);
	const { data, loading, refetch } = useGetSoundboardsQuery();
	const history = useHistory();

	const [creatingSoundboard, setCreatingSoundboard] = useState(false);

	useEffect(() => {
		refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Animate play {...animProps}>
			<div className="px-5 mt-12">
				<h1 className="font-bold text-xl">Your Soundboards</h1>

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
							Here you can manage your soundboards or create new
							ones using files, or links from sites such as
							youtube.
						</p>
					)}
				</div>

				<hr className="mt-5" />

				{data && data.getSoundboards.length <= 0 && !loading && (
					<h3 className="text-lg font-medium text-center mt-5">
						You don't have any existing soundboards yet.
					</h3>
				)}

				<div className="flex flex-col md:flex-row md:justify-between flex-wrap mt-5">
					{data &&
						data.getSoundboards.map((board, key) => (
							<div
								key={key}
								className="sm:w-full text-black p-4 md:w-3/6 mb-4 cursor-pointer flex-grow"
							>
								<div className="bg-white flex flex-col p-4 rounded-md text-center">
									<h4
										className="text-black font-semibold uppercase text-sm mb-2"
										style={{
											letterSpacing: '0.5rem',
											lineHeight: 2
										}}
									>
										{board?.title}
									</h4>

									<button
										className="bg-red-500 w-full mt-3 h-auto hover:bg-red-500 text-white font-bold py-1 px-2 text-md rounded"
										onClick={() =>
											history.push(
												'/app/soundboard/' + board?.id
											)
										}
									>
										Use
									</button>
								</div>
							</div>
						))}

					<SpinnerLoader loading={loading} />
				</div>
				<Fab
					className="focus:outline-none"
					onClick={() => {
						window.scrollTo(0, 0);
						setCreatingSoundboard(true);
					}}
					aria-label="Continue"
					style={{
						right: 20,
						bottom: 90,
						position: 'fixed',
						color: 'white',
						background: '#EF4444'
					}}
					classes={{ disabled: 'fab-disabled' }}
				>
					<PlusIcon className="w-5 h-5 font-bold" />
				</Fab>
				<NewSoundboard
					open={creatingSoundboard}
					setOpen={setCreatingSoundboard}
				/>
			</div>
		</Animate>
	);
};

export default Soundboards;

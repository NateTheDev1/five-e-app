import { ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useGetSoundboardsQuery } from '../../../graphql';

import ReactPlayer from 'react-player';

export const Soundboards = () => {
	const [noteOpen, setNoteOpen] = useState(true);
	const { data, loading, error, refetch } = useGetSoundboardsQuery();

	return (
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
						Here you can manage your soundboards or create new ones
						using files, or links from sites such as youtube.
					</p>
				)}
			</div>

			<hr className="mt-5" />

			<div className="container w-full mt-10 mx-auto">
				{data && data.getSoundboards.length <= 0 && (
					<h3 className="text-lg font-medium text-center">
						You don't have any existing soundboards yet.
					</h3>
				)}

				{/* <ReactPlayer
					url="https://www.youtube.com/watch?v=lU1EmTA4J60"
					width="100%"
					playsinline
					style={{ display: 'none' }}
					controls={false}
				/> */}
			</div>
		</div>
	);
};

export default Soundboards;

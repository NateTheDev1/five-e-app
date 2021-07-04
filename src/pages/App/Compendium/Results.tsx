import { ChevronRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';

import { Dialog } from '@material-ui/core';
import { Capacitor } from '@capacitor/core';

const Results = ({ data }: { data: any[] }) => {
	const [selectedIndex, setSelectedIndex] = useState<any | undefined>(
		undefined
	);

	console.log(selectedIndex);

	return (
		<div className="flex flex-col w-full " >
			{data.map((d, key) => (
				<div
					key={key}
					className="p-4 w-100 flex flex-col cursor-pointer"
					onClick={() => {
						setSelectedIndex(d);
					}}
				>
					<div className="flex justify-between">
						<h4>{d.name}</h4>
						<ChevronRightIcon className="w-5 h-5" />
					</div>
					<hr className="mt-4" />
				</div>
			))}
			<Dialog
				fullScreen
				className="bg-bgmain h-full overflow-y-hidden"
				open={selectedIndex !== undefined}
				onClose={() => setSelectedIndex(undefined)}
			>
				{selectedIndex && (
					<div className="bg-bgmain h-full overflow-y-hidden">
						<div
							className="top flex  justify-between w-100 pb-8 bg-gray-800 h-12 items-center shadow-2xl p-4 text-white "
							style={{
								paddingTop:
									Capacitor.getPlatform() === 'ios'
										? '60px'
										: '30px'
							}}
						>
							<h4
								className=" font-medium text-md text-red-500 uppercase leading-7"
								style={{ letterSpacing: '1rem' }}
							>
								{selectedIndex.name}
							</h4>
							<svg
								onClick={() => {
									setSelectedIndex(undefined);
								}}
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 cursor-pointer"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
						<div className=" p-4 bg-bgmain h-full overflow-scroll text-white flex flex-col w-full ">
							<a
								className="mt-4 text-blue-500"
								href={`https://www.dndbeyond.com/search?q=${selectedIndex.name}`}
								target="__none"
							>
								Read More
							</a>
							<p className="mb-2 font-bold text-lg opacity-75 mt-8 text-red-500">
								Description
							</p>
							{selectedIndex.text && (
								<p style={{ lineHeight: 2 }}>
									{selectedIndex.text.replace('&#39;', "'")}
								</p>
							)}
							{!selectedIndex.text && (
								<p style={{ lineHeight: 2 }}>N/A</p>
							)}
							{Object.entries(selectedIndex)
								.filter(
									([key, val]) =>
										![
											'document_slug',
											'slug',
											'title',
											'text',
											'document_title',
											'name',
											'route',
											'highlighted',
											'document__license_url',
											'document__slug',
											'document__title'
										].includes(key)
								)
								.filter(([key, val]: [key: any, val: any]) => String(val).length > 0)
								.map(([k, val], key) => (
									<>
										<p className="mb-2 font-bold text-lg opacity-75 mt-4 text-red-500">
											{k
												.toLowerCase()
												.replace('_', ' ')
												.split(' ')
												.map(
													s =>
														s
															.charAt(0)
															.toUpperCase() +
														s.substring(1)
												)
												.join(' ')}
										</p>
										<p style={{ lineHeight: 2 }}>
											{val as any}
										</p>
									</>
								))}
							<div className="mb-20"></div>
						</div>
					</div>
				)}
			</Dialog>
			<div className="mb-20"></div>
		</div>
	);
};

export default Results;

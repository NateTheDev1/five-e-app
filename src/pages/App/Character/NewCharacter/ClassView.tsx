import { ChevronRightIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Class as ClassType } from '../../../../core/types';

const BASE_URL = 'https://api.open5e.com/classes/?search=';

const ClassView = ({
	classRef,
	keyVal,
	selectedCLass,
	setSelectedClass,
	individual
}: {
	classRef: ClassType;
	keyVal: number;
	setSelectedClass: React.Dispatch<
		React.SetStateAction<ClassType | undefined>
	>;
	selectedCLass: ClassType | undefined;
	individual?: boolean;
}) => {
	const history = useHistory();

	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	const [classData, setClassData] = useState<any>(undefined);

	const getClassData = () => {
		setLoading(true);

		axios.get(BASE_URL + classRef.text).then(res => {
			console.log(res);
		});
	};

	return (
		<div
			className="race flex flex-col shadow-md bg-white mb-5 px-4 pt-3 pb-3 cursor-pointer"
			key={keyVal}
			onClick={() => {
				if (!classData) {
					getClassData();
				}
				if (!individual) {
					setOpen(true);
				}
				if (individual) {
					history.push('/app/characters/new/stats');
				}
			}}
		>
			<div className="top flex justify-between items-center">
				<h4>{classRef.text}</h4>

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
										{classRef.text}
									</h3>
								</div>
								<div
									style={{ maxHeight: '80vh' }}
									className="overflow-y-scroll"
								>
									{!loading ? (
										<div className="relative p-6 flex-auto">
											<p>
												{!classData &&
													'Content not yet available for this class'}
											</p>
											{classData && (
												<div className="">
													<p className="font-bold my-2">
														Description
													</p>
													<p className="my-4 text-gray-500 text-md leading-relaxed">
														{classData.desc}
													</p>
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
										onClick={e => {
											e.stopPropagation();

											setOpen(false);
										}}
									>
										Close
									</button>
									<button
										className="text-red-500 background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={e => {
											setOpen(false);
											e.stopPropagation();
											setSelectedClass(classRef);
										}}
									>
										{selectedCLass?.text ===
											classRef.text || individual
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

export default ClassView;

import { Animate } from 'react-simple-animate';
import { animProps } from '../../Onboarding/Login';
import { BookOpenIcon } from '@heroicons/react/solid';

const Compendium = () => {
	return (
		<Animate play {...animProps}>
			<div className="w-screen bg-gray-800 flex flex-col justify-center p-4">
				<BookOpenIcon className="h-12 w-12 self-center mb-4 text-red-500" />
				<label
					className="block mb-4 text-white text-md font-light text-center"
					htmlFor="characterName"
				>
					What are you looking for?
				</label>
				<input
					className="shadow appearance-none mb-3  rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="characterName"
					type="text"
					autoComplete="characterName"
					name="characterName"
					required
					placeholder="Half-Elf..."
				/>
				<button className="bg-red-500 w-full  cursor-pointer hover:bg-red-500 text-white font-bold py-2 px-4 mt-1 rounded">
					Search
				</button>
			</div>
			<div className="px-5 mt-12"></div>
		</Animate>
	);
};

export default Compendium;

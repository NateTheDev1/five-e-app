import { Animate } from 'react-simple-animate';
import { animProps } from '../../Onboarding/Login';
import { BookOpenIcon } from '@heroicons/react/solid';
import { useState } from 'react';

import axios from 'axios';
import SpinnerLoader from '../../../components/SpinnerLoader';
import Results from './Results';
import Select from 'react-select';

const BASE_URL = 'https://api.open5e.com/';

const Compendium = () => {
	const [searchCategory, setSearchCategory] = useState<
		{ value: string; label: string } | undefined
	>({ value: 'None', label: 'None' });
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<any[]>([]);
	const [error, setError] = useState('');

	const search = (e: any) => {
		e.preventDefault();
		setLoading(true);
		setData([]);
		axios
			.get(
				BASE_URL +
					(searchCategory &&
					searchCategory.value.length > 0 &&
					searchCategory.value !== 'None'
						? searchCategory.value
						: 'search/?name=') +
					query,
				{
					headers: { 'Content-Type': 'application/json' }
				}
			)
			.then(res => {
				setData(res.data.results);
				setError('s');

				setLoading(false);
			})
			.catch(e => {
				setError('s');
				setLoading(false);
			});
	};

	return (
		<Animate play {...animProps}>
			<div
				className="w-screen  bg-gray-800 flex flex-col justify-center p-4"
				style={{ paddingTop: '15px' }}
			>
				<BookOpenIcon className="h-12 w-12 self-center mb-4 text-red-500" />
				<div className="md:w-5/6 md:mx-auto">
					<form onSubmit={search}>
						<p className="text-center mb-4">Category</p>
						<Select
							className="mb-8 text-black"
							value={searchCategory}
							onChange={e => setSearchCategory(e as any)}
							options={[
								{ value: 'None', label: 'None' },
								{
									value: 'monsters/?search=',
									label: 'Monsters'
								},
								{
									value: 'spells/?search=',
									label: 'Spells'
								},
								{
									value: 'documents/?search=',
									label: 'Documents'
								},
								{
									value: 'backgrounds/?search=',
									label: 'Backgrounds'
								},
								{
									value: 'planes/?search=',
									label: 'Planes'
								},
								{
									value: 'sections/?search=',
									label: 'Sections'
								},
								{
									value: 'feats/?search=',
									label: 'Feats'
								},
								{
									value: 'conditions/?search=',
									label: 'Conditions'
								},
								{
									value: 'races/?search=',
									label: 'Races'
								},
								{
									value: 'classes/?search=',
									label: 'Classes'
								},
								{
									value: 'magicitems/?search=',
									label: 'Magic Items'
								},
								{
									value: 'weapons/?search=',
									label: 'Weapons'
								}
							]}
						/>

						<label
							className="block mb-4 text-white text-md font-light text-center"
							htmlFor="search"
						>
							What are you looking for?
						</label>

						<input
							value={query}
							onChange={e => setQuery(e.target.value)}
							className="shadow appearance-none mb-3  rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="search"
							type="text"
							autoComplete="search"
							name="search"
							required
							placeholder="Half-Elf..."
						/>
						<button
							type="submit"
							className="bg-red-500 w-full  cursor-pointer hover:bg-red-500 text-white font-bold py-2 px-4 mt-1 rounded"
						>
							Search
						</button>
					</form>
				</div>
			</div>
			<div className="px-5 mt-12">
				{data.length < 1 && error.length > 0 && (
					<p className="text-center">No results.</p>
				)}
				{data.length > 1 && (
					<p className="text-center mb-4">{data.length} results</p>
				)}
				<div className="flex">
					{loading && <SpinnerLoader loading={loading} />}

					{!loading && <Results data={data} />}
				</div>
			</div>
		</Animate>
	);
};

export default Compendium;

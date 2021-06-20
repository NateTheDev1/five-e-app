import {
	BookOpenIcon,
	UserGroupIcon,
	HomeIcon,
	VolumeUpIcon
} from '@heroicons/react/solid';
import { useHistory } from 'react-router-dom';

const BottomNav = () => {
	const history = useHistory();

	return (
		<div
			className="w-screen fixed bottom-0  bg-white shadow-lg flex items-center justify-between pb-8 px-1 py-3 "
			style={{ background: '#22272A' }}
		>
			<div
				className="tab flex flex-col items-center justify-between text-center w-1/4"
				onClick={() => history.push('/app')}
			>
				<HomeIcon
					className={`${
						window.location.pathname === '/app'
							? 'text-red-700'
							: 'opacity-50'
					}   h-5 `}
				/>
				<p className="text-xs mt-1 opacity-50">Home</p>
			</div>
			<div
				className="tab flex flex-col items-center justify-between text-center w-1/4"
				onClick={() => history.push('/app/characters')}
			>
				<UserGroupIcon
					className={`${
						window.location.pathname.includes('character')
							? 'text-red-700'
							: 'opacity-50'
					}  h-5`}
				/>
				<p className="text-xs mt-1 opacity-50">Characters</p>
			</div>
			<div
				className="tab flex flex-col items-center justify-between text-center w-1/4"
				onClick={() => history.push('/app/soundboard')}
			>
				<VolumeUpIcon
					className={`${
						window.location.pathname.includes('soundboard')
							? 'text-red-700'
							: 'opacity-50'
					}  h-5`}
				/>
				<p className="text-xs mt-1 opacity-50">Soundboard</p>
			</div>
			<div
				className="tab flex flex-col items-center justify-between text-center w-1/4"
				onClick={() => history.push('/app/compendium')}
			>
				<BookOpenIcon
					className={`${
						window.location.pathname === '/compendium'
							? 'text-red-700'
							: 'opacity-50'
					}  h-5`}
				/>
				<p className="text-xs mt-1 opacity-50">Compendium</p>
			</div>
		</div>
	);
};

export default BottomNav;

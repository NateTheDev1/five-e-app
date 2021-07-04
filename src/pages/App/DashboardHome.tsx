import { animProps } from '../Onboarding/Login';
import { Animate } from 'react-simple-animate';
import {
	NewspaperIcon,
	ChevronRightIcon,
	DotsHorizontalIcon
} from '@heroicons/react/solid';
import { useState } from 'react';
import WhatsNew from '../../components/WhatsNew';

import Background from '../../assets/home-bg.png';
import { useHistory } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';

const DashboardHome = () => {
	const history = useHistory();

	const [whatsNewOpen, setWhatsNewOpen] = useState(false);

	return (
		<Animate play {...animProps}>
			<div
				className={`home ${
					Capacitor.getPlatform() !== 'web' && 'mt-7'
				}  flex flex-col max-h-screen`}
			>
				<div
					className="whats-new flex justify-center items-center h-10 font-bold cursor-pointer"
					style={{ background: '#12B981' }}
					onClick={() => setWhatsNewOpen(true)}
				>
					<p>What's New?</p>
					<NewspaperIcon className="w-5 h-5 ml-2" />
				</div>
				<div
					className="home-screen flex flex-col items-center justify-center"
					style={{
						backgroundImage: `url(${Background})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						height: '45vh'
					}}
				>
					<h1
						className="uppercase font-bold text-3xl"
						style={{
							letterSpacing: '0.12rem'
						}}
					>
						Welcome Back
					</h1>
					<h2
						className="uppercase font-bold text-sm mt-4"
						style={{ letterSpacing: '0.12rem' }}
					>
						Make a selection to get started
					</h2>
				</div>
				<div
					style={{
						height: '25%'
					}}
				>
					<div
						className="w-full h-1/4 p-4 flex items-center cursor-pointer justify-between"
						style={{
							background: '#E60109',
							borderBottom: '1px solid black'
						}}
						onClick={() => history.push('/app/characters')}
					>
						<h3
							className="uppercase font-light text-lg"
							style={{ letterSpacing: '0.12rem' }}
						>
							Characters
						</h3>
						<ChevronRightIcon className="w-5 h-5 text-white" />
					</div>
					<div
						className="w-full h-1/4 p-4 flex items-center cursor-pointer justify-between"
						style={{
							background: '#909394',
							borderBottom: '1px solid black'
						}}
						onClick={() => history.push('/app/compendium')}
					>
						<h3
							className="uppercase font-light text-lg"
							style={{ letterSpacing: '0.12rem' }}
						>
							Compendium
						</h3>
						<ChevronRightIcon className="w-5 h-5 text-white" />
					</div>
					<div
						className="w-full h-1/4 p-4 flex items-center cursor-pointer justify-between"
						style={{
							background: '#22272A',
							borderBottom: '1px solid black'
						}}
						onClick={() => history.push('/app/soundboard')}
					>
						<h3
							className="uppercase font-light text-lg"
							style={{ letterSpacing: '0.12rem' }}
						>
							Soundboard
						</h3>
						<ChevronRightIcon className="w-5 h-5 text-white" />
					</div>
					<div className="w-full h-1/4 px-4 py-2 bg-white flex items-center cursor-pointer text-black justify-between">
						<h3
							className="uppercase font-light text-lg"
							style={{ letterSpacing: '0.12rem' }}
						>
							More
						</h3>
						<DotsHorizontalIcon className="w-5 h-5 text-black" />
					</div>
				</div>
			</div>
			<WhatsNew open={whatsNewOpen} setOpen={setWhatsNewOpen} />
		</Animate>
	);
};

export default DashboardHome;

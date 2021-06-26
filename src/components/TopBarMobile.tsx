import Logo from './Logo';
import { UserCircleIcon } from '@heroicons/react/solid';
import { lazy, useState } from 'react';
import dice from '../assets/d20.png';
import { toast, Flip } from 'react-toastify';
import { core } from '../corev2/core';

const AccountView = lazy(() => import('./AccountView'));

const TopBarMobile = ({ title }: { title: string }) => {
	const [accountOpen, setAccountOpen] = useState(false);

	const onRoll = () => {
		toast.dark(`You rolled a ${core.dX(20)}`, {
			position: 'bottom-center',
			closeOnClick: true,
			transition: Flip,
			style: { maxWidth: '80vw', margin: '0 auto', marginBottom: '10px' },
			progressClassName: 'bg-red-500',
			bodyClassName: 'text-center'
		});
	};

	return (
		<div
			className="w-full text-center pb-2 text-white shadow-xl fixed top-0 mb-12"
			style={{
				paddingTop: 50,
				background: '#22272A'
			}}
		>
			<style
				dangerouslySetInnerHTML={{
					__html: `
					body {
						padding-top: 70px;
					}
	`
				}}
			/>

			<div className=" w-screen flex items-center justify-between px-2">
				<div
					className="mt-2 w-6 flex cursor-pointer justify-center"
					onClick={onRoll}
				>
					<img src={dice} alt="d20 dice" className="h-6 w-6" />
				</div>
				<div className="w-1/3 mt-2 w-full flex  justify-center">
					<Logo type="dark" />
				</div>
				<div
					className="text-white fixed right-2 cursor-pointer"
					onClick={() => setAccountOpen(true)}
				>
					<UserCircleIcon className="w-6 h-6 mt-2" />
				</div>
			</div>
			{accountOpen && (
				<AccountView open={accountOpen} setOpen={setAccountOpen} />
			)}
		</div>
	);
};

export default TopBarMobile;

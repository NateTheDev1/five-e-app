import Logo from './Logo';
import { UserCircleIcon } from '@heroicons/react/solid';
import { lazy, useState } from 'react';

const AccountView = lazy(() => import('./AccountView'));

const TopBarMobile = ({ title }: { title: string }) => {
	const [accountOpen, setAccountOpen] = useState(false);

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

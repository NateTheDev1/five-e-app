import { UserActions } from '../redux/User/actions';
import { Dialog as DialogComp } from '@material-ui/core';
import { Dialog } from '@capacitor/dialog';
import { Capacitor } from '@capacitor/core';
import { LogoutIcon } from '@heroicons/react/solid';
import { useGetUserQuery } from '../graphql';
import decode from 'jwt-decode';
import SpinnerLoader from './SpinnerLoader';

const AccountView = ({
	open,
	setOpen
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const user: any = decode(
		localStorage.getItem(
			process.env.REACT_APP_TOKEN_KEY as string
		) as string
	);

	const logout = UserActions.useLogout();
	const { data, loading } = useGetUserQuery({
		variables: { id: Number(user.userId) },
		skip: !user.userId
	});

	const showConfirm = async () => {
		const { value } = await Dialog.confirm({
			title: 'Confirm',
			message: `Are you sure you want to logout?`
		});

		if (value === true) {
			logout();
		}
	};

	return (
		<DialogComp
			className="bg-bgmain h-full overflow-y-hidden"
			open={open}
			onClose={() => setOpen(false)}
			fullScreen={true}
		>
			<div
				className="top flex  justify-between w-100 pb-8 bg-gray-800 items-center shadow-2xl p-4 text-white "
				style={{
					paddingTop:
						Capacitor.getPlatform() === 'ios' ? '60px' : '30px'
				}}
			>
				<h4 className="font-medium text-lg ">Account</h4>
				<svg
					onClick={() => {
						setOpen(false);
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
			<div className="p-4 bg-bgmain h-full overflow-scroll text-white flex flex-col">
				{loading && <SpinnerLoader loading={loading} />}
				{!loading && (
					<>
						<p className="font-semibold text-md mb-2">Name</p>
						<p className="mb-4">{data?.getUser.name}</p>
						<hr className="mb-2" />
						<p className="font-semibold text-md mb-2">Email</p>
						<p className="mb-4">{data?.getUser.email}</p>
						<hr className="mb-2" />
						<p className="font-semibold text-md mb-2">Created At</p>
						<p className="mb-4">{data?.getUser.createdAt}</p>
						<hr className="mb-2" />
					</>
				)}
				<p
					className="font-semibold text-md mb-2 flex text-red-500 mt-4 cursor-pointer"
					onClick={showConfirm}
				>
					Logout <LogoutIcon className="h-6 w-6 ml-4" />
				</p>
			</div>
		</DialogComp>
	);
};

export default AccountView;

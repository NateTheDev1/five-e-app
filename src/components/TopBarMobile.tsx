import Logo from './Logo';
import { LogoutIcon } from '@heroicons/react/solid';
import { Dialog } from '@capacitor/dialog';
import { UserActions } from '../redux/User/actions';

const TopBarMobile = ({ title }: { title: string }) => {
	const logout = UserActions.useLogout();

	const showConfirm = async () => {
		const { value } = await Dialog.confirm({
			title: 'Confirm',
			message: `Are you sure you'd like to press the red button?`
		});

		if (value === true) {
			logout();
		}
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
			<div className=" w-screen flex items-center justify-between">
				<div className="w-1/3 mt-2">
					<Logo type="dark" />
				</div>
				<div className="text-red-500" onClick={() => showConfirm()}>
					<LogoutIcon className="w-6 h-6 mt-2" />
				</div>
			</div>
		</div>
	);
};

export default TopBarMobile;

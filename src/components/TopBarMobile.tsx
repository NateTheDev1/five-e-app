import { useEffect, useState } from 'react';
import Logo from './Logo';

const safeAreaInsets = require('safe-area-insets');

const TopBarMobile = ({ title }: { title: string }) => {
	const [topInset, setTopInset] = useState(safeAreaInsets.topInset);

	useEffect(() => {
		safeAreaInsets.onChange((s: any) => {
			if (topInset === 0 || topInset === undefined || topInset === null) {
				setTopInset(s.top);
			}
		});
	}, [topInset]);

	return (
		<div
			className="w-full text-center pb-2 text-white shadow-xl fixed top-0 mb-12"
			style={{
				paddingTop: topInset,
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
			<div className=" w-screen flex items-center justify-center">
				<div className="w-1/3">
					<Logo type="dark" />
				</div>
			</div>
		</div>
	);
};

export default TopBarMobile;

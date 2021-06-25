import Logo from './Logo';

const TopBarMobile = ({ title }: { title: string }) => {
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
			<div className=" w-screen flex items-center justify-center">
				<div className="w-1/3 mt-2">
					<Logo type="dark" />
				</div>
			</div>
		</div>
	);
};

export default TopBarMobile;

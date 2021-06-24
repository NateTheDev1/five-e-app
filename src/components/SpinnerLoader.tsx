import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const SpinnerLoader = ({ loading }: { loading: boolean }) => {
	return (
		<div className="mx-auto w-50 flex justify-center mt-20 opacity-70">
			<ClimbingBoxLoader color="#E6010A" loading={loading} size={25} />
		</div>
	);
};

export default SpinnerLoader;

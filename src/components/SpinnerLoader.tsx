import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const SpinnerLoader = ({ loading }: { loading: boolean }) => {
	return (
		<div className="mx-auto w-50 flex flex-col justify-center mt-20 opacity-70">
			<ClimbingBoxLoader color="#E6010A" loading={loading} size={25} />
			<p className="mt-5 text-center">Loading...</p>
		</div>
	);
};

export default SpinnerLoader;

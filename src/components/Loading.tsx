import { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const Loading = () => {
	const ref = useRef<any>(null);

	useEffect(() => {
		if (ref !== null) {
			ref.current.continuousStart(0, 100);
		}
	}, [ref]);

	return (
		<div className="bg-gray-800 h-screen w-screen">
			<LoadingBar color="#3067FF" ref={ref} loaderSpeed={100} />
		</div>
	);
};

export default Loading;

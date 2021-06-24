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
		<div className="bg-bgmain h-screen w-screen opacity-70">
			<LoadingBar color="#3067FF" ref={ref} loaderSpeed={100} />
		</div>
	);
};

export default Loading;

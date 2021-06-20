import { Suspense } from 'react';
import { Provider } from 'react-redux';
import BaseSchema from './components/BaseSchema';
import Loading from './components/Loading';
import ErrorBoundary from './ErrorBoundary';
import { store } from './redux/store';
import Router from './Router';

// Causing insane performance block
// import LogRocket from 'logrocket';
// LogRocket.init('5e-sidekick/5e-sidekick');

const App = () => {
	localStorage.setItem(
		'fivetoken',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoibnRobmxyaWNoYXJkc0BnbWFpbC5jb20iLCJpYXQiOjE2MjM2OTU1NTksImV4cCI6MTYyNjI4NzU1OX0.fOapOcDvbx6soQ0EeIyfJPquTYRu8gx8BbeTUZIWR9Y'
	);

	return (
		<ErrorBoundary>
			<Provider store={store}>
				<Suspense fallback={<Loading />}>
					<BaseSchema />
					<Router />
				</Suspense>
			</Provider>
		</ErrorBoundary>
	);
};

export default App;

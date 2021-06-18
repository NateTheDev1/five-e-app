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

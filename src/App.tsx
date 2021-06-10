import { Suspense } from 'react';
import { Provider } from 'react-redux';
import BaseSchema from './components/BaseSchema';
import Loading from './components/Loading';
import ErrorBoundary from './ErrorBoundary';
import { store } from './redux/store';
import Router from './Router';

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

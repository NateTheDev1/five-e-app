import { ApolloProvider } from '@apollo/client';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { apolloClient } from './client';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';

import './normalize.scss';
import './tailwind.css';
import './components/Navbars.scss';
import { ToastContainer } from 'react-toastify';

const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {
	hydrate(
		<ApolloProvider client={apolloClient}>
			<ToastContainer />
			<Router>
				<App />
			</Router>
		</ApolloProvider>,
		rootElement
	);
} else {
	render(
		<ApolloProvider client={apolloClient}>
			<ToastContainer />

			<Router>
				<App />
			</Router>
		</ApolloProvider>,
		rootElement
	);
}

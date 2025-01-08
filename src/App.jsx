import { GlobalStyles } from './styles/GlobalStyles';
import CounterProvider from './providers/CounterProvider';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<CounterProvider>
				<GlobalStyles />
				<Router />
			</CounterProvider>
		</BrowserRouter>
	);
};

export default App;

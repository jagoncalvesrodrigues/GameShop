import { useState } from 'react';
import { CounterContext } from '../contexts/CounterContent';

const CounterProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	return (
		<CounterContext.Provider value={{ cart, setCart }}>
			{children}
		</CounterContext.Provider>
	);
};

export default CounterProvider;

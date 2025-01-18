import { useState } from 'react';
import { CounterContext } from '../contexts/CounterContent';

const CounterProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addGame = game => {
		setCart([...cart, game]);
	};

	const deleteGame = id => {
		setCart(cart.filter(game => game.id !== id));
	};

	console.log(cart);
	return (
		<CounterContext.Provider value={{ cart, setCart, addGame, deleteGame }}>
			{children}
		</CounterContext.Provider>
	);
};

export default CounterProvider;

import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import CheckOut from '../pages/CheckOut/CheckOut';
import Layout from '../layout/Layout';
import GameStore from '../pages/GameStore/GameStore';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/gameStore' element={<GameStore />} />
				<Route path='/checkout' element={<CheckOut />} />
			</Route>
		</Routes>
	);
};

export default Router;

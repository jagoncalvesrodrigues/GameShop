import { useContext } from 'react';
import {
	StyledImageCart,
	StyledInfoGame,
	StylexBoxGameCart
} from './gamesCart.styles';
import { CounterContext } from '../../contexts/CounterContent';

const GamesCart = ({ gameCart }) => {
	const { deleteGame } = useContext(CounterContext);
	return (
		<StylexBoxGameCart>
			<StyledImageCart src={gameCart.image} />
			<StyledInfoGame>
				<p>
					{gameCart.title} - {gameCart.platform}
				</p>
				<img
					onClick={() => deleteGame(gameCart.id)}
					src='/assets/images/trash.svg'
					alt=''
				/>
				<p>${gameCart.price}</p>
			</StyledInfoGame>
		</StylexBoxGameCart>
	);
};
export default GamesCart;

import { useContext } from 'react';
import { COLORS } from '../../constants/colors';
import {
	StyledButtonBuy,
	StyledButtonInCart,
	StyledImage,
	StyledImageTrash,
	StyledInCartBox,
	StyledName,
	StylexBoxGame
} from './game.styles';
import { CounterContext } from '../../contexts/CounterContent';

const Game = ({ game }) => {
	const { addGame, deleteGame, cart } = useContext(CounterContext);

	const isInCart = cart.some(item => item.id === game.id);

	return (
		<StylexBoxGame>
			<StyledName>
				{game.title}-{game.platform}
			</StyledName>
			<StyledImage src={game.image} />

			{!isInCart && (
				<StyledButtonBuy onClick={() => addGame(game)} $color={COLORS.blue}>
					Buy - ${game.price}
				</StyledButtonBuy>
			)}
			{isInCart && (
				<StyledInCartBox>
					<StyledButtonInCart $color={COLORS.red}>In Cart</StyledButtonInCart>
					<StyledImageTrash
						onClick={() => deleteGame(game.id)}
						src='public/assets/images/trash.svg'
						alt=''
					/>
				</StyledInCartBox>
			)}
		</StylexBoxGame>
	);
};

export default Game;

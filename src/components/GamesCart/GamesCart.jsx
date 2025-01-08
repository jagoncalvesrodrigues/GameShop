import {
	StyledImageCart,
	StyledInfoGame,
	StylexBoxGameCart
} from './gamesCart.styles';

const GamesCart = () => {
	return (
		<StylexBoxGameCart>
			<StyledImageCart src='/assets/images/games/astro-bot.jpg' />
			<StyledInfoGame>
				<p>Astro Bot - PS5</p>
				<img src='/assets/images/trash.svg' alt='' />
				<p>$69.99</p>
			</StyledInfoGame>
		</StylexBoxGameCart>
	);
};
export default GamesCart;

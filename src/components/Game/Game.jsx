import { COLORS } from '../../constants/colors';
import {
	StyledButtonBuy,
	StyledImage,
	StyledName,
	StylexBoxGame
} from './game.styles';

const Game = ({ game }) => {
	return (
		<StylexBoxGame>
			<StyledName>
				{game.title}-{game.plattform}
			</StyledName>
			<StyledImage src={game.image} />
			<StyledButtonBuy $color={COLORS.blue}>
				Buy - ${game.price}
			</StyledButtonBuy>
		</StylexBoxGame>
	);
};
export default Game;

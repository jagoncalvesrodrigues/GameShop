import GamesCart from '../../components/GamesCart/GamesCart';
import TotalBox from '../../components/TotalBox/TotalBox';
import { COLORS } from '../../constants/colors';
import { StyledBoxGS } from '../GameStore/gameStore.styles';
import { StyledBoxText, StyledTitleCO } from './checkOut.styles';

const CheckOut = () => {
	return (
		<StyledBoxGS $color={COLORS.black}>
			<StyledTitleCO>Checkout</StyledTitleCO>
			<GamesCart />
			<GamesCart />
			<StyledBoxText $color={COLORS.blackbox}>
				<p>
					With this purchase you earn a $10 gift card for your next purchases
				</p>
			</StyledBoxText>
			<TotalBox />
		</StyledBoxGS>
	);
};

export default CheckOut;

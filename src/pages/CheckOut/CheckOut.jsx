import { useContext } from 'react';
import GamesCart from '../../components/GamesCart/GamesCart';
import TotalBox from '../../components/TotalBox/TotalBox';
import { COLORS } from '../../constants/colors';
import { StyledBoxGS } from '../GameStore/gameStore.styles';
import { StyledBoxText, StyledTitleCO } from './checkOut.styles';
import { CounterContext } from '../../contexts/CounterContent';

const CheckOut = () => {
	const { cart } = useContext(CounterContext);
	return (
		<StyledBoxGS $color={COLORS.black}>
			<StyledTitleCO>Checkout</StyledTitleCO>
			{cart.map(game => (
				<GamesCart key={game.id} />
			))}
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

import { useContext } from 'react';
import GamesCart from '../../components/GamesCart/GamesCart';
import TotalBox from '../../components/TotalBox/TotalBox';
import { COLORS } from '../../constants/colors';
import {
	StyledBoxCheckout,
	StyledBoxEmptyCart,
	StyledBoxText,
	StyledImg,
	StyledImgGift,
	StyledTitleCO,
	StylesListGamesCheckOut
} from './checkOut.styles';
import { CounterContext } from '../../contexts/CounterContent';

const CheckOut = () => {
	const { cart } = useContext(CounterContext);
	const totalNetPrice = cart.reduce((acc, item) => acc + item.price, 0);
	const giftCard = Math.floor(totalNetPrice * 0.1).toFixed(0);

	return (
		<StyledBoxCheckout $color={COLORS.black}>
			{cart.length !== 0 && (
				<>
					<StyledTitleCO>Checkout</StyledTitleCO>
					<StylesListGamesCheckOut>
						<div>
							{cart.map(game => (
								<GamesCart key={game.id} gameCart={game} />
							))}
						</div>
						<div>
							<StyledBoxText $color={COLORS.blackbox}>
								<StyledImgGift src='public/assets/images/gift.jpg' alt='' />
								<p>
									With this purchase you earn a ${giftCard} gift card for your
									next purchases
								</p>
							</StyledBoxText>
							<TotalBox totalNetPrice={totalNetPrice} />
						</div>
					</StylesListGamesCheckOut>
				</>
			)}
			{cart.length == 0 && (
				<StyledBoxEmptyCart>
					<StyledImg src='public/assets/images/empty-cart.jpg' alt='' />
					<p> AGREGA UN JUEGO!</p>
					<StyledImg
						src='public/assets/images/emoji-4827231_1280.webp'
						alt=''
					/>
				</StyledBoxEmptyCart>
			)}
		</StyledBoxCheckout>
	);
};

export default CheckOut;

import { COLORS } from '../../constants/colors';
import {
	StyledConfirmOrder,
	StyledOrderSummary,
	StyledRow
} from './totalBox.styles';

const TotalBox = ({ totalNetPrice }) => {
	const finalPrice = (totalNetPrice * 1.21).toFixed(2);

	return (
		<StyledOrderSummary $color={COLORS.blackbox}>
			<StyledRow>
				<p>Subtotal</p>
				<p>${totalNetPrice.toFixed(2)}</p>
			</StyledRow>
			<StyledRow>
				<p>IVA</p>
				<p>21%</p>
			</StyledRow>
			<StyledRow>
				<p>Total</p>
				<p>${finalPrice}</p>
			</StyledRow>
			<StyledConfirmOrder>Order Items</StyledConfirmOrder>
		</StyledOrderSummary>
	);
};
export default TotalBox;

import { COLORS } from '../../constants/colors';
import {
	StyledConfirmOrder,
	StyledOrderSummary,
	StyledRow
} from './totalBox.styles';

const TotalBox = () => {
	const iva = 21;

	return (
		<StyledOrderSummary $color={COLORS.blackbox}>
			<StyledRow>
				<p>Subtotal</p>
				<p>$34</p>
			</StyledRow>
			<StyledRow>
				<p>IVA</p>
				<p>{iva}%</p>
			</StyledRow>
			<StyledRow>
				<p>Total</p>
				<p>$454</p>
			</StyledRow>
			<StyledConfirmOrder>Order Items</StyledConfirmOrder>
		</StyledOrderSummary>
	);
};
export default TotalBox;

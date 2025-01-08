import { StyledBoxImgs, StyledClose, StyledHamburguer } from './menu.styles';

const Menu = ({ changeToggle, setToggle, toggle }) => {
	console.log(toggle);
	return (
		<StyledBoxImgs>
			<StyledHamburguer
				$isVisible={toggle}
				onClick={() => changeToggle(setToggle)}
				src='/assets/images/hamburguer.svg'
				alt=''
			/>
			<StyledClose
				src='public/assets/images/cross.svg'
				$isVisible={toggle}
				onClick={() => changeToggle(setToggle)}
			/>
		</StyledBoxImgs>
	);
};

export default Menu;

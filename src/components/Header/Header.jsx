import { useState } from 'react';
import { COLORS } from '../../constants/colors';
import Menu from '../Menu/Menu';
import {
	StyledBoxHeader,
	StyledBoxMobile,
	StyledLink,
	StyledListMenu,
	StyledLogo
} from './header.styles';
import { useLocation } from 'react-router-dom';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const location = useLocation();

	return (
		<StyledBoxHeader $color={COLORS.black} $isVisible={toggle}>
			<StyledBoxMobile>
				<picture>
					<source
						srcSet='/assets/images/logos/logo-desktop.png'
						media='(min-width: 768px)'
					/>
					<source
						srcSet='/assets/images/logos/logo-mobile.png'
						media='(min-width: 375px)'
					/>
					<StyledLogo src='/assets/images/logos/logo-mobile.png' />
				</picture>
				<Menu
					changeToggle={changeToggle}
					setToggle={setToggle}
					toggle={toggle}
				/>
			</StyledBoxMobile>
			<StyledListMenu $isVisible={toggle}>
				<li>
					<StyledLink
						$red={COLORS.red}
						$blue={COLORS.blue}
						to='/'
						$isActive={location.pathname === '/'}
					>
						Home
					</StyledLink>
				</li>
				<li>
					<StyledLink
						$red={COLORS.red}
						$blue={COLORS.blue}
						to='/gameStore'
						$isActive={location.pathname === '/gameStore'}
					>
						Game Store
					</StyledLink>
				</li>
				<li>
					<StyledLink
						$red={COLORS.red}
						$blue={COLORS.blue}
						to='/checkout'
						$isActive={location.pathname === '/checkout'}
					>
						Checkout
					</StyledLink>
				</li>
			</StyledListMenu>
		</StyledBoxHeader>
	);
};
const changeToggle = setToggle => {
	setToggle(estado => !estado);
};
export default Header;

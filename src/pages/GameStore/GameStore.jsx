import { useState } from 'react';
import Game from '../../components/Game/Game';
import { COLORS } from '../../constants/colors';
import { GAMES } from '../../constants/games';
import {
	StyledBoxGS,
	StyledCheckboxLabel,
	StyledChevronDown,
	StyledChevronUp,
	StyledFilterGames,
	StyledFilters,
	StyledGames,
	StyledParam,
	StyledPlattformInput,
	StyledSearchBox,
	StyledSecondTitleBox,
	StyledTitle,
	StyledTitleP
} from './gameStore.styles';

const GameStore = () => {
	const [togglePLat, setTogglePlat] = useState(false);

	const plattforms = ['PC', 'Play Station 5', 'Play Station 4'];
	console.log(togglePLat);

	return (
		<StyledBoxGS $color={COLORS.black}>
			<StyledTitle>Game Store</StyledTitle>
			<StyledSearchBox>
				<img src='public/assets/images/search.svg' alt='' />
				<StyledParam type='text' placeholder='Search your game...' />
			</StyledSearchBox>
			<StyledFilterGames>
				<StyledFilters $colorb={COLORS.brown}>
					<StyledSecondTitleBox>
						<StyledTitleP onClick={() => changeTogglePLat(setTogglePlat)}>
							Plattforms
						</StyledTitleP>
						<StyledChevronDown
							$togglePlat={togglePLat}
							src='public/assets/images/chevron-down.svg'
							alt=''
						/>
						<StyledChevronUp
							$togglePlat={togglePLat}
							src='public/assets/images/chevron-up.svg'
							alt=''
						/>
					</StyledSecondTitleBox>
					{plattforms.map(plattform => (
						<StyledCheckboxLabel $togglePlat={togglePLat} key={plattform}>
							<StyledPlattformInput type='checkbox' />
							{plattform}
						</StyledCheckboxLabel>
					))}
				</StyledFilters>
				<StyledGames>
					{GAMES.map(game => (
						<Game key={game.id} game={game} />
					))}
				</StyledGames>
			</StyledFilterGames>
		</StyledBoxGS>
	);
};

const changeTogglePLat = setTogglePlat => {
	setTogglePlat(estado => !estado);
};

export default GameStore;

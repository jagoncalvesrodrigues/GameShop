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
	const [selectedPlat, setSelectedPlat] = useState([]);

	console.log(selectedPlat);

	const gamesFiltered = filtergames(GAMES, selectedPlat);
	const platforms = ['PC', 'PS5', 'PS4'];
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
					{platforms.map(platform => (
						<StyledCheckboxLabel $togglePlat={togglePLat} key={platform}>
							<StyledPlattformInput
								onChange={() =>
									handlePlatform(platform, selectedPlat, setSelectedPlat)
								}
								value={platform}
								type='checkbox'
							/>
							{platform}
						</StyledCheckboxLabel>
					))}
				</StyledFilters>
				<StyledGames>
					{gamesFiltered.map(game => (
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

//manejamos el array para saber por cuales plataformas filtrar
const handlePlatform = (platform, selectedPlat, setSelectedPlat) => {
	if (selectedPlat.includes(platform)) {
		//eliminamos el valor si ya esta
		setSelectedPlat(selectedPlat.filter(plat => plat !== platform));
	} else {
		//agregamos el valor filtrado al array
		setSelectedPlat([...selectedPlat, platform]);
	}
};

const filtergames = (games, selectedPlat) => {
	return games.filter(game => {
		if (selectedPlat.length === 0) {
			return true;
		} else {
			return selectedPlat.includes(game.platform);
		}
	});
};

export default GameStore;

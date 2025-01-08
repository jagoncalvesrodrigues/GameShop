import { COLORS } from '../../constants/colors';
import { StyledBoxHome, StyledButtonHome, StyledText } from './home.styles';

const Home = () => {
	return (
		<StyledBoxHome $color={COLORS.black}>
			<h1>Gamer Shop</h1>
			<picture>
				<source
					srcSet='public/assets/images/banner-desktop.jpg'
					media='(min-width: 768px)'
				/>
				<source
					srcSet='public/assets/images/banner-mobile.jpg'
					media='(min-width: 375px)'
				/>
				<img src='public/assets/images/banner-mobile.jpg' alt='' />
			</picture>
			<StyledText>
				Welcome to GAMER SHOP Discover a world of gaming excitement at your
				fingertips! From the latest blockbusters to timeless classics, we offer
				an extensive collection of games for all platforms.
			</StyledText>
			<StyledText>
				🎮 Why Choose Us? Wide Selection: Thousands of titles across all genres.
				Great Deals: Competitive prices and exclusive offers. Instant Access:
				Digital downloads available 24/7. Trusted Service: Fast and secure
				shopping experience. Level up your gaming experience today! Explore,
				shop, and play like never before.
			</StyledText>

			<StyledButtonHome $colorb={COLORS.blue}>
				Go To Game Store
			</StyledButtonHome>
			{/* <h1>HOME</h1>
            const { counter, setCounter } = useContext(CounterContext);
			<p>{counter}</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt earum
				molestias voluptatibus ut sit iste quidem sunt commodi fugiat non,
				tenetur excepturi molestiae ratione sed voluptatum ullam amet fuga
				dolores?
			</p>
			<button onClick={() => setCounter(counter - 1)}>-1</button>
			<button onClick={() => setCounter(0)}>Reset</button>
			<button onClick={() => setCounter(counter + 1)}>+1</button> */}
		</StyledBoxHome>
	);
};

export default Home;

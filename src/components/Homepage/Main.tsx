import MainOne from './MainOne';
import MainTwo from './MainTwo';
import MainThree from './MainThree';
import MainFour from './MainFour';
import MainFive from './MainFive';
import MainSix from './MainSix';
import MainSeven from './MainSeven';
import MainEight from './MainEight';
import MainNine from './MainNine';

type Props = {}

const Main = (props: Props) => {
	return (
		<main>
			<MainOne />
			<div className="my-10 mx-auto w-3 h-44" style={{background:"linear-gradient(180deg, #93f, #953dac 27.08%, #181717)"}}></div>
			<MainTwo />
			<MainThree />
			<MainFour />
			<MainFive />
			<MainSix />
			<MainSeven />
			<MainEight />
			<MainNine />
		</main>
	)
}

export default Main
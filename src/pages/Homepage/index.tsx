import MainOne from '../../components/Homepage/Main/MainOne';
import MainTwo from '../../components/Homepage/Main/MainTwo';
import MainThree from '../../components/Homepage/Main/MainThree';
import MainFour from '../../components/Homepage/Main/MainFour';
import MainFive from '../../components/Homepage/Main/MainFive';
import MainSix from '../../components/Homepage/Main/MainSix';
import MainSeven from '../../components/Homepage/Main/MainSeven';
import MainEight from '../../components/Homepage/Main/MainEight';
import MainNine from '../../components/Homepage/Main/MainNine';
import "./homepage.css";

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
			<hr className="h-px my-8 border-0 bg-zinc-600" />
		</main>
	)
}

export default Main
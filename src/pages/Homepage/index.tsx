import "./homepage.css";
import NavBar from "components/NavBar";
import AnotherNav from "components/NavBar/AnotherNav";
import Main from "../../components/Homepage/Main";
import FooterComp from "components/Footer";

type Props = {};

const Homepage = (props: Props) => {
	return (
		<div className='overflow-y-auto h-screen m-0'>
			<div className='block box-border'>
				<div className='home'>{/* className='bg-front-dark bg-front-width' */}
					<div className="sticky top-0 z-[100]">
						<AnotherNav />
						<NavBar />
					</div>
					<Main />
					<FooterComp />
				</div>
			</div>
		</div>
	)
}

export default Homepage
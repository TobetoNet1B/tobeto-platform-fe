import "./homepage.css";
import NavBar from "components/NavBar";
import Main from "./Main";
import AnotherNav from "components/NavBar/AnotherNav";
import FooterComp from "components/Footer";

type Props = {};

const Homepage = (props: Props) => {
	return (
		<div className='overflow-y-auto h-screen m-0'>
			<div className='block box-border font-mono'>
				<div className='bg-[#181717]' style={{ height: "0.5rem", overflow: "visible", width: "auto" }}>{/* className='bg-front-dark bg-front-width' */}
					<AnotherNav />
					<NavBar />
					<Main />
					<FooterComp />
				</div>
			</div>
		</div>
	)
}

export default Homepage
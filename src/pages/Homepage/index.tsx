import "./homepage.css";
import NavBar from "components/NavBar";
import AppealNav from "components/NavBar/AppealNav";
import VidNav from "components/NavBar/VidNav";
import Main from "../../components/Homepage/Main";
import FooterComp from "components/Footer";
import { useSelector } from "react-redux";
import { SelectIsLoggedIn } from "store/Auth/AuthSlice";

type Props = {};

const Homepage = (props: Props) => {

	const isLoggedIn = useSelector(SelectIsLoggedIn);

	return (
		<div className='overflow-y-auto h-screen m-0'>
			<div className='block box-border'>
				<div className='home'>{/* className='bg-front-dark bg-front-width' */}
					<div className="sticky top-0 z-[100]">
						{!isLoggedIn ? <AppealNav /> : <VidNav />}
						<NavBar />
					</div>
					<Main />
					<hr className="h-px my-8 border-0 bg-zinc-600" />
					<FooterComp />
				</div>
			</div>
		</div>
	)
}

export default Homepage
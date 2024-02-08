import NavBar from "components/Homepage/NavBar";
import AppealNav from "components/Homepage/NavBar/AppealNav";
import VidNav from "components/Homepage/NavBar/VidNav";
import FooterComp from "components/Homepage/Footer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {

	const isLoggedIn = useSelector((state:any) => state.auth.isAuthenticated);


	return (
		<div className='overflow-y-auto h-screen m-0'>
			<div className='block box-border'>
				<div className='bg-[rgb(24_23_23)] w-auto overflow-visible'>
					<div className="sticky top-0 z-[100]">
						{!isLoggedIn ? <AppealNav /> : <VidNav />}
						<NavBar />
					</div>
					<Outlet />
					<FooterComp />
				</div>
			</div>
		</div>
	)
}

export default Home
import Calendar from "components/Calendar/Calendar";
import Announcement from "pages/Announcement/Announcement";
import Education from "pages/Education/Education";
import Homepage from "pages/Homepage";
import MyProfile from "pages/MyProfile/MyProfile";
import NotFound from "pages/NotFound";
import Platform from "pages/Platform/Platform";
import SignInPage from "pages/SignInPage/SignInPage";
import SignUpPage from "pages/SignUpPage/SignUpPage";
import {Route, Routes} from "react-router-dom";


type Props = {};

const RouteDefinitions = (props: Props) => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/giris" element={<SignInPage />} />
			<Route path="/kayit-ol" element={<SignUpPage />} />
			<Route path="/platform" element={<Platform/>} />
			<Route path="/profilim" element={<MyProfile/>} />
			<Route path="/egitimlerim" element={<Education />} />
			<Route path="/duyurularım" element={<Announcement />} />
			<Route path="/takvim" element={<Calendar />} />
		</Routes>
	);
};

export default RouteDefinitions;
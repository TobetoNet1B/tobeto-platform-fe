import Calendar from "components/Calendar/Calendar";
import Abilities from "components/ProfileInfo/Abilities";
import PersonalInformations from "components/ProfileInfo/PersonalInformations";
import Announcement from "pages/Announcement/Announcement";
import Education from "pages/Education/Education";
import Evaluations from "pages/Evaluations/Evaluations";
import Homepage from "pages/Homepage";
import MyProfile from "pages/MyProfile/MyProfile";
import NotFound from "pages/NotFound";
import Platform from "pages/Platform/Platform";
import ProfileInfo from "pages/ProfileInfo";
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
			<Route path="/egitimlerim" element={<Education />} />
			<Route path="/duyurularım" element={<Announcement />} />
			<Route path="/takvim" element={<Calendar />} />
			<Route path="/degerlendirmeler" element={<Evaluations />} />
			<Route path="/profilim" >
				<Route index={true} element={<MyProfile/>} />
				<Route path="profilimi-duzenle" element={<ProfileInfo />}>
					<Route path="kisisel-bilgilerim" element={<PersonalInformations />} />
					<Route path="deneyimlerim" element />
					<Route path="egitim-hayatim" element />
					<Route path="yetkinliklerim" element={<Abilities />} />
					<Route path="sertifikalarim" element />
					<Route path="medya-hesaplarim" element />
					<Route path="yabanci-dil" element />
					<Route path="ayarlar" element />
				</Route>
			</Route>
		</Routes>
	);
};

export default RouteDefinitions;
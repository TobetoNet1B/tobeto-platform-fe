import { Route, Routes } from "react-router-dom";
import Calendar from "pages/Calendar/Calendar";
import Abilities from "components/ProfileInfo/Abilities";
import Experience from "components/ProfileInfo/Experience/Experience";
import MyEducation from "components/ProfileInfo/MyEducation/MyEducation";
import PersonalInformations from "components/ProfileInfo/PersonalInformations";
import Announcement from "pages/Announcement/Announcement";
import Education from "pages/Education/Education";
import Evaluations from "pages/Evaluations/Evaluations";
import Home from "layout/Home";
import MyProfile from "pages/MyProfile/MyProfile";
import NotFound from "pages/NotFound";
import PlatformMain from "pages/Platform";
import ProfileInfo from "pages/ProfileInfo";
import SignInPage from "pages/SignInPage/SignInPage";
import SignUpPage from "pages/SignUpPage/SignUpPage";
import ModuleSet from "pages/ModuleSet/ModuleSet";
import ForeignLanguage from "components/ProfileInfo/ForeignLanguage/ForeignLanguage";
import MyCertificates from "components/ProfileInfo/MyCertificates";
import SocialMedia from "components/ProfileInfo/SocialMedia/SocialMedia";
import Setting from "components/ProfileInfo/Settings/Setting";
import Main from "pages/Homepage";
import Platform from "layout/Platform";

type Props = {};

const RouteDefinitions = (props: Props) => {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route index={true} element={<Main />} />
				<Route path="/giris" element={<SignInPage />} />
				<Route path="/kayit-ol" element={<SignUpPage />} />
			</Route>
			<Route element={<Platform />}>
				<Route path="/platform" element={<PlatformMain />} />
				<Route path="/egitimlerim" element={<Education />} />
				<Route path="/duyurularim" element={<Announcement />} />
				<Route path="/takvim" element={<Calendar />} />
				<Route path="/degerlendirmeler" element={<Evaluations />} />
				<Route path="/profilim">
					<Route index={true} element={<MyProfile />} />
					<Route path="profilimi-duzenle" element={<ProfileInfo />}>
						<Route path="kisisel-bilgilerim" element={<PersonalInformations />} />
						<Route path="deneyimlerim" element={<Experience />} />
						<Route path="egitim-hayatim" element={<MyEducation />} />
						<Route path="yetkinliklerim" element={<Abilities />} />
						<Route path="sertifikalarim" element={<MyCertificates />} />
						<Route path="medya-hesaplarim" element={<SocialMedia />} />
						<Route path="yabanci-dil" element={<ForeignLanguage />} />
						<Route path="ayarlar" element={<Setting />} />
					</Route>
				</Route>
			</Route>
			<Route path="/moduleset" element={<ModuleSet />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default RouteDefinitions;
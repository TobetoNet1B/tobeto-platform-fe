import { Route, Routes } from "react-router-dom";
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
import Confirmationpage from "components/Confirmationpage/Confirmationpage";
import CalendarPage from "pages/Calendar";
import PrivateRoutes from "./PrivateRoutes";
import PrivateRoutesWhenLoginned from "./PrivateRoutesWhenLoginned";
import Contact from "components/Homepage/Footer/Contact";
import LessonVideoUpload from "admin/pages/Lesson/LessonVideoUpload";
import AdminLayout from "admin/AdminLayout";
import AdminMain from "admin/components/AdminMain/AdminMain";
import AdminContact from "admin/pages/Contact/AdminContact";
import AdminSendMessage from "admin/pages/Contact/AdminSendMessage";
import AdminInboxMessage from "admin/pages/Contact/AdminInboxMessage";
import Classrom from "admin/pages/Classroom/Classroom";
import ClassroomAdd from "admin/pages/Classroom/ClassroomAdd";
import Student from "admin/pages/Student/Student";
import CountryAdd from "admin/pages/Student/CountryAdd";
import ForeignLangAdd from "admin/pages/Student/ForeignLangAdd";
import SocialMediaAdd from "admin/pages/Student/SocialMediaAdd";
import StudentInfo from "admin/pages/Student/StudentInfo";
import AdminAnnouncement from "admin/pages/Announcement/AdminAnnouncement";
import AnnouncementAdd from "admin/pages/Announcement/AnnouncementAdd";

type Props = {};

const RouteDefinitions = (props: Props) => {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route index={true} element={<Main />} />
				<Route element={<PrivateRoutesWhenLoginned />}>
					<Route path="/giris" element={<SignInPage />} />
					<Route path="/kayit-ol" element={<SignUpPage />} />
					<Route path="/confirm" element={<Confirmationpage />} />
				</Route>
				<Route path="/iletisim" element={<Contact />}></Route>
			</Route>
			<Route element={<PrivateRoutes />}>
				<Route element={<Platform />}>
					<Route path="/platform" element={<PlatformMain />} />
					<Route path="/egitimlerim" element={<Education />} />
					<Route path="/duyurularim" element={<Announcement />} />
					<Route path="/takvim" element={<CalendarPage />} />
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
				<Route path="/moduleset/:id" element={<ModuleSet />} />
			</Route>
			<Route path="*" element={<NotFound />} />
			<Route path="/admin" element={<AdminLayout />}>
				<Route index={true} element={<AdminMain />} />
				<Route path="LessonVideoUpload" element={<LessonVideoUpload />} />
				<Route path="contact" element={<AdminContact />}>
					<Route path="admininboxmessage" element={<AdminInboxMessage />} />
					<Route path="adminsendmessage" element={<AdminSendMessage />} />
				</Route>
				<Route path="Classroom" element={<Classrom />} />
				<Route path="ClassroomAdd" element={<ClassroomAdd />} />
				<Route path="Student" element={<Student />} />
				<Route path="StudentInfo" element={<StudentInfo />} />
				<Route path="CountryAdd" element={<CountryAdd />} />
				<Route path="ForeignLangAdd" element={<ForeignLangAdd />} />
				<Route path="SocialMediaAdd" element={<SocialMediaAdd />} />
				<Route path="Announcement" element={<AdminAnnouncement />} />
				<Route path="AnnouncementAdd" element={<AnnouncementAdd />} />
			</Route>
		</Routes>
	);
};

export default RouteDefinitions;
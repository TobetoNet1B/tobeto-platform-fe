import { BiUser, BiBriefcaseAlt, BiBookOpen, BiAward, BiWorld } from "react-icons/bi";
import { PiCertificateBold, PiTranslate } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


type Props = {}

const SideBar = (props: Props) => {
	return (
		<ul className="menu lg:menu-vertical menu-horizontal flex-nowrap items-start lg:text-lg lg:gap-3 gap-0 text-gray-500">
			<li className="lg:w-full w-fit px-0">
				<Link to="kisisel-bilgilerim">
					<BiUser className="lg:h-5 lg:w-5 h-7 w-7" />
					<span className="lg:block hidden">Kişisel Bilgilerim</span>
				</Link>
			</li>
			<li className="lg:w-full w-fit px-0">
				<Link to="deneyimlerim">
					<BiBriefcaseAlt className="lg:h-5 lg:w-5 h-7 w-7" />
					<span className="lg:block hidden">Deneyimlerim</span>
				</Link>
			</li>
			<li className="lg:w-full w-fit px-0">
				<Link to="egitim-hayatim">
					<BiBookOpen className="lg:h-5 lg:w-5 h-7 w-7" />
					<span className="lg:block hidden">Eğitim Hayatım</span>
				</Link>
			</li>
			<li className="lg:w-full w-fit px-0">
				<Link to="yetkinliklerim">
					<BiAward className="lg:h-5 lg:w-5 h-7 w-7" />
					<span className="lg:block hidden">Yetkinliklerim</span>
				</Link>
			</li>
			<li className="lg:w-full w-fit px-0">
				<Link to="sertifikalarim">
					<PiCertificateBold className="lg:h-5 lg:w-5 h-7 w-7" />
					<span className="lg:block hidden">Sertifikalarım</span>
				</Link>
			</li>
			<li className="lg:w-full w-fit px-0">
				<Link to="medya-hesaplarim">
					<BiWorld className="lg:h-5 lg:w-5 h-7 w-7" />
					<span className="lg:block hidden">Medya Hesaplarım</span>
				</Link>
			</li>
			<li className="lg:w-full w-fit px-0">
				<Link to="yabanci-dil">
					<PiTranslate className="lg:h-5 lg:w-5 h-7 w-7" />
					<span className="lg:block hidden">Yabancı Dillerim</span>
				</Link>
			</li>
			<li className="lg:w-full w-fit px-0">
				<Link to="ayarlar">
					<IoSettingsOutline className="lg:h-5 lg:w-5 h-7 w-7" />
					<span className="lg:block hidden">Ayarlar</span>
				</Link>
			</li>
		</ul>
	)
}

export default SideBar
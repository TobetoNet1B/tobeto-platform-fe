import { BiUser, BiBriefcaseAlt, BiBookOpen, BiAward, BiWorld } from "react-icons/bi";
import { PiCertificateBold, PiTranslate } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


type Props = {}

const SideBar = (props: Props) => {
	return (
		<ul className="menu lg:menu-vertical menu-horizontal rounded-box items-start text-lg leading-9 text-gray-500">
			<li className="w-full">
				<Link to="kisisel-bilgilerim">
					<BiUser className="h-5 w-5" />
					<span>Kişisel Bilgilerim</span>
				</Link>
			</li>
			<li className="w-full">
				<Link to="deneyimlerim">
					<BiBriefcaseAlt className="h-5 w-5" />
					<span>Deneyimlerim</span>
				</Link>
			</li>
			<li className="w-full">
				<Link to="egitim-hayatim">
					<BiBookOpen className="h-5 w-5" />
					<span>Eğitim Hayatım</span>
				</Link>
			</li>
			<li className="w-full">
				<Link to="yetkinliklerim">
					<BiAward className="h-5 w-5" />
					<span>Yetkinliklerim</span>
				</Link>
			</li>
			<li className="w-full">
				<Link to="sertifikalarim">
					<PiCertificateBold className="h-5 w-5" />
					<span>Sertifikalarım</span>
				</Link>
			</li>
			<li className="w-full">
				<Link to="medya-hesaplarim">
					<BiWorld className="h-5 w-5" />
					<span>Medya Hesaplarım</span>
				</Link>
			</li>
			<li className="w-full">
				<Link to="yabanci-dil">
					<PiTranslate className="h-5 w-5" />
					<span>Yabancı Dillerim</span>
				</Link>
			</li>
			<li className="w-full">
				<Link to="ayarlar">
					<IoSettingsOutline className="h-5 w-5" />
					<span>Ayarlar</span>
				</Link>
			</li>
		</ul>
	)
}

export default SideBar
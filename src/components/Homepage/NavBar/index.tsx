import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SelectIsAuthenticated, logout } from 'store/Auth/AuthSlice';
import './navbar.css'

export default function NavBar() {

	const isAuthenticated = useSelector(SelectIsAuthenticated);
	const dispatch = useDispatch();

	return (
		<div className="navbar w-full px-6 !py-10 h-16 !bg-[#181717] text-white">
			<div className="navbar-start">
				<Link to={"/"} className="btn btn-ghost text-xl">
					<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75" className="mr-3 h-6 sm:h-9" />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 text-lg xl:gap-3 gap-1">
					<li className="py-2"><Link to={"#"}>Biz Kimiz?</Link></li>
					<div className="dropdown dropdown-hover">
						<div tabIndex={0} className="py-2">Neler Sunuyoruz?</div>
						<ul tabIndex={0} className="dropdown-content z-[1] menu px-0 shadow rounded-md w-auto !bg-[#93f] text-white items-start">
							<li><Link to={"#"}>Bireyler İçin</Link></li>
							<li><Link to={"#"}>Kurumlar İçin</Link></li>
						</ul>
					</div>
					<li className="py-2 pr-0"><Link to={"#"}>Katalog</Link></li>
					<li className="py-2 pl-0"><Link to={"#"}>Codecademy</Link></li>
					<div className="dropdown dropdown-hover">
						<div tabIndex={0} className="py-2">Tobeto'da Bu Ay</div>
						<ul tabIndex={0} className="dropdown-content z-[1] menu px-0 shadow rounded-md w-auto !bg-[#93f] text-white items-start">
							<li><Link to={"#"}>Blog</Link></li>
							<li><Link to={"#"}>Basında Biz</Link></li>
							<li><Link to={"#"}>Takvim</Link></li>
							<li><Link to={"#"}>İstanbul Kodluyor</Link></li>
						</ul>
					</div>
				</ul>
			</div>
			{!isAuthenticated ?
				<div className="navbar-end gap-3 lg:flex hidden">
					<Link to={"/giris"} className="btn btn-sm h-9 px-4 btn-outline rounded-full text-white hover:bg-transparent hover:border-white">
						Giriş Yap
					</Link>
					<Link to={"/kayit-ol"} className="btn btn-sm h-9 px-4 border-none relative btn-rainbow inline-flex items-center justify-center font-bold">
						Ücretsiz Üye Ol
					</Link>
				</div>
				:
				<div className="navbar navbar-end">
					<div className="dropdown dropdown-end">
						<div tabIndex={0} role="button" className="btn btn-ghost btn-circle flex-nowrap avatar lg:min-w-52 lg:bg-slate-200 text-slate-900 hover:text-slate-200">
							<div className="w-10 flex rounded-full">
								<img alt="Tailwind CSS Navbar component" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=48&q=75" />
							</div>
							<span className="lg:flex hidden">Tobeto Pair Three</span>
						</div>
						<ul tabIndex={0} className="mt-3 z-[1] py-2 px-0 text-end shadow menu menu-sm dropdown-content rounded-box min-w-32 w-fit !bg-[#93f] text-white">
							<li className="w-full"><Link to="profilim" className="block text-right">Profile</Link></li>
							<li className="w-full"><Link to="profilim/profilimi-duzenle/kisisel-bilgilerim" className="block text-right">Settings</Link></li>
							<li className="w-full"><Link to="/giris" className="block text-right" onClick={() => dispatch(logout())}>Logout</Link></li>
						</ul>
					</div>
				</div>
			}
		</div>
	);
}

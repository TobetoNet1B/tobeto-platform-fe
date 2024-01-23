import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogInLogOut, SelectIsLoggedIn } from "store/Auth/AuthSlice";

export default function NavBar() {

	const isLoggedIn = useSelector(SelectIsLoggedIn);
	const dispatch = useDispatch();

	return (
		<div className="navbar w-full px-6 !py-10 h-16 !bg-[#181717] text-white">
			<div className="navbar-start">
				<a className="btn btn-ghost text-xl">
					<img src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75" className="mr-3 h-6 sm:h-9" />
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 text-lg xl:gap-3 gap-1">
					<li className="py-2"><a>Biz Kimiz?</a></li>
					<div className="dropdown dropdown-hover">
						<div tabIndex={0} className="py-2">Neler Sunuyoruz?</div>
						<ul tabIndex={0} className="dropdown-content z-[1] menu px-0 shadow rounded-md w-auto !bg-[#93f] text-white items-start">
							<li><a>Bireyler İçin</a></li>
							<li><a>Kurumlar İçin</a></li>
						</ul>
					</div>
					<li className="py-2 pr-0"><a>Katalog</a></li>
					<li className="py-2 pl-0"><a>Codecademy</a></li>
					<div className="dropdown dropdown-hover">
						<div tabIndex={0} className="py-2">Tobeto'da Bu Ay</div>
						<ul tabIndex={0} className="dropdown-content z-[1] menu px-0 shadow rounded-md w-auto !bg-[#93f] text-white items-start">
							<li><a>Blog</a></li>
							<li><a>Basında Biz</a></li>
							<li><a>Takvim</a></li>
							<li><a>İstanbul Kodluyor</a></li>
						</ul>
					</div>
				</ul>
			</div>
			{!isLoggedIn ?
				<div className="navbar-end gap-3 lg:flex hidden">
					<a className="btn btn-outline rounded-full text-white" onClick={() => dispatch(LogInLogOut())}>Giriş Yap</a>
					<a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full !min-w-max">
						<span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]
				 		group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
						<span className="relative px-6 py-3 transition-all ease-out bg-[#181717] rounded-full group-hover:bg-opacity-0 duration-400">
							<span className="relative text-white">Ücretsiz Üye Ol</span>
						</span>
					</a>
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
							<li className="w-full"><Link to="" className="block text-right" onClick={() => dispatch(LogInLogOut())}>Logout</Link></li>
						</ul>
					</div>
				</div>
			}
		</div>
	);
}

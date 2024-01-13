export default function NavBar() {
	return (
		<div className="navbar w-full px-6 h-16 !bg-[#181717] text-white !text-5xl">
			<div className="navbar-start">
				<a className="btn btn-ghost text-xl">
					<img src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75" className="mr-3 h-6 sm:h-9" />
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li className="py-2"><a>Biz Kimiz?</a></li>
					<div className="dropdown dropdown-hover">
						<div tabIndex={0} className="py-2">Neler Sunuyoruz?</div>
						<ul tabIndex={0} className="dropdown-content z-[1] menu px-0 shadow rounded-md w-auto !bg-[#93f] text-white items-start">
							<li><a>Bireyler İçin</a></li>
							<li><a>Kurumlar İçin</a></li>
						</ul>
					</div>
					<li className="py-2"><a>Katalog</a></li>
					<li className="py-2"><a>Codecademy</a></li>
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
			<div className="navbar-end gap-3">
				<a className="btn btn-outline rounded-full text-white">Giriş Yap</a>
				<a className="btn btn-outline rounded-full text-white">Ücretsiz Üye Ol</a>
			</div>
		</div>
	);
}

import { Link } from "react-router-dom";
import "./notFound.css";

export default function NotFound() {
	return (
		<div className="bg-purple min-h-lvh">
			<div className="bg-purple stars">
				<div className="custom-navbar">
					<div className="brand-logo">
						<img
							alt=""
							src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
							width="150px"
						/>
					</div>
					<div className="navbar-links">
						<ul>
							<li>
								<Link className="nvb" to="/">Ana Sayfa</Link>
							</li>
							<li>
								<Link className="nvb" to="/giris">Giriş</Link>
							</li>
							<li>
								<Link className="nvb" to="/kayit-ol">Kayıt Ol</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="central-body">
					<img
						alt=""
						className="image-404"
						src="https://www.salehriaz.com/404Page/img/404.svg"
						width="300px"
					/>
					<Link to="/" className="btn-go-home">
						Ana Sayfaya Dön
					</Link>
				</div>
				<div className="objects">
					<img
						alt=""
						className="object_rocket"
						src="https://www.salehriaz.com/404Page/img/rocket.svg"
						width="40px"
					/>
					<div className="earth-moon">
						<img
							alt=""
							className="object_earth"
							src="https://www.salehriaz.com/404Page/img/earth.svg"
							width="100px"
						/>
						<img
							alt=""
							className="object_moon"
							src="https://www.salehriaz.com/404Page/img/moon.svg"
							width="80px"
						/>
					</div>
					<div className="box_astronaut">
						<img
							alt=""
							className="object_astronaut"
							src="https://cdni.iconscout.com/illustration/premium/thumb/astronaut-dancing-on-rocket-4278584-3550529.png?f=webp"
							width="140px"
						/>
					</div>
				</div>
				<div className="glowing_stars">
					<div className="star" />
					<div className="star" />
					<div className="star" />
					<div className="star" />
					<div className="star" />
				</div>
			</div>
		</div>
	);
}

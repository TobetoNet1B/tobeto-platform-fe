import { Link } from "react-router-dom";
import "pages/Platform/platform.css";

import { useState } from "react";
import DropdownItem from "./DropdownItem";

export default function PlatformNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="z-20 border-b border-gray-200">
			<div className="flex items-center justify-between mx-auto p-4">

				{/* Left */}
				<div className="flex items-center rtl:space-x-reverse">
					<Link
						to="/platform"
						style={{ display: "flex", alignItems: "center" }}
					>
						<img
							alt=""
							className="max-h-9 justify-start"
							src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75"
						/>

						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
					</Link>
				</div>

				{/* Mid */}
				<div
					className={`${isOpen ? "flex" : "hidden"
						} w-full flex-grow md:flex md:items-center md:w-auto mt-4 md:mt-0 justify-center`}
				>
					<ul className="flex flex-col md:flex-row  rtl:space-x-reverse whitespace-nowrap">
						<li>
							<Link
								to="/platform"
								className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								Ana Sayfa
							</Link>
						</li>
						<li>
							<Link
								to="/profilim"
								className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								Profilim
							</Link>
						</li>
						<li>
							<Link
								to="/degerlendirmeler"
								className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								Değerlendirmeler
							</Link>
						</li>
						<li>
							<Link
								to="/katalog"
								className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								Katalog
							</Link>
						</li>
						<li>
							<Link
								to="/takvim"
								className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								Takvim
							</Link>
						</li>
						<li>
							<Link
								to="https://tobeto.com/istanbul-kodluyor"
								className="font-medium block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							>
								İstanbul Kodluyor
							</Link>
						</li>
					</ul>
				</div>

				{/* Right */}
				<div
					className="tobetoLogo flex items-center"
				>
					<Link to="/">
						<img
							style={{
								maxWidth: "25px",
								maxHeight: "25px",
								marginRight: "0.5rem",
								boxShadow: "0 2px 20px rgba(64, 64, 64, 0.25)",
							}}
							alt="Tobeto Logo"
							src="https://tobeto.com/_next/static/media/tbtlogo-gradient.7979f966.svg"
						/>
					</Link>

					<DropdownItem />

					<button
						onClick={toggleMenu}
						className="md:hidden flex items-center justify-center w-10 h-10 border border-transparent rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
					>
						{isOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>


			</div>
		</nav>
	);
}

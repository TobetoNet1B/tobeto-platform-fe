import React from 'react'
import { Link } from "react-router-dom";


type Props = {}

const StudentInfo = (props: Props) => {
	return (
		<div className="flex flex-col items-center min-h-screen">
			<h1 className="text-center mb-8 font-extrabold text-2xl">Öğrenci Bilgi Ekleme</h1>
			<Link to={`/admin/CountryAdd`}>
				<button
					type="button"
					className="mb-4 text-white bg-[#1C64F2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Ülke Ekleme
				</button>
			</Link>
			<Link to={`/admin/ForeignLangAdd`}>
				<button
					type="button"
					className="mb-4 text-white bg-[#1C64F2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Yabancı Dil Ekleme
				</button>
			</Link>
			<Link to={`/admin/SocialMediaAdd`}>
				<button
					type="button"
					className="text-white bg-[#1C64F2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Sosyal Medya Ekleme
				</button>
			</Link>
		</div>

	)
}

export default StudentInfo
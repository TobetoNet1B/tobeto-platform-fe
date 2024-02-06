import React, { useEffect, useState } from 'react'
import {
	HiMiniPencil,
	HiOutlineGlobeAlt,
	HiOutlineHome
} from "react-icons/hi2";
import { FaFileImage, FaLinkedin, FaShareAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import HeatMap from '@uiw/react-heat-map';
import { Link } from 'react-router-dom';
import StudentService from 'services/studentService';
import { GetStudentResponse } from 'models/responses/students/getStudentResponse';


ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

type Props = {}

const MyProfile = (props: Props) => {
	const data = {
		labels: ['','','','','','','',''],
		datasets: [{
			label: "",
			data: [4.4, 4.9, 4.4, 4.7, 4.8, 4.9, 4.8, 4.6],
			fill: true,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgb(255, 99, 132)',
			pointBackgroundColor: 'rgb(255, 99, 132)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(255, 99, 132)',
			spanGaps: true
		},
		{
			label: '',
			data: [1.0, 2.0, 3.0, 4.0, 5.0, 5.0, 5.0, 5.0],
			backgroundColor: 'rgba(54, 162, 235, 0)',
			borderColor: 'rgba(54, 162, 235,0)'
		}]
	};

	const value = [
		{ date: '2024/01/11', count: 2 },
		{ date: '2024/04/12', count: 2 },
		{ date: '2024/05/01', count: 5 },
		{ date: '2024/05/02', count: 5 },
		{ date: '2024/05/03', count: 1 },
		{ date: '2024/05/04', count: 11 },
		{ date: '2024/05/08', count: 32 },
	];

	const [student, setStudent] = useState<GetStudentResponse>({} as GetStudentResponse);
	useEffect(() => {
		let studentService = StudentService;
		studentService
			.getById(localStorage.userId)
			.then((result) => setStudent(result.data as GetStudentResponse));
	}, []);
	console.log(student);
	
	return (
		<div className='h-screen'>
			<div className='max-w-[1110px] mx-auto'>
				
				<div className="mt-6 mb-2 ">
					<div className="flex justify-end items-center">

						<Link to="profilimi-duzenle/kisisel-bilgilerim">
							<button className="btn btn-circle btn-ghost">
								<HiMiniPencil />
							</button>
						</Link>

						<div className="dropdown dropdown-end">
							<div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-md text-black">
								<FaShareAlt />
							</div>
							<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
								<li><a>Profilimi paylaş</a></li>
								<li><a>Profil Linki</a></li>
							</ul>
						</div>

					</div>
				</div>

				<div className='lg:flex'>
					<div className="lg:w-1/3 mr-2">

						<div className='col-12 '>
							<div className="card rounded-2xl border-gray-50 dark:border-gray-50 max-w-full mr-2 bg-gray-50 dark:bg-gray-50 shadow-2xl ">
								<div className="flex flex-col">

									<div className=''>
										<div className="card rounded-2xl w-full p-4 max-h-48  bg-gradient-to-t from-[#5056C9] to-[#8D92FA] items-center">
											<img
												src={student.imgUrl}
												alt="profil-picture"
												className="mb-1 mt-1 rounded-full p-4 flex-shrink-0 border-4  flex-grow max-h-32 "
											/>
										</div>
									</div>

									<div className="mt-4 grid gap-1 lg:mt-1 p-4 ">
										<div className="flex">
											<div className='mt-1 mr-1 border-8 border-white mb-1 rounded-lg shadow-md'>
												<img
													src="https://tobeto.com/cv-name.svg"
													alt="CV Icon"
													className="w-7 h-7"
												/>
											</div>
											<div className="p-1">
												<p className="text-xs font-medium text-gray-500">Ad Soyad</p>
												<p className="text-base font-bold text-gray-900">{student.user?.firstName} {student.user?.lastName}</p>
											</div>
										</div>
										<div className="flex">
											<div className='mt-1 mr-1 border-8 border-white mb-1 rounded-lg shadow-md'>
												<img
													src="https://tobeto.com/cv-date.svg"
													alt="CV Icon"
													className="w-7 h-7"
												/>
											</div>
											<div className="p-1">
												<p className="text-xs font-medium text-gray-500">Doğum Tarihi</p>
												<p className="text-base font-bold text-gray-900">{student.birthDate?.substring(0, 10)}</p>
											</div>
										</div>
										<div className="flex">
											<div className='mt-1 mr-1 border-8 border-white mb-1 rounded-lg shadow-md'>
												<img
													src="https://tobeto.com/cv-mail.svg"
													alt="CV Icon"
													className="w-7 h-7"
												/>
											</div>
											<div className="p-1">
												<p className="text-xs font-medium text-gray-500">E-Posta Adresi</p>
												<p className="text-base font-bold text-gray-900">{student.user?.email}</p>
											</div>
										</div>
										<div className="flex">
											<div className='mt-1 mr-1 border-8 border-white mb-1 rounded-lg shadow-md'>
												<img
													src="https://tobeto.com/cv-phone.svg"
													alt="CV Icon"
													className="w-7 h-7"
												/>
											</div>
											<div className="p-1 ">
												<p className="text-xs font-medium text-gray-500">Telefon Numarası</p>
												<p className="text-base font-bold text-gray-900">+90{student.phoneNumber}</p>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>

						<div className='col-12 my-4'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">
								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Hakkımda
								</h5>
								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />
								<p className="font-medium text-base text-[#272727] mb-2">
									{student.about}
								</p>
							</div>
						</div>

						<div className='col-12 my-4'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">
								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Yetkinliklerim
								</h5>
								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />
								{student.abilities?.map((ability, index) => (
									<h5 key={index} className='p-2 my-2 text-base font-normal bg-white text-black rounded-3xl hover:bg-[#9933FF] hover:text-white shadow-lg'>
										&emsp;{ability.name}
									</h5>
								))}
							</div>
						</div>

						<div className='col-12 my-4'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">

								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Yabancı Dillerim
								</h5>
								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />

								{student.studentForeignLanguages?.map((language, index) => (
									<div key={index} className="card my-2 border-gray-50 dark:border-gray-50 bg-white dark:bg-white rounded-3xl shadow-md">
										<div className='flex items-center p-1'>
											<div className="flex-none">
												<HiOutlineGlobeAlt className="text-3xl border-2 border-white rounded-full text-[#828282]" />
											</div>
											<div className="flex-auto">
												<div className="text-base font-medium text-[#828282]">
													&nbsp;{language.languageName} 
												</div>
												<div className="text-xs text-[#828282]">
													&nbsp;{language.languageLevel} Seviye 
												</div>
											</div>
											<div className="flex-none">
												<HiOutlineHome className="text-3xl bg-[#F3F3F3] border-2 rounded-full text-[#828282]" />
											</div>
										</div>
									</div>
								))}

							</div>
						</div>

						<div className='col-12 my-4'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">

								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Sertifikalarım
								</h5>
								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />

								{student.certificates?.map((certificate, index) => (
									<div key={index} className='flex p-1 my-2 rounded-[38px] hover:bg-[#9933FF]  shadow-lg'>
										<div className="overflow-hidden ml-2 py-2 flex-1 flex items-center  text-black hover:text-white">
											<div className='truncate'>
												{certificate.name}
											</div>
										</div>
										<div className="flex ml-1 items-center">
											{certificate.fileType === '.pdf' && <FaFilePdf className="p-1 text-3xl text-gray-700" />}
											{certificate.fileType === '.jpg' && <FaFileImage className="p-1 text-3xl text-gray-700 mr-1" />}
										</div>
									</div>
								))}

							</div>
						</div>

						<div className='col-12 my-4'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">
								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Medya Hesaplarım
								</h5>
								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />

								<div className='flex justify-between'>
									{student.socialMedias?.map((socialMedia, index) => (
										<div key={index}>
											<a key={index} href={`https://${socialMedia.socialMediaUrl}`} target="_blank" rel="noopener noreferrer">												{socialMedia.name === 'linkedin' && (
												<img
													src="https://tobeto.com/cv-linkedn.svg"
													alt="LinkedIn Icon"
													className="w-[52px] h-[52px] my-2"
												/>
											)}
												{socialMedia.name === 'github' && (
													<img
														src="https://tobeto.com/cv-github.svg"
														alt="GitHub Icon"
														className="w-[52px] h-[52px] my-2"
													/>
												)}
												{socialMedia.name === 'instagram' && (
													<img
														src="https://tobeto.com/cv-insta.svg"
														alt="GitHub Icon"
														className="w-[52px] h-[52px] my-2"
													/>
												)}
												{socialMedia.name === 'twitter' && (
													<img
														src="https://tobeto.com/cv-twitter.svg"
														alt="GitHub Icon"
														className="w-[52px] h-[52px] my-2"
													/>
												)}
												{socialMedia.name === 'behance' && (
													<img
														src="https://tobeto.com/cv-behance.svg"
														alt="GitHub Icon"
														className="w-[52px] h-[52px] my-2"
													/>
												)}
												{socialMedia.name === 'dribble' && (
													<img
														src="https://tobeto.com/cv-dribble.svg"
														alt="GitHub Icon"
														className="w-[52px] h-[52px] my-2"
													/>
												)}
											</a>
										</div>
									))}
								</div>

							</div>
						</div>

					</div>


					<div className="lg:w-2/3 ml-2">

						<div className='col-12'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">

								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Tobeto İşte Başarı Modelim
								</h5>

								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />

								<div className='flex  items-center'>

									<div className="card border-gray-50 dark:border-gray-50  mr-2 bg-white dark:bg-white ">
										<Radar data={data} />
									</div>

									<div className=''>
										<div className='flex border-gray-50 dark:border-gray-50  mr-2 bg-white  dark:bg-white my-2'>
											<div className="badge p-2 badge-secondary rounded-md bg-[#85A0A9] border-[#85A0A9] ">4.4</div>
											<div className='ml-2 text-sm font-medium'>Yeni dünyaya hazırlanıyorum</div>
										</div>
										<div className='flex border-gray-50 dark:border-gray-50  mr-2 bg-white  dark:bg-white my-2'>
											<div className="badge p-2 badge-secondary rounded-md bg-[#217925] border-[#217925] ">4.9</div>
											<div className='ml-2 text-sm font-medium'>Profesyonel duruşumu geliştiriyorum</div>
										</div>
										<div className='flex border-gray-50 dark:border-gray-50  mr-2 bg-white  dark:bg-white my-2'>
											<div className="badge p-2 badge-secondary rounded-md bg-[#EEC272] border-[#EEC272] ">4.4</div>
											<div className='ml-2 text-sm font-medium'>Kendimi tanıyor ve yönetiyorum</div>
										</div>
										<div className='flex border-gray-50 dark:border-gray-50   mr-2 bg-white  dark:bg-white my-2'>
											<div className="badge p-2 badge-secondary rounded-md bg-[#6667AB] border-[#6667AB] ">4.7</div>
											<div className='ml-2 text-sm font-medium'>Yaratıcı ve doğru çözümler geliştiriyorum</div>
										</div>
										<div className='flex border-gray-50 dark:border-gray-50  mr-2 bg-white  dark:bg-white my-2'>
											<div className="badge p-2 badge-secondary rounded-md bg-[#B38F6A] border-[#B38F6A] ">4.8</div>
											<div className='ml-2 text-sm font-medium'>Başkaları ile birlikte çalışıyorum</div>
										</div>
										<div className='flex border-gray-50 dark:border-gray-50  mr-2 bg-white  dark:bg-white my-2'>
											<div className="badge p-2 badge-secondary rounded-md bg-[#E288B6] border-[#E288B6] ">4.9</div>
											<div className='ml-2 text-sm font-medium'>Kendimi sürekli geliştiriyorum</div>
										</div>
										<div className='flex border-gray-50 dark:border-gray-50    mr-2 bg-white  dark:bg-white my-2'>
											<div className="badge p-2 badge-secondary rounded-md bg-[#D75078] border-[#D75078] ">4.8</div>
											<div className='ml-2 text-sm font-medium'>Sonuç ve başarı odaklıyım</div>
										</div>
										<div className='flex border-gray-50 dark:border-gray-50  mr-2 bg-white  dark:bg-white my-2'>
											<div className="badge p-2 badge-secondary rounded-md bg-[#D77E6F] border-[#D77E6F] ">4.6</div>
											<div className='ml-2 text-sm font-medium'>Anlıyorum ve anlaşılıyorum</div>
										</div>
									</div>

								</div>

							</div>
						</div>

						<div className='col-12 my-4'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">

								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Tobeto Seviye Testlerim
								</h5>

								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />

								<div className='flex '>

									{student.studentExams?.map((exam, index) => (
										<div key={index} className="p-2 bg-white rounded-md flex-none w-1/2 shadow-md mr-2 my-2 border-white border-2 hover:border-purple-600 hover:border-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
											<div className="">
												<h2 className="text-base font-medium text-[#828282]">{exam.examName}</h2>
												<p className="text-md">{exam.score}</p>
											</div>
											<div className="text-right">
												<p className="text-sm text-[#828282]">11-10-2023</p>
											</div>
										</div>
									))}

								</div>

							</div>
						</div>

						<div className='col-12 my-4'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">

								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Yetkinlik Rozetlerim
								</h5>

								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />
								<div className='flex'>
									<img
										src="https://tobeto.s3.cloud.ngn.com.tr/45_14110cb69f.jpg"
										alt="ik-badge"
										className=" mx-2 my-2 rounded-lg  p-3 bg-white"
										style={{ width: "13%", height: "13%" }}
									/>
									<img
										src="https://tobeto.s3.cloud.ngn.com.tr/47_556f510dd4.jpg"
										alt="hik-badge"
										className="mx-2 my-2 rounded-lg  p-3 bg-white"
										style={{ width: "13%", height: "13%" }}
									/>
								</div>
							</div>
						</div>

						<div className='col-12 my-4'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">

								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Aktivite Haritam
								</h5>

								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />

								<div className='mx-auto'>
									<HeatMap
										value={value}
										width={600}
										style={{ color: '#4B0082' }}
										startDate={new Date('2024/01/01')}
										panelColors={{
											0: '#d0cccc',
											4: '#c064fc',
											10: '#a034fc',
											20: '#601c9c',
											30: '#38145c',
										}}
									/>
								</div>


							</div>
						</div>

						<div className='col-12 my-4'>
							<div className="card overflow-x-auto pb-7 p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">
								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Eğitim Hayatım ve Deneyimlerim
								</h5>
								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />
								<ul className="timeline timeline-vertical lg:timeline-horizontal ">
									{student.experiences?.map((experience, index) => (
										<li key={index}>
											<div className="timeline-start">{new Date(experience.startDate).getFullYear()}</div>
											<div className="timeline-middle">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
													<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
												</svg>
											</div>
											<div className="timeline-end timeline-box">
												{experience.companyName} - {experience.position}
											</div>
											<hr />
										</li>
									))}
								</ul>
							</div>
						</div>


					</div>
				</div>
			</div>


		</div >

	)
}

export default MyProfile


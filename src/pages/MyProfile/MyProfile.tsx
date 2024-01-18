import { Card, Dropdown } from 'flowbite-react';
import React from 'react'
import {
	HiMiniPencil,
	HiMiniUser,
	HiMiniCake,
	HiEnvelope,
	HiMiniPhone,
	HiOutlineGlobeAlt,
	HiOutlineHome
} from "react-icons/hi2";
import { FaLinkedin, FaShareAlt } from "react-icons/fa";
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
		labels: [
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			''

		],
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




	return (
		<div className='h-screen overflow-y-auto  '>
			<div className='max-w-[1110px] mx-auto'>
				<div className="mt-6 mb-2 ">
					<div className="flex justify-end items-center">
						<button className="btn btn-circle btn-ghost">
							<HiMiniPencil />
						</button>
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

										<div className="card rounded-2xl w-full max-h-44 bg-gradient-to-t from-[#5056C9] to-[#8D92FA] items-center">
											<img
												src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
												alt="profil-picture"
												className="mb-1 mt-1 rounded-full p-4 object-cover"
												style={{ width: "50%", height: "50%" }}
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
												<p className="text-base font-bold text-gray-900">Tunahan Yıldırım</p>
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
												<p className="text-base font-bold text-gray-900">08.03.1997</p>
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
												<p className="text-base font-bold text-gray-900">asdasd@gmail.com</p>
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
												<p className="text-base font-bold text-gray-900">+905325554466</p>
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
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>
						</div>
						<div className='col-12 my-4'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">
								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Yetkinliklerim
								</h5>
								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />
								<h5 className='p-2 my-2 text-base font-normal bg-white text-black   rounded-3xl hover:bg-[#9933FF] hover:text-white shadow-lg' >
									&emsp;Back End (Yazılım Mühendisliği)
								</h5>
								<h5 className='p-2 my-2 text-base font-normal bg-white text-black    rounded-3xl hover:bg-[#9933FF] hover:text-white shadow-lg' >
									&emsp;javascript
								</h5>
								<h5 className='p-2 my-2 text-base font-normal bg-white text-black   rounded-3xl hover:bg-[#9933FF] hover:text-white shadow-lg'>
									&emsp;c#
								</h5>
							</div>
						</div>
						<div className='col-12 my-4'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">

								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Yabancı Dillerim
								</h5>
								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />

								<div className="card my-2 border-gray-50 dark:border-gray-50  bg-white dark:bg-white rounded-3xl shadow-md">
									<div className='flex items-center p-1'>
										<div className="flex-none">
											<HiOutlineGlobeAlt className="text-3xl border-2 border-white rounded-full text-[#828282]" />
										</div>
										<div className="flex-auto">
											<div className="text-base font-medium text-[#828282]">
												&nbsp;İngilizce
											</div>
											<div className="text-xs text-[#828282]">
												&nbsp;Orta Seviye (B1 , B2)
											</div>
										</div>
										<div className="flex-none">
											<HiOutlineHome className="text-3xl bg-[#F3F3F3] border-2 rounded-full text-[#828282]" />
										</div>
									</div>
								</div>

								<div className="card my-2 border-gray-50 dark:border-gray-50  bg-white dark:bg-white rounded-3xl shadow-md">
									<div className='flex items-center p-1'>
										<div className="flex-none">
											<HiOutlineGlobeAlt className="text-3xl border-2 border-white rounded-full text-[#828282]" />
										</div>
										<div className="flex-auto">
											<div className="text-base font-medium text-[#828282]">
												&nbsp;Almanca
											</div>
											<div className="text-xs text-[#828282]">
												&nbsp;Orta Seviye (B1 , B2)
											</div>
										</div>
										<div className="flex-none">
											<HiOutlineHome className="text-3xl bg-[#F3F3F3] border-2 rounded-full text-[#828282]" />
										</div>
									</div>
								</div>

							</div>
						</div>

						<div className='col-12 my-4'>

							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">

								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Sertifikalarım
								</h5>
								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />

								<div className='flex p-1 my-2 rounded-[38px] shadow-lg'>
									<div className="overflow-hidden ml-2 py-2 flex-1 flex items-center text-black">
										<div className='truncate'>
											Web_Geliştirme_Sasdasdaserafsafsadfasetifikası.pdf
										</div>
									</div>
									<div className="flex ml-1 items-center">
										<FaFilePdf className="p-1 text-3xl text-gray-700" />
									</div>
								</div>

								<div className='flex p-1 my-2 rounded-[38px] shadow-lg'>
									<div className="overflow-hidden ml-2 py-2 flex-1 flex items-center text-black">
										<div className='truncate'>
											Web_Geliştirme_Sasdasdaserafsafsadfasetifikası.pdf
										</div>
									</div>
									<div className="flex ml-1 items-center">
										<FaFilePdf className="p-1 text-3xl text-gray-700" />
									</div>
								</div>

								<div className='flex p-1 my-2 rounded-[38px] shadow-lg'>
									<div className="overflow-hidden ml-2 py-2 flex-1 flex items-center text-black">
										<div className='truncate'>
											SQL_Geliştirme_Sasdasdaserafsafsadfasetifikası.pdf
										</div>
									</div>
									<div className="flex ml-1 items-center">
										<FaFilePdf className="p-1 text-3xl text-gray-700" />
									</div>
								</div>

							</div>
						</div>

						<div className='col-12 my-4'>
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">
								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Medya Hesaplarım
								</h5>
								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />
								<img
									src="https://tobeto.com/cv-linkedn.svg"
									alt="CV Icon"
									className="w-[52px] h-[52px] my-2"
								/>

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

									<div className="p-2 bg-white rounded-md flex-none w-1/2 shadow-md mr-2 my-2 border-white border-2 hover:border-purple-600 hover:border-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
										<div className="">
											<h2 className="text-base font-medium text-[#828282]">Herkes İçin Kodlama 1A Değerlendirme Sınavı</h2>
											<p className="text-md">96.00</p>
										</div>
										<div className="text-right">
											<p className="text-sm text-[#828282]">11-10-2023</p>
										</div>
									</div>

									<div className="p-2 bg-white rounded-md flex-none w-1/2 shadow-md mr-2 my-2 border-white border-2 hover:border-purple-600 hover:border-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
										<div className="">
											<h2 className="text-base font-medium text-[#828282]">Herkes İçin Kodlama 1A Değerlendirme Sınavı</h2>
											<p className="text-md">96.00</p>
										</div>
										<div className="text-right">
											<p className="text-sm text-[#828282]">11-10-2023</p>
										</div>
									</div>

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
							<div className="card p-5 rounded-2xl border-white dark:border-white max-w-full mr-2 bg-white dark:bg-white shadow-2xl ">

								<h5 className="text-lg font-bold tracking-normal text-[#323232] ">
									Eğitim Hayatım ve Deneyimlerim
								</h5>

								<hr className="border-[#EEDEFF] border-[1.5px] my-2" />
								<ul className="timeline timeline-vertical ">
									<li>
										<div className="timeline-start">1984</div>
										<div className="timeline-middle">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
										</div>
										<div className="timeline-end timeline-box">Tobeto Lisesi</div>
										<hr />
									</li>
									<li>
										<hr />
										<div className="timeline-start">1998</div>
										<div className="timeline-middle">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
										</div>
										<div className="timeline-end timeline-box">Tobeto University</div>
										<hr />
									</li>
									<li>
										<hr />
										<div className="timeline-start">2001</div>
										<div className="timeline-middle">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
										</div>
										<div className="timeline-end timeline-box">Tobeto Şirketi</div>
										<hr />
									</li>
									<li>
										<hr />
										<div className="timeline-start">2007</div>
										<div className="timeline-middle">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
										</div>
										<div className="timeline-end timeline-box">Tobeto Tech Company</div>
										<hr />
									</li>
									<li>
										<hr />
										<div className="timeline-start">2015</div>
										<div className="timeline-middle">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
										</div>
										<div className="timeline-end timeline-box">Tobeto Yüksek Lisans</div>
									</li>
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


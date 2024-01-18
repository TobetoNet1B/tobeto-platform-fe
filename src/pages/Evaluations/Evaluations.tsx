import React from 'react'
import { HiOutlineListBullet } from "react-icons/hi2";
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Button, Modal } from 'flowbite-react';

type Props = {}

const Evaluations = (props: Props) => {

	const [openModal, setOpenModal] = useState(false);


	return (
		<div className='overflow-y-auto'>
			<div className='h-screen  max-w-[1110px] mx-auto '>
				<div className='max-w-fit mx-auto'>


					<section className="py-5">
						<div className="relative mt-12">
							<span className="block w-full h-full">
								{/*<img
											src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
											alt="profil-picture"
											className="ml- mr-52 mb- mt-52 rounded-full  p-1 absolute"
											style={{ width: "9%", height: "9%" , opacity:1}}
						/>*/}
							</span>
							<div className="container text-center">
								<div className="mx-auto max-w-5xl">
									<h3>
										<span className=" font-normal text-4xl text-[#a034fc]"> Yetkinlik</span>
										<span className=" font-normal text-4xl text-[#504c4c]">lerini</span>
										<span className=" font-normal text-4xl text-[#504c4c]"> ücretsiz ölç,</span>
										<span className=" font-normal text-4xl text-[#a034fc]"> bilgi</span>
										<span className=" font-normal text-4xl text-[#504c4c]">lerini</span>
										<span className=" font-normal text-4xl text-[#504c4c]"> test et.</span>
									</h3>
								</div>
							</div>
						</div>
					</section>


					<section className="mt-8">
						<div className="container">

							<div className="grid grid-cols-1 md:grid-cols-2  gap-6 ">

								<div className="col-span-1 md:col-span-2 mb-1 ">
									<div className="card rounded-ss-none rounded-[32px] p-1 w-full bg-gradient-to-tr from-[#E2A5FD] to-[#3C0B8C] items-center flex flex-col justify-center h-full">
										<div className='text-center mt-5'>
											<span className='mt-5 text-2xl text-white font-bold'>Tobeto İşte Başarı Modeli</span>
											<p className="my-16 text-xl text-white">
												80 soru ile yetkinliklerini <b>ölç,</b> önerilen eğitimleri <b>tamamla,</b> rozetini <b>kazan.</b>
											</p>
											<a className="mb-5 btn border-0 rounded-3xl text-white bg-[#9933ff] hover:bg-[#822BD9]" href="#">
												Raporu Görüntüle
											</a>
										</div>
									</div>
								</div>




								<div className="col-span-1 md:col-span-1 mb-6  ">
									<div className="card rounded-ss-none rounded-[32px] p-5 w-full bg-gradient-to-tr from-[#b9a2fb] to-[#1d0b8c]  ">
										<div className="text-center">
											<span className='text-white text-2xl font-bold'>Yazılımda Başarı Testi</span>
											<p className='my-[112px] lg:my-[126px] mx-auto text-xl text-white'>Çoktan seçmeli sorular ile teknik bilgini <b>test et.</b></p>
											<label className="text-white">&gt;&gt;&gt;</label>
										</div>
									</div>
								</div>


								<div className="col-span-1 md:col-span-1 mb-6  ">
									<div className="flex flex-col equal-box gap-1">

										<div className="card rounded-[32px] my-1 w-full bg-gradient-to-r from-[#B29BF6] to-[#1D0B8C]  ">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-4">
													<div className="ml-3 text-4xl border-2 rounded-full p-1 text-white"><HiOutlineListBullet /></div>
													<span className='text-lg text-white'>Front End</span>
												</div>
												<button className=" btn btn-light mx-2 my-2 rounded-3xl">Başla</button>
											</div>
										</div>

										<div className="card rounded-[32px] my-1 w-full bg-gradient-to-r from-[#B29BF6] to-[#1D0B8C]  ">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-4">
													<div className="ml-3 text-4xl border-2 rounded-full p-1 text-white"><HiOutlineListBullet /></div>
													<span className='text-lg text-white'>Full Stack</span>
												</div>
												<button className=" btn btn-light mx-2 my-2 rounded-3xl">Başla</button>
											</div>
										</div>

										<div className="card rounded-[32px] my-1 w-full bg-gradient-to-r from-[#B29BF6] to-[#1D0B8C]  ">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-4">
													<div className="ml-3 text-4xl border-2 rounded-full p-1 text-white"><HiOutlineListBullet /></div>
													<span className='text-lg text-white'>Back End</span>
												</div>
												<button onClick={() => setOpenModal(true)} className=" btn btn-light mx-2 my-2 rounded-3xl">Başla</button>
												<Modal show={openModal} size="2xl" onClose={() => setOpenModal(false)} popup>
													<Modal.Header className='bg-white'>
														<div className="d-flex justify-content-between mt-2 mb-5 ml-4 text-black">
															<span>Back End</span>
															<button type="button" className="btn-close " aria-label="Close"></button>
														</div>
													</Modal.Header>
													<Modal.Body className='bg-white text-black'>
														<div className="join-screen ">
															<p>
																Bu sınav 25 sorudan oluşmakta olup sınav süresi 30 dakikadır. Sınav çoktan seçmeli test şeklinde olup sınavı
																yarıda bıraktığınız taktırde çözdüğünüz kısım kadarıyla değerlendirileceksiniz.
															</p>< br />
															<div>
																<span>Sınav Süresi : 30 Dakika</span>< br />
																<span>Soru Sayısı : 25</span>< br />
																<span>Soru Tipi : Çoktan Seçmeli</span>
															</div>
															<div className="row">
																<button className="btn border-0 rounded-3xl text-white bg-purple-600 hover:bg-purple-700 mt-8" style={{ width: 'max-content' }}>
																	Sınava Başla
																</button>
															</div>
														</div>
													</Modal.Body>
												</Modal>
											</div>
										</div>

										<div className="card rounded-[32px] my-1 w-full bg-gradient-to-r from-[#B29BF6] to-[#1D0B8C]  ">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-4">
													<div className="ml-3 text-4xl border-2 rounded-full p-1 text-white"><HiOutlineListBullet /></div>
													<span className='text-lg text-white'>Microsoft SQL Server</span>
												</div>
												<button className=" btn btn-light mx-2 my-2 rounded-3xl">Başla</button>
											</div>
										</div>

										<div className="card rounded-[32px] my-1 w-full bg-gradient-to-r from-[#B29BF6] to-[#1D0B8C]  ">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-4">
													<div className="ml-3 text-4xl border-2 rounded-full p-1 text-white"><HiOutlineListBullet /></div>
													<span className='text-lg text-white'>Masaüstü Programlama</span>
												</div>
												<button className="btn btn-light mx-2 my-2 rounded-3xl">Başla</button>
											</div>
										</div>
										{/* Repeat similar blocks for other cards */}
									</div>
								</div>

							</div>
						</div>
					</section>



					<section className="py-5">
						<div className="relative">
							<div className="mt-10 mx-auto w-3 h-44" style={{ background: "linear-gradient(180deg, #93f, #953dac 27.08%, #fdfbfd)" }}></div>
							<div className="container text-center">
								<div className="max-w-5xl mx-auto">
									<h3>
										<span className=" font-normal text-4xl text-[#a034fc]"> Aboneliğe özel </span>
										<span className="font-normal text-4xl text-[#504c4c]">değerlendirme araçları için </span>
									</h3>
								</div>
							</div>
						</div>
					</section>

					<section className="mt-2 mb-20">
						<div className="container ">
							<div className="flex md:flex-nowrap flex-wrap   gap-6">

								<div className="w-full md:w-1/2   mb-8  ">
									<div className="card rounded-ss-none rounded-[32px] p-5 w-full h-full bg-gradient-to-r from-[#a923ec] to-[#686df1]  ">
										<div className="text-center">
											
												<span className="block text-2xl font-bold text-white">Kazanım Odaklı Testler</span>
												<p className="my-24 text-xl text-white">Dijital gelişim kategorisindeki eğitimlere başlamadan önce konuyla ilgili bilgin ölçülür ve seviyene göre yönlendirilirsin.</p>
											
										</div>
									</div>
								</div>

								<div className="w-full md:w-1/2 mb-8  ">
									<div className="card rounded-ss-none rounded-[32px] p-5 w-full bg-gradient-to-r from-[#a923ec] to-[#686df1]  ">
										<div className=" text-center">
											<span className="block text-white text-2xl font-bold">Huawei Talent Interview <br /> Teknik Bilgi Sınavı*</span>
											<p className="p-5 mt-4 text-white text-xl"><b><i>Sertifika alabilmen için,</i></b> eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod bilgin ölçülür.<br /><br />4400+ soru | 30+ programlama dili <br />4 zorluk seviyesi</p>
											<small className="text-white block text-sm">*Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır.</small>
										</div>
									</div>
								</div>

							</div>
						</div>
					</section>


				</div>
			</div>
		</div>
	)
}

export default Evaluations
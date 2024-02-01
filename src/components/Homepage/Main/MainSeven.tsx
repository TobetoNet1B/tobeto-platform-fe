import { useState } from 'react'

type Props = {}

const MainSeven = (props: Props) => {

	const [show1, setshow1] = useState(false);
	const [show2, setshow2] = useState(false);
	const [show3, setshow3] = useState(false);
	const [show4, setshow4] = useState(false);
	const [show5, setshow5] = useState(false);
	const [show6, setshow6] = useState(false);

	return (
		<div className='container mx-auto [@media(max-width:640px)]:!max-w-full max-w-6xl px-[calc(1.5rem*0.5)] !mb-6 !mt-20'>
			<div className='flex flex-wrap pt-10 pb-0 bg-[#2f2f2f] rounded-3xl px-5'>
				<div className="flex-shrink-0 grow-0 basis-auto w-full">
					<div className="px-5 pt-4 pb-2 relative mb-[1em]">
						<div className="mb-10 bg-transparent border-none ">
							<div className="flex flex-wrap">
								<div className="md:w-full md:flex-shrink-0 md:grow-0 md:basis-auto flex-shrink-0 grow-0 basis-auto w-full">
									{/* <div className="border-none h-0.5 w-full block">
												<div className="h-full bg-blue-500 animate-fill"></div>
										</div> */}{/* Animayson için eklenecek div */}
									<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none">
										<button className="bg-transparent hover:text-[#93fd] text-[#93f] font-semibold [@media(max-width:760px)]:!text-[15px] text-xl pb-2" aria-label="show menu" onClick={() => setshow1(!show1)}>
											Tobeto "Yazılımda Başarı" Testi &amp; Huawei Talent Interview
										</button>
										<button onClick={() => setshow1(!show1)} className='text-slate-300'>
											<svg className={` ${show1 ? "block" : "hidden"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<svg className={` ${show1 ? "hidden" : "block"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>
									</h2>
								</div>
								<div className="flex-shrink-0 grow-0 basis-auto w-full">
									<div id="collapse1" className={` ${show1 ? "flex" : "hidden"}`} style={{}}>
										<div className="py-4 md:border-b-2 md:border-[#272727] md:border-solid pb-4">
											<div className="flex flex-wrap bg-transparent text-white justify-between">
												<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full">
													<div className="text-lg max-w-[90%] mt-3 leading-5 [@media(max-width:760px)]:!text-[12.5px]">
														Tobeto"da kendini sürekli değerlendirerek, öğrenim yolculuğunu kişiselleştirebilir ve işe hazırlık sürecine yön verebilirsin.&nbsp;
														<br /> - Ücretsiz sunduğumuz&nbsp; Tobeto "Yazılımda
														Başarı" Testi ile teknik bilgi ve yetkinliklerini
														kolaylıklLink ölç.
														<br /> - Aldığın mesleki eğitimlerin sonunda
														uluslararası geçerliliğe sahip Huawei Talent Interview
														teknik bilgi sınavları ile öğrendiğine emin ol, rozetini
														al.
													</div>
												</div>
												<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full mt-3">
													<img className="max-w-full h-auto" src="https://tobeto.com/a1.png" alt="" style={{ borderRadius: "16px" }} />
												</div>
											</div>
											<div className="border-b-[1px] border-solid border-gray-300 pb-5 md:hidden"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-10 bg-transparent border-none ">
							<div className="flex flex-wrap">
								<div className="md:w-full md:flex-shrink-0 md:grow-0 md:basis-auto flex-shrink-0 grow-0 basis-auto w-full">
									{/* <div className="border-none h-0.5 w-full block">
												<div className="h-full bg-blue-500 animate-fill"></div>
										</div> */}{/* Animayson için eklenecek div */}
									<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none">
										<button className="bg-transparent hover:text-[#93fd] text-[#93f] font-semibold [@media(max-width:760px)]:!text-[15px] text-xl pb-2" aria-label="show menu" onClick={() => setshow2(!show2)}>
											Tobeto Kişisel Gelişim Envanteri
										</button>
										<button onClick={() => setshow2(!show2)} className='text-slate-300'>
											<svg className={` ${show2 ? "block" : "hidden"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<svg className={` ${show2 ? "hidden" : "block"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>
									</h2>
								</div>
								<div className="flex-shrink-0 grow-0 basis-auto w-full">
									<div id="collapse1" className={` ${show2 ? "flex" : "hidden"}`} style={{}}>
										<div className="py-4 md:border-b-2 md:border-[#272727] md:border-solid pb-4">
											<div className="flex flex-wrap bg-transparent text-white justify-between">
												<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full">
													<div className="text-lg max-w-[90%] mt-3 leading-5 [@media(max-width:760px)]:!text-[12.5px]">
														Yeni bir meslek. Daha yüksek ücret. Uzaktan çalışma. Hedeflediğin ne olursa olsun, hepsine uygun bir yol mutlaka var. Bir sonraki hamleni planlamaya başlamadan önce üyelerimize ücretsiz sunduğumuz Tobeto Kişisel Gelişim Envanteri'mizi yap, kendin için en uygun kariyer alanlarını keşfet.
													</div>
												</div>
												<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full mt-3">
													<img className="max-w-full h-auto" src="https://tobeto.com/a2.png" alt="" style={{ borderRadius: "16px" }} />
												</div>
											</div>
											<div className="border-b-[1px] border-solid border-gray-300 pb-5 md:hidden"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-10 bg-transparent border-none ">
							<div className="flex flex-wrap">
								<div className="md:w-full md:flex-shrink-0 md:grow-0 md:basis-auto flex-shrink-0 grow-0 basis-auto w-full">
									{/* <div className="border-none h-0.5 w-full block">
												<div className="h-full bg-blue-500 animate-fill"></div>
										</div> */}{/* Animayson için eklenecek div */}
									<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none">
										<button className="bg-transparent hover:text-[#93fd] text-[#93f] font-semibold [@media(max-width:760px)]:!text-[15px] text-xl pb-2" aria-label="show menu" onClick={() => setshow3(!show3)}>
											Codecademy &amp; Tobeto
										</button>
										<button onClick={() => setshow3(!show3)} className='text-slate-300'>
											<svg className={` ${show3 ? "block" : "hidden"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<svg className={` ${show3 ? "hidden" : "block"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>
									</h2>
								</div>
								<div className="flex-shrink-0 grow-0 basis-auto w-full">
									<div id="collapse1" className={` ${show3 ? "flex" : "hidden"}`} style={{}}>
										<div className="py-4 md:border-b-2 md:border-[#272727] md:border-solid pb-4">
											<div className="flex flex-wrap bg-transparent text-white justify-between">
												<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full">
													<div className="text-lg max-w-[90%] mt-3 leading-5 [@media(max-width:760px)]:!text-[12.5px]">
														Codecademy;  50 milyondan fazla üyesinin yeni teknolojik beceriler  konusunda meraklanması, projelere imza atması, kariyerini geliştirmesine yardımcı  olan bir online kodlama eğitimi platformudur. Tobeto'nun, gerçek zamanlı, kendi hızında, etkileşimli öğrenme ortamıyla öğrenmek daha kolay! Üstelik, Türkçe derslerimiz ve öğrenmeni destekleyici kaynaklarımız bu süreci kolaylaştırmak ve hızlandırmak için senin yanında!
													</div>
												</div>
												<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full mt-3">
													<img className="max-w-full h-auto" src="https://tobeto.com/calogo.png" alt="" style={{ borderRadius: "16px" }} />
												</div>
											</div>
											<div className="border-b-[1px] border-solid border-gray-300 pb-5 md:hidden"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-10 bg-transparent border-none ">
							<div className="flex flex-wrap">
								<div className="md:w-full md:flex-shrink-0 md:grow-0 md:basis-auto flex-shrink-0 grow-0 basis-auto w-full">
									{/* <div className="border-none h-0.5 w-full block">
												<div className="h-full bg-blue-500 animate-fill"></div>
										</div> */}{/* Animayson için eklenecek div */}
									<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none">
										<button className="bg-transparent hover:text-[#93fd] text-[#93f] font-semibold [@media(max-width:760px)]:!text-[15px] text-xl pb-2" aria-label="show menu" onClick={() => setshow4(!show4)}>
											Bilgiyi Beceriye Çevirme
										</button>
										<button onClick={() => setshow4(!show4)} className='text-slate-300'>
											<svg className={` ${show4 ? "block" : "hidden"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<svg className={` ${show4 ? "hidden" : "block"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>
									</h2>
								</div>
								<div className="flex-shrink-0 grow-0 basis-auto w-full">
									<div id="collapse1" className={` ${show4 ? "flex" : "hidden"}`} style={{}}>
										<div className="py-4 md:border-b-2 md:border-[#272727] md:border-solid pb-4">
											<div className="flex flex-wrap bg-transparent text-white justify-between">
												<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full">
													<div className="text-lg max-w-[90%] mt-3 leading-5 [@media(max-width:760px)]:!text-[12.5px]">
														Canlı dersler, becerilerini derinleştirebileceğin uygulamalar, gerçek senaryoları deneyimleyebileceğin projeler ve mentör desteği ile becerilerini geliştir, süreci kendin yönet.
													</div>
												</div>
												<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full mt-3">
													<img className="max-w-full h-auto" src="https://tobeto.com/a5.png" alt="" style={{ borderRadius: "16px" }} />
												</div>
											</div>
											<div className="border-b-[1px] border-solid border-gray-300 pb-5 md:hidden"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-10 bg-transparent border-none ">
							<div className="flex flex-wrap">
								<div className="md:w-full md:flex-shrink-0 md:grow-0 md:basis-auto flex-shrink-0 grow-0 basis-auto w-full">
									{/* <div className="border-none h-0.5 w-full block">
												<div className="h-full bg-blue-500 animate-fill"></div>
										</div> */}{/* Animayson için eklenecek div */}
									<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none">
										<button className="bg-transparent hover:text-[#93fd] text-[#93f] font-semibold [@media(max-width:760px)]:!text-[15px] text-xl pb-2" aria-label="show menu" onClick={() => setshow5(!show5)}>
											Doğru İş İle Eşleşme
										</button>
										<button onClick={() => setshow5(!show5)} className='text-slate-300'>
											<svg className={` ${show5 ? "block" : "hidden"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<svg className={` ${show5 ? "hidden" : "block"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>
									</h2>
								</div>
								<div className="flex-shrink-0 grow-0 basis-auto w-full">
									<div id="collapse1" className={` ${show5 ? "flex" : "hidden"}`} style={{}}>
										<div className="py-4 md:border-b-2 md:border-[#272727] md:border-solid pb-4">
											<div className="flex flex-wrap bg-transparent text-white justify-between">
												<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full">
													<div className="text-lg max-w-[90%] mt-3 leading-5 [@media(max-width:760px)]:!text-[12.5px]">
														Uzmanlığın için yeni becerileri kazanmak (reskill) veya yeni bir role başlamak (upskill) için gelişim yolculuğunu tamamla, profilini güncelle, teknoloji odaklı iş fırsatlarıyla eşleş.
													</div>
												</div>
												<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full mt-3">
													<img className="max-w-full h-auto" src="https://tobeto.com/a6.png" alt="" style={{ borderRadius: "16px" }} />
												</div>
											</div>
											<div className="border-b-[1px] border-solid border-gray-300 pb-5 md:hidden"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-10 bg-transparent border-none ">
							<div className="flex flex-wrap">
								<div className="md:w-full block md:flex-shrink-0 md:grow-0 md:basis-auto flex-shrink-0 grow-0 basis-auto w-full">
									{/* <div className="border-none h-0.5 w-full block">
												<div className="h-full bg-blue-500 animate-fill"></div>
										</div> */}{/* Animayson için eklenecek div */}
									<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none">
										<button className="bg-transparent hover:text-[#93fd] text-[#93f] font-semibold [@media(max-width:760px)]:!text-[15px] text-xl pb-2" aria-label="show menu" onClick={() => setshow6(!show6)}>
											Hayat Boyu Öğrenme
										</button>
										<button onClick={() => setshow6(!show6)} className='text-slate-300'>
											<svg className={` ${show6 ? "block" : "hidden"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											<svg className={` ${show6 ? "hidden" : "block"}`} width={20} height={20} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</button>
									</h2>
								</div>
								<div className="flex-shrink-0 grow-0 basis-auto w-full">
									<div id="collapse1" className={` ${show6 ? "flex" : "hidden"}`} style={{}}>
										<div className="py-4 md:border-b-2 md:border-[#272727] md:border-solid pb-4">
											<div className="flex flex-wrap bg-transparent text-white justify-between">
												<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full">
													<div className="text-lg max-w-[90%] mt-3 leading-5 [@media(max-width:760px)]:!text-[12.5px]">
														Sürekli öğrenme ve sürdürebilir gelişim için Tobeto topluluğuna dahil ol.
													</div>
												</div>
												<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full mt-3">
													<img className="max-w-full h-auto" src="https://tobeto.com/a4.png" alt="" style={{ borderRadius: "16px" }} />
												</div>
											</div>
											<div className="border-b-[1px] border-solid border-gray-300 pb-5 md:hidden"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainSeven
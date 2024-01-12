import { useState } from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const Main = (props: Props) => {

	const [show1, setshow1] = useState(false);
	const [show2, setshow2] = useState(false);
	const [show3, setshow3] = useState(false);
	const [show4, setshow4] = useState(false);
	const [show5, setshow5] = useState(false);
	const [show6, setshow6] = useState(false);


	const [activeButton, setActiveButton] = useState('button1');

	const [p1Visible, setP1Visible] = useState(true);

	const [p2Visible, setP2Visible] = useState(false);

	const handleButtonClick = (buttonId: string) => {
		setActiveButton(buttonId);
		// Butonlara göre elementlerin görünürlüğünü kontrol et
		if (buttonId === 'button1') {
			setP1Visible(true);
			setP2Visible(false);
		} else {
			setP1Visible(false);
			setP2Visible(true);
		}
	};

	return (
		<main>



			{/* <div>Tobeto simgesi</div> */}


			{/* <div className="modal fade" id="TobetoVideo" data-bs-backdrop="static" aria-hidden="true" aria-labelledby="TobetoVideoLabel" tabindex="-1">
			<div className="modal-dialog modal-lg modal-dialog-centered">
				<div className="modal-content back-none border-0">
					<button type="button" className="btn-close btn-close-modal pause-video" data-bs-dismiss="modal" aria-label="Close">
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.5 5.5L5.5 16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							</path>
							<path d="M5.5 5.5L16.5 16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							</path>
						</svg>
					</button>
					<div className="modal-body p-0">
						<video width="100%" className="modal-height youtube-video" height="240" controls="">
							<source src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4" type="video/mp4">
							<source src="movie.ogg" type="video/ogg">
						</video>
					</div>
				</div>
			</div>
		</div> */}


			<div className='container pt-52 relative mx-auto '>
				<div className='flex flex-wrap relative'>{/* className='row' */}
					<div className="md:flex md:flex-shrink-0 md:w-1/2 flex-shrink-0 grow-0 basis-auto w-full">{/* className="col-md-6 col-12" */}
						<div className='bg-cover bg-center bg-no-repeat  flex items-start justify-center flex-col p-8 relative h-[300px] rounded-[14px]' style={{ backgroundImage: `url("https://tobeto.com/_next/static/media/ik02.02de641a.svg")` }}>{/*className='tobeto-card' */}
							<span className='w-1/2 text-white font-extrabold text-2xl z-10'>Hayalindeki teknoloji kariyerini başlat!</span>
							<span className='w-1/2 text-white font-extrabold text-2xl z-10' style={{ display: 'flex', fontStyle: "italic" }}>
								İstediğin
								<div className='inline-block w-1/2 text-white font-bold text-2xl z-10'>{/* className="word-container" */}
									<span className='absolute opacity-0 italic bg-purple-600 p-0 ml-2 rounded-md animate-fade'>&nbsp;yoldan</span>{/*className='word1' */}
									<span className='absolute opacity-0 italic bg-purple-600 p-0 ml-2 rounded-md animate-[fade_4s_ease_2s_infinite]'>&nbsp;hızda</span>{/* className='word2' */}
								</div>
							</span>
							<Link className='bg-purple-800 rounded-full p-2 font-semibold text-white leading-5 min-w-[140px] md:inline-block mt-5' to="#">Ücretsiz Üye Ol
							</Link>{/*className='btn d-md-inline-block mt-5 btn-secondary' */}
							<div className='absolute right-4 bottom-4 max-w-52 max-h-52 z-10 opacity-80'>{/*className='person' */}
								<span className='w-1/2 text-white font-bold text-2xl z-10' style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
									<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
										<img className='align-middle overflow-clip' alt="" aria-hidden="true" src={"https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=1920&q=75"} style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
									</span>
									<img className='align-middle overflow-clip' alt='' src={"https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=1920&q=75"} srcSet={"https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75&amp;w=640&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75&amp;w=1920&amp;q=75 2x"} decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
								</span>
							</div>
						</div>
					</div>
					<div className="md:flex md:flex-shrink-0 md:w-1/2 flex-shrink-0 grow-0 basis-auto w-full">{/* className="col-md-6 col-12" */}
						<div className='ik-card'>
							<div className='relative flex flex-row items-center justify-between'>{/*className='ik-container' */}
								<div className='header-left-3'>
									<span className="text-white text-xl font-extrabold header-left-text">{/*className="text-ik fw-bold header-left-text" */}
										Aradığın
										<span style={{ color: 'rgb(0, 176, 120)' }}>&nbsp;"</span>
										İş
										<span style={{ color: 'rgb(0, 176, 120)' }}>"&nbsp;</span>
										Burada!
									</span>
								</div>
								<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
									<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%;" }}>
										<img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27100%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
									</span>
									<img alt="İstanbul Kodluyor Logo " srcSet="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg 1x, https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg 2x" src="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg" decoding="async" data-nimg="intrinsic" className="px-4" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
								</span>
							</div>
							<Link className='bg-cyan-500 rounded-full px-2 py-2 font-semibold text-black leading-5 min-w-36 md:inline-block mt-5 text-center align-middle' to={""}>Başvur
							</Link>{/* className='btn d-md-inline-block mt-5 btn-blue'*/}
						</div>
					</div>
				</div>
			</div>

			<div className="gradient-line2 mt-10"></div>

			<div>
				<div className="raw-html-embed">{/*className="raw-html-embed" */}
					<div className="raw-html-embed">{/*className="raw-html-embed" */}
						<div className="container mx-auto w-full px-20">{/*className="container" */}
							<div className="flex flex-wrap mt-10 mx-5 py-20">{/* className="row py-20 " */}
								<div className="lg:w-5/12 flex-shrink-0 grow-0 basis-auto w-full">{/* className="col-lg-5 col-12 " */}
									<h3 className="text-white mt-0 mb-2 font-black leading-[45px] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" style={{ fontSize: 'calc(1.35rem + 1.2vw)' }}>Hangi Konuda Kendini<br />Geliştirmek İstersin?</h3>
									<div className="flex flex-wrap pl-0 mb-0 list-none flex-col rounded-md mr-3 my-14" id="v-pills-tab" role="tablist" aria-orientation="vertical">{/* className="nav flex-column nav-pills me-3 my-14" */}
										<button onClick={() => handleButtonClick('button1')} className={`px-6 py-9 hover:border border-gray-600 text-left rounded-2xl m-0 mb-5 ${activeButton === 'button1' ? 'bg-white' : 'bg-[#181717] '}`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{/*className="tab-button active mb-5"*/}
											<div className={`text-2xl text-gray-700 font-semibold mb-4 ${activeButton === 'button1' ? 'text-gray-700 ' : 'text-white'}`}>{/* className="title" */}
												Teknik ve Profesyonel Eğitimler
											</div>
											<div className="text-base text-gray-500 font-normal text-left">{/*className="desc" */}
												Kapsamlı beceri setlerinden, gelişmek istediğin konuyu seç, kariyerinde bir adım öne geç.
											</div>
										</button>
										<button onClick={() => handleButtonClick('button2')} className={`px-6 py-9 hover:border border-gray-600 text-left rounded-2xl mb-5  ${activeButton === 'button2' ? ' bg-white' : ' bg-[#181717]'}`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false">{/*className="tab-button*/}
											<div className={`text-2xl text-gray-700 font-semibold mb-4 ${activeButton === 'button2' ? 'text-gray-700 ' : 'text-white '}`}>{/* className="title" */}
												Yeni bir meslek
											</div>
											<div className="text-base text-gray-500 font-normal text-left">{/*className="desc" */}
												İhtiyaç duyduğun kapsamlı beceri setlerinden oluşan eğitim yolculuğunu seç, yazılım veya profesyonel iş alanlarında tercih ettiğin yeni mesleğine doğru ilk adımını at.
											</div>
										</button>
									</div>
								</div>
								<div className="lg:w-1/12 flex-shrink-0 grow-0 basis-auto w-full"></div>{/* className="col-lg-1 col-12 " */}
								<div className="lg:w-1/2 flex-shrink-0 grow-0 basis-auto w-full relative">{/* className="col-lg-6 col-12 tabs-content " */}
									<div className="absolute -z-10 -top-20 -left-20">{/*className="tab-vector" */}
										<img src="https://tobeto.s3.cloud.ngn.com.tr/dot_purple_358e282aef.svg?updated_at=2022-09-20T12:52:57.402Z" alt="" width="250" height="250" />
									</div>
									<div className="tab-content" id="v-pills-tabContent">
										{p1Visible && <div className="tab-pane animate-[opacity_.15s_linear] show active tabs-pane" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">{/*className="tab-pane fade show active tabs-pane" */}
											<div className="flex flex-wrap -mt-2 -mx-1">{/* className="row"*/}
												<div className="lg:w-1/2 w-full p-2">{/* className="col-lg-6 col-6"*/}
													<Link to={""} className="tabs-box mb-5 relative" style={{ color: "#000!important" }}>
														Object Oriented Programming (OOP)
													</Link>
												</div>
												<div className="lg:w-1/2 w-full p-2">
													<Link to={""} className="tabs-box mb-5 relative" style={{ color: "#000!important" }}>
														Microsoft SQL Server Database
													</Link>
												</div>
												<div className="lg:w-1/2 w-full p-2">
													<Link to={""} className="tabs-box mb-5" style={{ color: "#000!important" }}>
														HTML-CSS-SASS
													</Link>
												</div>
												<div className="lg:w-1/2 w-full p-2">
													<Link to={""} className="tabs-box mb-5" style={{ color: "#000!important" }}>
														Javascript
													</Link>
												</div>
												<div className="lg:w-1/2 w-full p-2">
													<Link to={""} className="tabs-box mb-5" style={{ color: "#000!important" }}>
														ASPNET Core MVC
													</Link>
												</div>
												<div className="lg:w-1/2 w-full p-2">
													<Link to={""} className="tabs-box mb-5 relative" style={{ color: "#000!important" }}>
														C# Programming
													</Link>
												</div>
											</div>
										</div>}
										{p2Visible && <div className="tab-pane animate-[opacity_.15s_linear] tabs-pane" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">{/*className="tab-pane fade tabs-pane" */}
											<div className="flex flex-wrap -mt-2 -mx-1">{/* className="row"*/}
												<div className="lg:w-1/2 w-full p-2">{/* className="col-lg-6 col-6"*/}
													<Link to={""} className="tabs-box mb-5" style={{ color: "#000!important" }}>
														Full Stack Developer
													</Link>
												</div>
												<div className="lg:w-1/2 w-full p-2">
													<Link to={""} className="tabs-box mb-5" style={{ color: "#000!important" }}>
														Front End Developer
													</Link>
												</div>
												<div className="lg:w-1/2 w-full p-2">
													<Link to={""} className="tabs-box mb-5" style={{ color: "#000!important" }}>
														Web &amp; Mobile Developer
													</Link>
												</div>
												<div className="lg:w-1/2 w-full p-2">
													<div className="tabs-box mb-5">
														Siber <br /> Güvenlik Uzmanı
														<div className="absolute top-0 left-0 w-full h-full z-10">{/*className="overlay2" */}
															<div className="flex items-end justify-end h-full px-4 py-2">
																<img src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z" alt="" className="inline-block align-middle w-[35%]" />
															</div>
														</div>
													</div>
												</div>
												<div className="lg:w-1/2 w-full p-2">
													<div className="tabs-box mb-5">
														Veri <br /> Bilimi Uzmanı
														<div className="absolute top-0 left-0 w-full h-full z-10">{/*className="overlay2" */}
															<div className="flex items-end justify-end h-full px-4 py-2">
																<img src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z" alt="" className="inline-block align-middle w-[35%]" />
															</div>
														</div>
													</div>
												</div>
												<div className="lg:w-1/2 w-full p-2">
													<div className="tabs-box mb-5">
														UI/UX <br /> Developer
														<div className="absolute top-0 left-0 w-full h-full z-10">{/*className="overlay2" */}
															<div className="flex items-end justify-end h-full px-4 py-2">
																<img src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z" alt="" className="inline-block align-middle w-[35%]" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>}
									</div>
								</div>
								<div className="my-10 flex justify-end w-full max-w-full">
									<Link to="#" className="font-normal text-base text-gray-300 hover:text-[#93f] md:mx-auto">Tümünü İncele &gt;</Link>{/*className="tab-link mobile-mx-auto" */}
								</div>
							</div>
						</div>
						<div className="container ca">
							<div className="flex" style={{ gap: "2em" }}>{/* className="d-flex" */}
								<div>
									<img alt='' src="https://tobeto.s3.cloud.ngn.com.tr/calogo_d676092a98.png?updated_at=2022-12-28T12:36:58.291Z" style={{ maxWidth: "172px", height: "auto" }} />
								</div>
								<div>
									<span>
										Dünyanın en büyük kodlama eğitimi platformu içerikleri şimdi Tobeto deneyimi ile!
									</span>
								</div>
							</div>
							<p>
								Codecademy’nin tüm kaynaklarına Tobeto aboneliğinin sağlayacağı avantajlar, alanında uzman eğitmenlerle canlı dersler ve mentörlerin desteği ile erişebilir, yeni kariyerine başlayabilirsin!
							</p>
						</div>
						<div className="w-full mx-auto m-0 section-three py-20">{/*className="container-fluid m-0 mp-0 section-three py-20" */}
							<div className="container">
								<div className="relative">
									<p className="text-xl px-10  mx-auto text-center text-white">
										Tobeto Platform'da ücretsiz olarak; sahip olduğun yetkinlikleri değerlendirir,
										<br /> ilgi ve bilgi seviyene göre yüzlerce eğitim içeriğine ulaşırsın. Bunları nasıl tamamlayacağını
										<br /> hızına, bütçene ve zamanına göre kendin belirlersin.
										<br />
										<br /> Hemen ücretsiz üye ol, platforma katıl!
									</p>
									<div className="-left-4 -top-20 absolute z-10">{/*className="tab-vector3" */}
										<img src="https://tobeto.s3.cloud.ngn.com.tr/dot_white_1e7b4378ec.svg?updated_at=2022-09-20T12:52:57.424Z" alt="" width="150" height="150" />
									</div>
									<div className="absolute  -right-10 -bottom-12">{/*className="tab-vector2" */}
										<img src="https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7.svg?updated_at=2022-07-05T11:08:56.797Z" alt="" width="75" height="75" />
									</div>
								</div>
							</div>
						</div>
						<section className="headfarming-mobile">
							<div className="container">
								<div className="headfarming my-10">
									<p className="text-xl font-bold px-10  mx-auto text-center text-white">
										Tobeto , 20. yy''ın “headhunting” yaklaşımını “headfarming” olarak değiştirmeyi hedefler!
										<br />
										<br /> Headfarming: Genç yetenekleri, sürekli öğrenme hevesi içinde olan profesyonelleri, 360 derece eğitmek, değerlendirmek, yönlendirmek ve desteklemektir.
									</p>
								</div>
							</div>
						</section>
						<div className="w-full mx-auto py-8">{/*className="container-fluid py-8" */}
							<div className="container mx-auto">
								<div className="row flex flex-wrap items-center py-10" style={{ background: "#2f2f2f", borderRadius: "25px" }}>{/* className="row d-flex align-items-center py-10" */}
									<div className="lg:w-5/12 flex-shrink-0 grow-0 basis-auto w-full">{/*className="col-lg-7 col-12 col-lg-order-first col-order-last" */}
										<div className="2xl:max-w-2xl mx-auto">{/*className="mw-xxl mx-auto" */}
											<img alt='' src="https://tobeto.s3.cloud.ngn.com.tr/spider_2_75142468a4.gif" className="w-100" />
										</div>
									</div>
									<div className="lg:w-5/12 flex-shrink-0 w-full mx-auto">
										<div className="max-w-lg md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-2xl mx-auto mobile-text-center">{/*className="mw-lg mx-auto mobile-text-center"> */}
											<h4 className="text-white ml-3 font-bold text-4xl">
												Tobeto'İşte Başarı Modeli'mizi Keşfet!
											</h4>
											<p className="block text-white ml-3 mt-6">
												Üyelerimize ücretsiz sunduğumuz, iş bulma ve işte başarılı olma sürecinde gerekli 80 tane davranış ifadesinden oluşan Tobeto 'İşte Başarı Modeli' ile, profesyonellik yetkinliklerini ölç,
												<br /> raporunu gör.
											</p>
											<Link className="md:inline-block mt-3 mx-2 bg-purple-600 text-white px-3 py-1 rounded-2xl font-extrabold hover:bg-purple-800" to="/kayit-ol">Hemen Başla</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='container mx-auto w-full py-8'>{/* className='mb-6 container mt-20'*/}
				<div className='flex flex-wrap py-6 bg-[#2f2f2f] rounded-3xl px-5'>{/* className='row acc-bg px-5'*/}
					<div className="flex-shrink-0 grow-0 basis-auto w-full">{/* className='col-12'*/}
						<div className="accordion px-5 py-4 relative" id="accordionExample">{/* className='accordion spec-acc'*/}
							<div className="mb-10 bg-transparent border-none ">{/* className='accordion-item'*/}
								<div className="flex flex-wrap">{/* className='row'*/}
									<div className="md:w-full md:flex-shrink-0 md:grow-0 md:basis-auto flex-shrink-0 grow-0 basis-auto w-full">{/* className='col-md-12 col-12'*/}
										{/* <div className="border-none h-0.5 w-full block">
														<div className="h-full bg-blue-500 animate-fill"></div>
												</div> */}{/* Animayson için eklenecek div */}
										<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none" id="heading1">{/* className='accordion-header'*/}
											<button className="bg-transparent hover:text-purple-900 text-purple-800 font-semibold text-2xl pb-2" aria-label="show menu" onClick={() => setshow1(!show1)}>{/* className='accordion-button'*/}
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
									<div className="flex-shrink-0 grow-0 basis-auto w-full">{/*className="col-12" */}
										<div id="collapse1" className={` ${show1 ? "flex" : "hidden"}`} style={{}}>
											<div className="accordion-body border-b-2 border-gray-800 border-solid pb-4">{/*className="accordion-body tb-bottom" */}
												<div className="flex flex-wrap bg-transparent text-white justify-between">{/*className="row" */}
													<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full">{/*className="col-lg-9 col-12" */}
														<div className="text-lg max-w-[90%]">{/*className="acc-content-text" */}
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
													<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full">
														<img className="max-w-full h-auto" src="https://tobeto.com/a1.png" alt="" style={{ borderRadius: "16px" }} />
													</div>
												</div>
												<div className="border-b-[1px] border-solid border-gray-300 pb-5 hidden"></div>
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
										<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none" id="heading1">
											<button className="bg-transparent hover:text-purple-900 text-purple-800 font-semibold text-2xl pb-2" aria-label="show menu" onClick={() => setshow2(!show2)}>
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
											<div className="accordion-body border-b-2 border-gray-800 border-solid pb-4">
												<div className="flex flex-wrap bg-transparent text-white justify-between">
													<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full pr-28">
														<div className="text-lg max-w-[90%]">
															Yeni bir meslek. Daha yüksek ücret. Uzaktan çalışma. Hedeflediğin ne olursa olsun, hepsine uygun bir yol mutlaka var. Bir sonraki hamleni planlamaya başlamadan önce üyelerimize ücretsiz sunduğumuz Tobeto Kişisel Gelişim Envanteri'mizi yap, kendin için en uygun kariyer alanlarını keşfet.
														</div>
													</div>
													<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full">
														<img className="max-w-full h-auto" src="https://tobeto.com/a2.png" alt="" style={{ borderRadius: "16px" }} />
													</div>
												</div>
												<div className="border-b-[1px] border-solid border-gray-300 pb-5 hidden"></div>
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
										<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none" id="heading1">
											<button className="bg-transparent hover:text-purple-900 text-purple-800 font-semibold text-2xl pb-2" aria-label="show menu" onClick={() => setshow3(!show3)}>
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
											<div className="accordion-body border-b-2 border-gray-800 border-solid pb-4">
												<div className="flex flex-wrap bg-transparent text-white justify-between">
													<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full pr-28">
														<div className="text-lg max-w-[90%]">
															Codecademy;  50 milyondan fazla üyesinin yeni teknolojik beceriler  konusunda meraklanması, projelere imza atması, kariyerini geliştirmesine yardımcı  olan bir online kodlama eğitimi platformudur. Tobeto'nun, gerçek zamanlı, kendi hızında, etkileşimli öğrenme ortamıyla öğrenmek daha kolay! Üstelik, Türkçe derslerimiz ve öğrenmeni destekleyici kaynaklarımız bu süreci kolaylaştırmak ve hızlandırmak için senin yanında!
														</div>
													</div>
													<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full">
														<img className="max-w-full h-auto" src="https://tobeto.com/calogo.png" alt="" style={{ borderRadius: "16px" }} />
													</div>
												</div>
												<div className="border-b-[1px] border-solid border-gray-300 pb-5 hidden"></div>
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
										<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none" id="heading1">
											<button className="bg-transparent hover:text-purple-900 text-purple-800 font-semibold text-2xl pb-2" aria-label="show menu" onClick={() => setshow4(!show4)}>
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
											<div className="accordion-body border-b-2 border-gray-800 border-solid pb-4">
												<div className="flex flex-wrap bg-transparent text-white justify-between">
													<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full pr-28">
														<div className="text-lg max-w-[90%]">
															Canlı dersler, becerilerini derinleştirebileceğin uygulamalar, gerçek senaryoları deneyimleyebileceğin projeler ve mentör desteği ile becerilerini geliştir, süreci kendin yönet.
														</div>
													</div>
													<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full">
														<img className="max-w-full h-auto" src="https://tobeto.com/a5.png" alt="" style={{ borderRadius: "16px" }} />
													</div>
												</div>
												<div className="border-b-[1px] border-solid border-gray-300 pb-5 hidden"></div>
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
										<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none" id="heading1">
											<button className="bg-transparent hover:text-purple-900 text-purple-800 font-semibold text-2xl pb-2" aria-label="show menu" onClick={() => setshow5(!show5)}>
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
											<div className="accordion-body border-b-2 border-gray-800 border-solid pb-4">
												<div className="flex flex-wrap bg-transparent text-white justify-between">
													<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full pr-28">
														<div className="text-lg max-w-[90%]">
															Uzmanlığın için yeni becerileri kazanmak (reskill) veya yeni bir role başlamak (upskill) için gelişim yolculuğunu tamamla, profilini güncelle, teknoloji odaklı iş fırsatlarıyla eşleş.
														</div>
													</div>
													<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full">
														<img className="max-w-full h-auto" src="https://tobeto.com/a6.png" alt="" style={{ borderRadius: "16px" }} />
													</div>
												</div>
												<div className="border-b-[1px] border-solid border-gray-300 pb-5 hidden"></div>
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
										<h2 className="mb-0 flex justify-between border-b-2 border-[#272727] border-solid shadow-none" id="heading1">
											<button className="bg-transparent hover:text-purple-900 text-purple-800 font-semibold text-2xl pb-2" aria-label="show menu" onClick={() => setshow6(!show6)}>
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
											<div className="accordion-body border-b-2 border-gray-800 border-solid pb-4">
												<div className="flex flex-wrap bg-transparent text-white justify-between">
													<div className="lg:w-9/12 flex-shrink-0 grow-0 basis-auto w-full pr-28">
														<div className="text-lg max-w-[90%]">
															Sürekli öğrenme ve sürdürebilir gelişim için Tobeto topluluğuna dahil ol.
														</div>
													</div>
													<div className="lg:w-3/12 flex-shrink-0 grow-0 basis-auto w-full">
														<img className="max-w-full h-auto" src="https://tobeto.com/a4.png" alt="" style={{ borderRadius: "16px" }} />
													</div>
												</div>
												<div className="border-b-[1px] border-solid border-gray-300 pb-5 hidden"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mobile-none-1200 brand-slider mb-8 mt-50">
				<div className="slide-track">
					<div className="slide">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75" />
							</span>
							<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75&amp;w=96&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75&amp;w=256&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="max-w-full h-auto" loading="lazy" />
							</noscript>
						</span>
					</div>
					<div className="slide">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75" />
							</span>
							<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75&amp;w=1920&amp;q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75&amp;w=1080&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75&amp;w=1920&amp;q=75 2x" />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&amp;w=1920&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&amp;w=1920&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="max-w-full h-auto" loading="lazy" />
							</noscript>
						</span>
					</div>
					<div className="slide">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75" />
							</span>
							<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=256&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=640&amp;q=75 2x" />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=256&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=640&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="max-w-full h-auto" loading="lazy" />
							</noscript>
						</span>
					</div>
					<div className="slide">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75" />
							</span>
							<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=256&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=640&amp;q=75 2x" />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=256&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=640&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="max-w-full h-auto" loading="lazy" />
							</noscript>
						</span>
					</div>
					<div className="slide">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=640&q=75" />
							</span>
							<img alt="" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=640&q=75&amp;w=256&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=640&q=75=75&amp;w=640&amp;q=75 2x" />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=640&q=75&amp;w=640&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=256&q=75&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="max-w-full h-auto" loading="lazy" />
							</noscript>
						</span>
					</div>
					<div className="slide">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75" />
							</span>
							<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=3840&amp;q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=1080&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=3840&amp;q=75 2x" />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=1080&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=3840&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=3840&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="img-fluid" loading="lazy" />
							</noscript>
						</span>
					</div>
				</div>
			</div>

			<div className='pb-20 mt-20'>
				<div className='mobile-display-1200 conteudo'>{/*className='mobile-display-1200 conteudo' */}
					<div className='carrosel '>{/* className='w-400 h-200 top-50 relative mx-auto' */}
						<div className="caixa__card cc__1">
							<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
								<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
									<img alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
								</span>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75&amp;w=96&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75&amp;w=256&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img-fluid" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
							</span>
						</div>
						<div className="caixa__card cc__2">
							<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
								<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
									<img alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
								</span>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75&amp;w=96&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75&amp;w=256&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img-fluid" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
							</span>
						</div>
						<div className="caixa__card cc__3">
							<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
								<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
									<img alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=256&q=75" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
								</span>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=256&q=75&amp;w=96&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=256&q=75&amp;w=256&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=256&q=75&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img-fluid" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
							</span>
						</div>
						<div className="caixa__card cc__4">
							<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
								<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
									<img alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
								</span>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=96&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=256&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img-fluid" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
							</span>
						</div>
						<div className="caixa__card cc__5">
							<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
								<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
									<img alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=256&q=75" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
								</span>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=256&q=75&amp;w=96&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=256&q=75&amp;w=256&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=256&q=75&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img-fluid" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
							</span>
						</div>
						<div className="caixa__card cc__6">
							<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
								<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
									<img alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
								</span>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=96&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&w=256&q=75&amp;w=256&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img-fluid" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main
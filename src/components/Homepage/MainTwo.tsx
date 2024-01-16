import { useState } from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const MainTwo = (props: Props) => {

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
		<div className="container mx-auto max-w-6xl w-full px-0">{/*className="container" */}
			<div className="flex flex-wrap mt-10 mx-5 py-20">{/* className="row py-20 " */}
				<div className="lg:w-5/12 flex-shrink-0 grow-0 basis-auto w-full">{/* className="col-lg-5 col-12 " */}
					<h3 className="text-white mt-0 mb-2 font-black !leading-[45px] text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl">Hangi Konuda Kendini<br />Geliştirmek İstersin?</h3>
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
					<div className="absolute z-1 -top-20 -left-20">{/*className="tab-vector" */}
						<img src="https://tobeto.s3.cloud.ngn.com.tr/dot_purple_358e282aef.svg?updated_at=2022-09-20T12:52:57.402Z" alt="" width="250" height="250" />
					</div>
					<div className="tab-content block w-full lg:ml-4 mr-0 pr-0" id="v-pills-tabContent">
						{p1Visible &&
							<div className="tab-pane animate-[opacity_.15s_linear] show active tabs-pane" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">{/*className="tab-pane fade show active tabs-pane" */}
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
						{p2Visible &&
							<div className="tab-pane animate-[opacity_.15s_linear] tabs-pane" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">{/*className="tab-pane fade tabs-pane" */}
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
	)
}

export default MainTwo
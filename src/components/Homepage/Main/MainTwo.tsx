import { useState } from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const MainTwo = (props: Props) => {

	const [activeButton, setActiveButton] = useState('button1');
	const [p1Visible, setP1Visible] = useState(true);
	const [p2Visible, setP2Visible] = useState(false);

	const handleButtonClick = (buttonId: string) => {
		setActiveButton(buttonId);
		
		if (buttonId === 'button1') {
			setP1Visible(true);
			setP2Visible(false);
		} else {
			setP1Visible(false);
			setP2Visible(true);
		}
	};

	return (
		<div className="container mx-auto [@media(max-width:640px)]:!max-w-full max-w-6xl">
			<div className="flex flex-wrap mt-10 mx-5 py-20">
				<div className="lg:w-5/12 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto flex-shrink-0 grow-0 basis-auto w-full">
					<h3 className="text-white mt-0 mb-2 font-black !leading-[45px] [@media(max-width:768px)]:text-2xl md:text-3xl xl:text-4xl">Hangi Konuda Kendini<br />Geliştirmek İstersin?</h3>
					<div className="flex flex-wrap pl-0 mb-0 list-none flex-col rounded-md mr-3 my-14" role="tablist" aria-orientation="vertical">
						<button onClick={() => handleButtonClick('button1')} className={`px-6 py-9 hover:border border-gray-600 text-left rounded-2xl m-0 mb-5 ${activeButton === 'button1' ? 'bg-white' : 'bg-[#181717] '}`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
							<div className={`text-2xl text-gray-700 font-semibold mb-4 ${activeButton === 'button1' ? 'text-gray-700 ' : 'text-white'}`}>
								Teknik ve Profesyonel Eğitimler
							</div>
							<div className="text-base text-gray-500 font-normal text-left">
								Kapsamlı beceri setlerinden, gelişmek istediğin konuyu seç, kariyerinde bir adım öne geç.
							</div>
						</button>
						<button onClick={() => handleButtonClick('button2')} className={`px-6 py-9 hover:border border-gray-600 text-left rounded-2xl mb-5  ${activeButton === 'button2' ? ' bg-white' : ' bg-[#181717]'}`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="false">
							<div className={`text-2xl text-gray-700 font-semibold mb-4 ${activeButton === 'button2' ? 'text-gray-700 ' : 'text-white '}`}>
								Yeni bir meslek
							</div>
							<div className="text-base text-gray-500 font-normal text-left">
								İhtiyaç duyduğun kapsamlı beceri setlerinden oluşan eğitim yolculuğunu seç, yazılım veya profesyonel iş alanlarında tercih ettiğin yeni mesleğine doğru ilk adımını at.
							</div>
						</button>
					</div>
				</div>

				<div className="lg:w-1/12 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto flex-shrink-0 grow-0 basis-auto w-full"></div>

				<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto flex-shrink-0 grow-0 basis-auto w-full relative">
					<div className="absolute z-1 !-top-20 !-left-20">
						<img src="https://tobeto.s3.cloud.ngn.com.tr/dot_purple_358e282aef.svg?updated_at=2022-09-20T12:52:57.402Z" alt="" width="250" height="250" />
					</div>
					<div className="w-full lg:ml-4 mr-0 pr-0">
						{p1Visible &&
							<div className="transition-opacity rounded-[15px] bg-[#2f2f2f] p-[30px] relative">
								<div className="flex flex-wrap -mt-2 -mx-1">
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<Link to={""} className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{ color: "#000!important", padding:"40px 30px 30px" }}>
											Object Oriented Programming (OOP)
										</Link>
									</div>
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<Link to={""} className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{ color: "#000!important", padding:"40px 30px 30px" }}>
											Microsoft SQL Server Database
										</Link>
									</div>
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<Link to={""} className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{ color: "#000!important", padding:"40px 30px 30px" }}>
											HTML-CSS-SASS
										</Link>
									</div>
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<Link to={""} className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{ color: "#000!important", padding:"40px 30px 30px" }}>
											Javascript
										</Link>
									</div>
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<Link to={""} className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{ color: "#000!important", padding:"40px 30px 30px" }}>
											ASPNET Core MVC
										</Link>
									</div>
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<Link to={""} className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{ color: "#000!important", padding:"40px 30px 30px" }}>
											C# Programming
										</Link>
									</div>
								</div>
							</div>}
						{p2Visible &&
							<div className="transition-opacity rounded-[15px] bg-[#2f2f2f] p-[30px] relative">
								<div className="flex flex-wrap -mt-2 -mx-1">
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<Link to={""} className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{ color: "#000!important", padding:"40px 30px 30px" }}>
											Full Stack Developer
										</Link>
									</div>
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<Link to={""} className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{ color: "#000!important", padding:"40px 30px 30px" }}>
											Front End Developer
										</Link>
									</div>
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<Link to={""} className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{ color: "#000!important", padding:"40px 30px 30px" }}>
											Web &amp; Mobile Developer
										</Link>
									</div>
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<div className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{padding:"40px 30px 30px"}}>
											Siber <br /> Güvenlik Uzmanı
											<div className="absolute top-0 left-0 w-full h-full z-10">
												<div className="flex items-end justify-end h-full px-4 py-2">
													<img src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z" alt="" className="inline-block align-middle w-[35%]" />
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<div className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{padding:"40px 30px 30px"}}>
											Veri <br /> Bilimi Uzmanı
											<div className="absolute top-0 left-0 w-full h-full z-10">
												<div className="flex items-end justify-end h-full px-4 py-2">
													<img src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z" alt="" className="inline-block align-middle w-[35%]" />
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-1/2 lg:flex-grow-0 lg:flex-shrink-0 lg:basis-auto w-1/2 flex-grow-0 flex-shrink-0 basis-auto p-2">
										<div className="bg-white rounded-[9px] border-b-2 border-solid border-[#93f] flex justify-center items-center text-center font-bold text-lg min-h-[180px] relative !text-black mb-5" style={{padding:"40px 30px 30px"}}>
											UI/UX <br /> Developer
											<div className="absolute top-0 left-0 w-full h-full z-10">
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
				<div className="!my-10 !flex !justify-end w-full max-w-full">
					<Link to="#" className="font-normal text-base text-gray-300 hover:text-[#93f] md:mx-auto">Tümünü İncele &gt;</Link>
				</div>
			</div>
		</div>
	)
}

export default MainTwo
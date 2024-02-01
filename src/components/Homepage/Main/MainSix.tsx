import { Link } from "react-router-dom"

type Props = {}

const MainSix = (props: Props) => {
	return (
		<div className="w-full mx-auto !py-8">
			<div  className="container mx-auto [@media(max-width:640px)]:!max-w-full max-w-6xl px-[calc(1.5rem*0.5)]">
				<div className="row flex flex-wrap items-center py-10" style={{ background: "#2f2f2f", borderRadius: "25px" }}>
					<div className="lg:w-5/12 flex-shrink-0 grow-0 basis-auto w-full">
						<div className="2xl:max-w-2xl mx-auto">
							<img alt='' src="https://tobeto.s3.cloud.ngn.com.tr/spider_2_75142468a4.gif" className="w-100" />
						</div>
					</div>
					<div className="lg:w-5/12 flex-shrink-0 w-full mx-auto">
						<div className="max-w-lg md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-2xl mx-auto [@media(max-width:576px)]:!text-center">
							<h4 className="text-white ml-3 font-bold text-4xl">
								Tobeto'İşte Başarı Modeli'mizi Keşfet!
							</h4>
							<p className="block text-white ml-3 mt-6">
								Üyelerimize ücretsiz sunduğumuz, iş bulma ve işte başarılı olma sürecinde gerekli 80 tane davranış ifadesinden oluşan Tobeto 'İşte Başarı Modeli' ile, profesyonellik yetkinliklerini ölç,
								<br /> raporunu gör.
							</p>
							<Link className="mt-3 mx-2 px-3 py-1 font-extrabold btn text-white border-solid border-[#93f] rounded-3xl bg-[#93f] hover:bg-[#7326bf] hover:border-[#7326bf]" to="/kayit-ol">Hemen Başla</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainSix
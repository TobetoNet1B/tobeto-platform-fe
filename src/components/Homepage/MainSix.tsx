import { Link } from "react-router-dom"

type Props = {}

const MainSix = (props: Props) => {
	return (
		<div className="w-full mx-auto max-w-6xl py-8">{/*className="container-fluid py-8" */}
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
	)
}

export default MainSix
type Props = {}

const MainFour = (props: Props) => {
	return (
		<div className="!w-full mx-auto m-0 section-three lg:px-80 sm:px-10 py-20">{/*className="container-fluid m-0 mp-0 section-three py-20" */}
			{/* mx-[calc((100vw-1152px)/-2+0.4em)]  */}
			<div className="container">
				<div className="relative">
					<p className="text-xl px-10  mx-auto text-center text-white">
						Tobeto Platform'da ücretsiz olarak; sahip olduğun yetkinlikleri değerlendirir,
						<br /> ilgi ve bilgi seviyene göre yüzlerce eğitim içeriğine ulaşırsın. Bunları nasıl tamamlayacağını
						<br /> hızına, bütçene ve zamanına göre kendin belirlersin.
						<br />
						<br /> Hemen ücretsiz üye ol, platforma katıl!
					</p>
					<div className="-left-20 -top-20 absolute z-10">{/*className="tab-vector3" */}
						<img src="https://tobeto.s3.cloud.ngn.com.tr/dot_white_1e7b4378ec.svg?updated_at=2022-09-20T12:52:57.424Z" alt="" width="150" height="150" />
					</div>
					<div className="absolute right-0 -bottom-12">{/*className="tab-vector2" */}
						<img src="https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7.svg?updated_at=2022-07-05T11:08:56.797Z" alt="" width="75" height="75" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainFour
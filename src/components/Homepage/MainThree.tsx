type Props = {}

const MainThree = (props: Props) => {
	return (
		<div className="container ca max-w-6xl mx-auto">
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
	)
}

export default MainThree
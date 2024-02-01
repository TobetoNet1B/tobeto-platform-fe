type Props = {}

const MainThree = (props: Props) => {
	return (
		<div className="container mx-auto [@media(max-width:640px)]:!max-w-full max-w-6xl px-[calc(1.5rem*0.5)] rounded-xl border-[3px] border-solid border-[#93f] items-center" style={{padding:"2em 5% 0.75em 9%",margin:"0em auto 4em auto"}}>
			<div className="flex [@media(max-width:760px)]:flex-col [@media(max-width:760px)]:items-center " style={{ gap: "2em" }}>
				<div className="">
					<img alt='' src="https://tobeto.s3.cloud.ngn.com.tr/calogo_d676092a98.png?updated_at=2022-12-28T12:36:58.291Z" style={{ maxWidth: "172px", height: "auto" }} />
				</div>
				<div>
					<span className="text-[2em] font-semibold text-white">
						Dünyanın en büyük kodlama eğitimi platformu içerikleri şimdi Tobeto deneyimi ile!
					</span>
				</div>
			</div>
			<p className="text-[1.5em] font-medium text-white mt-[2em]">
				Codecademy’nin tüm kaynaklarına Tobeto aboneliğinin sağlayacağı avantajlar, alanında uzman eğitmenlerle canlı dersler ve mentörlerin desteği ile erişebilir, yeni kariyerine başlayabilirsin!
			</p>
		</div>
	)
}

export default MainThree
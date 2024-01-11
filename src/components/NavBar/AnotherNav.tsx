type Props = {}

const AnotherNav = (props: Props) => {
	return (
		<div className='box-border flex items-center sticky min-h-16 w-full z-50 top-0 left-0 bg-[#1e0f41] bg-cover'>{/* className='ik-banner' */}
			<div className='mx-auto box-border block container'>
				<div className='flex items-center justify-around flex-row gap-4'>{/*className='ik-banner-top' */}
					<div className='' ><span className='ik-logo '></span>{/*className='ik-logo'*/}</div>
					<div className="block">{/* className="mobile-none"*/}
						<span className="h-14 flex items-center text-white font-black text-3xl">Aradığın {/* className="text-ik fw-bold"*/}
							<span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>İş
							<span style={{ color: "rgb(0, 176, 120)" }}>"&nbsp;</span> Burada!
						</span>
					</div>
					<div className=''>
						<button className='bg-[#00b078] border-2 border-[#00b078] rounded-full px-8 py-2 text-lg font-black text-[#1e0f41] leading-5 min-w-[140px]'>Başvur</button>{/*className='ik-btn' */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AnotherNav
type Props = {}

const AppealNav = (props: Props) => {
	return (
		<div className='box-border flex items-center min-h-16 bg-[#1e0f41] bg-cover'>{/* className='ik-banner' */}
			<div className='mx-auto box-border block container'>
				<div className='flex items-center justify-around flex-row gap-4'>{/*className='ik-banner-top' */}
					<div className='' ><span className='ik-logo '></span>{/*className='ik-logo'*/}</div>
					<div className="md:block hidden">{/* className="mobile-none"*/}
						<span className="h-14 flex items-center text-white font-black text-2xl">Aradığın {/* className="text-ik fw-bold"*/}
							<span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>İş
							<span style={{ color: "rgb(0, 176, 120)" }}>"&nbsp;</span> Burada!
						</span>
					</div>
					<div className=''>
						<button className='bg-[#00b078] border-2 border-[#00b078] rounded-full px-8 py-2 text-sm font-black text-[#1e0f41] leading-5 min-w-[140px]'>{/*className='ik-btn' */}
							Başvur
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AppealNav
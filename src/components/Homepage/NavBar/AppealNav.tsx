type Props = {}

const AppealNav = (props: Props) => {
	return (
		<div className='box-border flex items-center min-h-16 bg-[#1e0f41] bg-cover'>
			<div className='mx-auto box-border block container'>
				<div className='flex items-center justify-around flex-row gap-4'>
					<div className='' ><span className="items-center after:items-center after:content-[''] after:w-[200px] after:h-[42px] after:flex after:bg-[url('https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg')] after:bg-[length:200px_42px] [@media(max-width:762px)]:h-[62px] [@media(max-width:762px)]:flex [@media(max-width:762px)]:items-center"></span></div>
					<div className="md:block hidden">
						<span className="h-14 flex items-center text-white font-black text-2xl">Aradığın 
							<span style={{ color: "rgb(0, 176, 120)" }}>&nbsp;"</span>İş
							<span style={{ color: "rgb(0, 176, 120)" }}>"&nbsp;</span> Burada!
						</span>
					</div>
					<div className=''>
						<button className='bg-[#00b078] border-2 border-[#00b078] rounded-full px-8 py-2 text-sm font-black text-[#1e0f41] leading-5 min-w-[140px]'>
							Başvur
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AppealNav
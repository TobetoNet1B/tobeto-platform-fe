import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { SelectIsLoggedIn } from 'store/Auth/AuthSlice';

type Props = {}

const MainOne = (props: Props) => {

	const isLoggedIn = useSelector(SelectIsLoggedIn);

	return (
		<div className='container mx-auto [@media(max-width:640px)]:!max-w-full px-[calc(1.5rem*0.5)] pt-20 xl:max-w-[1140px]'>
			<div className='flex flex-wrap mx-[calc(1.5rem*-0.5)]'>
				<div className="md:flex-grow-0 md:flex-shrink-0 md:basis-auto md:w-1/2 flex-grow-0 flex-shrink-0 basis-auto w-full md:pr-3 pr-0 mt-1 [@media(max-width:640px)]:!ml-2 [@media(max-width:640px)]:!pr-3">
					<div className='bg-cover bg-center bg-no-repeat  flex items-start justify-center flex-col p-[2em] relative h-[300px] rounded-[14px] transition-all duration-[400] [@media(max-width:762px)]:mb-[1em] [@media(max-width:762px)]:-mt-[2em]' style={{ backgroundImage: `url("https://tobeto.com/_next/static/media/ik02.02de641a.svg")` }}>
						<span className='w-1/2 text-white font-bold !text-[20px] [@media(max-width:325px)]:z-20 z-20'>Hayalindeki teknoloji kariyerini başlat!</span>
						<span className='w-1/2 text-white font-bold !text-[20px] [@media(max-width:325px)]:z-20 z-20' style={{ display: 'flex', fontStyle: "italic" }}>
							İstediğin
							<div className='inline-block'>
								<span className='absolute w-fit !text-inherit opacity-0 italic bg-[#a24ff5] py-0 pr-2 pl-0 ml-2 rounded-md animate-fade'>&nbsp;yoldan</span>
								<span className='absolute w-fit !text-inherit opacity-0 italic bg-[#a24ff5] py-0 pr-2 pl-0 ml-2 rounded-md animate-[fade_4s_ease_2s_infinite]'>&nbsp;hızda</span>
							</div>
						</span>
						<Link className='[@media(max-width:325px)]:z-20 btn text-white border-solid border-[#93f] rounded-3xl bg-[#93f] hover:bg-[#7326bf] hover:border-[#7326bf] !mt-5' to="/kayit-ol">Ücretsiz Üye Ol
						</Link>
						<div className='absolute right-4 bottom-4 max-w-[200px] max-h-[200px] z-10 opacity-80'>
							<span className='w-1/2 text-white font-bold text-2xl z-10' style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
								<span className='w-1/2 text-white font-bold text-2xl z-10' style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
									<img className='align-middle' alt="" aria-hidden="true" src={"https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=1920&q=75"} style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} />
								</span>
								<img className='align-middle' alt='' src={"https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=1920&q=75"} srcSet={"https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75&amp;w=640&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75&amp;w=1920&amp;q=75 2x"} decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
							</span>
						</div>
					</div>
				</div>
				{/* !isLoggedIn && */
					<div className="md:flex-grow-0 md:flex-shrink-0 md:basis-auto md:w-1/2 flex-grow-0 flex-shrink-0 basis-auto w-full md:pl-3 pl-0 mt-1 [@media(max-width:640px)]:!ml-2 [@media(max-width:640px)]:!pr-3">
						<div className='ik-card'>
							<div className='relative flex flex-row items-center justify-between [@media(max-width:900px)]:relative [@media(max-width:900px)]:!flex-col [@media(max-width:900px)]:flex [@media(max-width:900px)]:items-center [@media(max-width:900px)]:justify-between [@media(max-width:900px)]:gap-[2em] [@media(max-width:767px)]:relative [@media(max-width:767px)]:!flex-col [@media(max-width:767px)]:flex [@media(max-width:767px)]:items-center [@media(max-width:767px)]:justify-between [@media(max-width:767px)]:gap-[2em]'>
								<div className='relative left-0 w-[70%] !pl-0 [@media(max-width:900px)]:top-[20%] [@media(max-width:767px)]:!w-full [@media(max-width:767px)]:top-[25%]'>
									<span className="bg-[#fdfdfd] py-[0.75em] px-[4em] rounded-tr-[2em] rounded-br-[2em] flex w-auto justify-end items-center relative text-[#1d1141] text-[1.25em] !font-bold after:content-[''] after:w-[2em] after:h-[2em] after:bg-[#1d1141] after:rounded-[1.5em] after:right-[0.45em] after:absolute [@media(max-width:900px)]:text-[0.75em] [@media(max-width:900px)]:justify-center [@media(max-width:767px)]:text-[0.7em] [@media(max-width:767px)]:justify-center [@media(max-width:767px)]:!w-[85vw] [@media(max-width:1024px)]:text-[1em]" style={{ padding: "0.75em 4em" }}>
										Aradığın
										<span style={{ color: 'rgb(0, 176, 120)' }}>&nbsp;"</span>
										İş
										<span style={{ color: 'rgb(0, 176, 120)' }}>"&nbsp;</span>
										Burada!
									</span>
								</div>
								<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
									<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%;" }}>
										<img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27100%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} className='align-middle' />
									</span>
									<img alt="İstanbul Kodluyor Logo " srcSet="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg 1x, https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg 2x" src="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg" decoding="async" data-nimg="intrinsic" className="!px-4" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
								</span>
							</div>
							<Link className='btn text-[#1d1141] border-solid border-[#0fcdfa] rounded-3xl bg-[#0fcdfa] hover:bg-[#05b9e1] hover:border-[#05b9e1] !mt-5' to={""}>Başvur
							</Link>
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default MainOne
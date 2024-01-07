import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function text2() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show3, setshow3] = useState(false);
  return (
    <div className="container pt-52">
        <div className=' flex flex-wrap -mt-[-1*var(--bs-gutter-y)] -mr-[-.5*var(--bs-gutter-x)] -ml-[-.5*var(--bs-gutter-x)]'>
        <div className="md:flex md:flex-shrink-0 md:w-1/2 flex-shrink-0 w-full">{/* className="col-md-6 col-12" */}
							<div className='bg-cover bg-center bg-no-repeat  flex items-start justify-center flex-col p-8 relative h-[300px] rounded-[14px]' style={{backgroundImage: `url("https://tobeto.com/_next/static/media/ik02.02de641a.svg")`}}>{/*className='tobeto-card' */}
								<span className='w-1/2 text-white font-bold text-2xl z-10'>Hayalindeki teknoloji kariyerini başlat!</span>
								<span className='w-1/2 text-white font-bold text-2xl z-10' style={{display:'flex', fontStyle:"italic"}}>
									İstediğin
									<div className='inline-block w-1/2 text-white font-bold text-2xl z-10'>{/* className="word-container" */}
										<span className='absolute opacity-0 italic bg-purple-600 p-0 ml-2 rounded-md animate-fade'>&nbsp;yoldan</span>{/*className='word1' */}
										<span className='absolute opacity-0 italic bg-purple-600 p-0 ml-2 rounded-md animate-[fade_4s_ease_2s_infinite]'>&nbsp;hızda</span>{/* className='word2' */}
									</div>
								</span>
								<Link className='bg-purple-800 rounded-full p-2 font-semibold text-white leading-5 min-w-[140px] md:inline-block mt-5' to="#">Ücretsiz Üye Ol
								</Link>{/*className='btn d-md-inline-block mt-5 btn-secondary' */}
								<div className='absolute right-4 bottom-4 max-w-52 max-h-52 z-10 opacity-80'>{/*className='person' */}
									<span className='w-1/2 text-white font-bold text-2xl z-10' style={{boxSizing:"border-box",display:"inline-block",overflow:"hidden",width:"initial",height:"initial",background:"none", opacity:1,border:"0px",margin:"0px",padding:"0px",position:"relative",maxWidth:"100%"}}>
										<span style={{boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none", opacity:1,border:"0px",margin:"0px",padding:"0px",maxWidth:"100%"}}>
											<img className='align-middle overflow-clip' alt="" aria-hidden="true" src={"https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=1920&q=75"} style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>
										</span> 
										<img className='align-middle overflow-clip' alt='' src={"https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=1920&q=75"} srcSet={"https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75&amp;w=640&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75&amp;w=1920&amp;q=75 2x"} decoding="async" data-nimg="intrinsic" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
									</span>
								</div>
							</div>
						</div>
    <div className="md:flex md:flex-shrink-0 md:w-1/2 flex-shrink-0 w-full">{/* className="col-md-6 col-12" */}
							<div className='ik-card'>
								<div className='ik-container'>
									<div className='header-left-3'>
                                        <span className='absolute opacity-0 italic bg-purple-600 p-0 ml-2 rounded-md animate-fade'>&nbsp;yoldan</span>{/*className='word1' */}
										<span className='absolute opacity-0 italic bg-purple-600 p-0 ml-2 rounded-md animate-[fade_4s_ease_2s_infinite]'>&nbsp;hızda</span>{/* className='word2' */}
									</div>
                                    <Link className='bg-cyan-500 rounded-full px-2 py-4 font-semibold text-black leading-5 min-w-36 md:inline-block mt-5 text-center align-middle' to={""}>Başvur
								</Link>
									<span className='w-1/2 text-white font-bold text-2xl z-10' style={{boxSizing:"border-box",display:"inline-block",overflow:"hidden",width:"initial",height:"initial",background:"none", opacity:1,border:"0px",margin:"0px",padding:"0px",position:"relative",maxWidth:"100%"}}>
										<span style={{boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none", opacity:1,border:"0px",margin:"0px",padding:"0px",maxWidth:"100%"}}>
											<img className='align-middle overflow-clip' alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27100%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>	
										</span>
										<img alt="İstanbul Kodluyor Logo " srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=1920&q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=1920&q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=1920&q=75" decoding="async" data-nimg="intrinsic" className='align-middle overflow-clip' style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
									</span>
								</div>
								
							</div>
						</div>
    </div>
    </div>
  );
}

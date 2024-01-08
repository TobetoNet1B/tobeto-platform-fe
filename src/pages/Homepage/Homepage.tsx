import React from 'react'
import { Link } from 'react-router-dom';
import "./homepage.css";

type Props = {};

const Homepage = (props: Props) => {
	return (
		<div className='block box-border font-mono font-sans'>
			<div className='bg-zinc-900' style={{height:"0.5rem",overflow:"visible",width:"auto"}}>{/* className='bg-front-dark bg-front-width' */}
			<section className='box-border'>{/* className='web-header' */}
				<nav className="top-70 px-3 pt-5 pb-5 pr-2 pl-2 m-0 w-full border-0 fixed flex flex-wrap items-center justify-between z-50 bg-gray-800">{/*className="navbar bg-web navbar-expand-xxl w-100 m-0 z-index-999 position-fixed border-0 px-3 py-5" */}
					<div className="flex items-center justify-between mx-auto">{/*container-fluid */}
						<Link to="#">
							<span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
								<span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
									<img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27165%27%20height=%2734%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>
								</span>
									<img alt="" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&amp;w=384&amp;q=75" decoding="async" data-nimg="intrinsic" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
							</span>
						</Link>
						<button className="outline-none p-0 inline-block text-center no-underline align-middle uppercase leading-none pb-1 pl-6 pr-6" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z" fill="#fff">
								</path>
							</svg>
						</button>{/*className="btn p-0 d-xl-none " */}
						<ul className="flex justify-center flex-row hidden mt-4 mb-4 ml-0 mr-0 pl-40">{/*className="d-none d-xl-flex flex-row justify-content-center navbar-nav" */}
							<li className="box-border relative flex flex-wrap items-center justify-between list-item nav-item">{/*className="nav-item" */}
								<Link className="nav-link " to="/hakkimizda">Biz Kimiz?</Link>
							</li>
							<li className="nav-item dropdown tbt-dropdown">
								<Link className="nav-link tnav-link " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Neler Sunuyoruz?
								</Link>
												<ul className="dropdown-menu dd-bg w-100">
													<li className="box-border relative flex flex-wrap items-center justify-between list-item nav-item">{/*className="nav-item" */}
														<Link className="m-0 nav-link " to="/bireyler-icin">Bireyler için</Link>
													</li>
													<li className="box-border relative flex flex-wrap items-center justify-between list-item nav-item">{/*className="nav-item" */}
														<Link className="m-0 nav-link " to="/kurumlar-icin">Kurumlar için</Link>
													</li>
												</ul>
											</li>
											<li className="flex justify-center flex-row hidden mt-4 mb-4 ml-0 mr-0 pl-40">{/*className="nav-item" */}
												<Link className="nav-link " to="/katalog">Katalog</Link>
											</li>
											<li className="flex justify-center flex-row hidden mt-4 mb-4 ml-0 mr-0 pl-40">{/*className="nav-item" */}
												<Link className="nav-link " to="/codecademy">Codecademy</Link>
											</li>
											<li className="nav-item dropdown tbt-dropdown">
												<Link className="nav-link tnav-link " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tobeto'da Bu Ay
												</Link>
												<ul className="dropdown-menu dd-bg w-100">
													<li className="flex justify-center flex-row hidden mt-4 mb-4 ml-0 mr-0 pl-40">{/*className="nav-item" */}
														<Link className="m-0 nav-link " to="/blog">Blog</Link>
													</li>
													<li className="flex justify-center flex-row hidden mt-4 mb-4 ml-0 mr-0 pl-40">{/*className="nav-item" */}
														<Link className="m-0 nav-link " to="/basinda-biz">Basında Biz</Link>
													</li>
													<li className="flex justify-center flex-row hidden mt-4 mb-4 ml-0 mr-0 pl-40">{/*className="nav-item" */}
														<Link className="m-0 nav-link " to="/takvim-anasayfa">Takvim</Link>
													</li>
													<li className="flex justify-center flex-row hidden mt-4 mb-4 ml-0 mr-0 pl-40">{/*className="nav-item" */}
														<Link className="m-0 nav-link " to="/istanbul-kodluyor">İstanbul Kodluyor</Link>
													</li>
												</ul>
											</li>
										</ul>
										<div className="d-none d-xl-block">
											<Link className="btn border-light text-light mx-4" to="/giris">Giriş Yap</Link>
											<Link className="btn mx-4 btn-rainbow" to="/kayit-ol">Ücretsiz Üye Ol</Link>
										</div>				
					</div>
				</nav>
				<div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
					<div className="offcanvas-header">
						<Link className="me-auto navbar-brand" to="#">
							<span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
								<span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
									<img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27165%27%20height=%2734%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>
								</span>
								<img alt="" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&amp;w=384&amp;q=75" decoding="async" data-nimg="intrinsic" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
							</span>
						</Link>
						<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div className="offcanvas-body">
						<div>
							<ul className="nav flex-column">
								<li className="nav-item">
									<a className="nav-link " href="/hakkimizda">Biz Kimiz?</a>
								</li>
								<li className="nav-item dropdown tbt-dropdown">
									<Link className="nav-link tnav-link " to="#" role="button" data-bs-toggle="collapse" data-bs-target="#collapseNav1" aria-expanded="false" aria-controls="collapseNav1">Neler Sunuyoruz?
									</Link>
									<div id="collapseNav1" className="collapse collapse-navbar">
										<ul className=" collapse-nav-bg ">
											<li className="nav-item">
												<Link className="m-0 nav-link " to="/bireyler-icin">Bireyler için</Link>
											</li>
											<li className="nav-item">
												<Link className="m-0 nav-link " to="/kurumlar-icin">Kurumlar için</Link>
											</li>
										</ul>
									</div>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/katalog">Katalog</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link " to="/codecademy">Codecademy</Link>
								</li>
								<li className="nav-item dropdown tbt-dropdown">
									<Link className="nav-link tnav-link " to="#" role="button" data-bs-toggle="collapse" data-bs-target="#collapseNav2" aria-expanded="false" aria-controls="collapseNav2">Tobeto'da Bu Ay</Link>
									<div id="collapseNav2" className="collapse collapse-navbar">
										<ul className="collapse-nav-bg">
											<li className="nav-item">
												<Link className="m-0 nav-link " to="/blog">Blog</Link>
											</li>
											<li className="nav-item">
												<Link className="m-0 nav-link" to="/basinda-biz">Basında Biz</Link>
											</li>
											<li className="nav-item">
												<Link className="m-0 nav-link " to="/takvim-anasayfa">Takvim</Link>
											</li>
											<li className="nav-item">
												<Link className="m-0 nav-link " to="/istanbul-kodluyor">İstanbul Kodluyor</Link>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						<div className="mt-auto">
							<div className="py-6">
								<Link className="w-100 btn btn-dark" to="#">Giriş Yap</Link>
								<Link className="w-100 btn btn-primary mt-3 btn-rainbow" to="#">Ücretsiz Üye Ol</Link>
							</div>
							<p className="mb-4 small text-center text-muted">© 2021 Tüm hakları saklıdır.</p>
						</div>
					</div>
				</div>
				<div className="calendarBtn"><div className="calendar-btn"></div></div>
			</section>

			<main className='bg-amber-400 block box-border'>

				<div className='min-h-20 flex items-center fixed w-screen top-0 left-0 z-24 bg-purple-800 bg-cover'>{/* bu div flex olacak-className='ik-banner' */}
					<div className='container'>
						<div className='flex items-center justify-center flex-row gap-4'>{/*className='ik-banner-top' */}
							<div className='' ><span className='ik-logo '></span>{/*className='ik-logo'*/}</div>
							{/* <div className='mobile-none'>mobil için tasarlanacak</div> */}
							<div className=''><button className='bg-green-500 border-2 border-green-500 rounded-full px-8 py-2 text-base font-semibold text-purple-800'>Başvur</button>{/*className='ik-btn' */}</div>
						</div>
					</div>
				</div>

				<div>Tobeto simgesi</div>

				<div className='container pt-52'>
					Başvur ve üye ol kısmı
					<div className='row'>{/* bu div flex olacak */}
						<div className="col-md-6 col-12">
							<div className='tobeto-card bu div flex olacak'>
								<span>Hayalindeki teknoloji kariyerini başlat!</span>
								<span style={{display:'flex', fontStyle:"italic"}}>
									İstediğin
									<div className='word-container'>
										<span className='word1'>&nbsp;yoldan</span>
										<span className='word2'>&nbsp;hızda</span>
									</div>
								</span>
								<Link className='btn d-md-inline-block mt-5 btn-secondary' to="#">Ücretsiz üye ol</Link>
								<div className='person'>
									<span style={{boxSizing:"border-box",display:"inline-block",overflow:"hidden",width:"initial",height:"initial",background:"none", opacity:1,border:"0px",margin:"0px",padding:"0px",position:"relative",maxWidth:"100%"}}>
										<span style={{boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none", opacity:1,border:"0px",margin:"0px",padding:"0px",maxWidth:"100%"}}>
											<img alt="" aria-hidden="true" src={"data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27610%27%20height=%27600%27/%3e"} style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>
										</span>
										<img alt='' srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75&amp;w=640&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75&amp;w=1920&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75&amp;w=1920&amp;q=75" decoding="async" data-nimg="intrinsic" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
									</span>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-12">
							<div className='ik-card'>{/* bu div flex olacak */}
								<div className='ik-container'>{/* bu div flex olacak */}
									<div className='header-left-3'>
										<span className="text-ik fw-bold header-left-text">{/* bu div flex olacak */}
											Aradığın 
											<span style={{color: 'rgb(0, 176, 120)'}}>&nbsp;"</span>
											İş
											<span style={{color: 'rgb(0, 176, 120)'}}>"&nbsp;</span>
											Burada!
										</span>
									</div>
									<span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
										<span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%;"}}>
											<img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27100%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>	
										</span>
										<img alt="İstanbul Kodluyor Logo " srcSet="/_next/static/media/ik-logo-light.ace655db.svg 1x, /_next/static/media/ik-logo-light.ace655db.svg 2x" src="/_next/static/media/ik-logo-light.ace655db.svg" decoding="async" data-nimg="intrinsic" className="px-4" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
									</span>
								</div>
								<Link className='btn d-md-inline-block mt-5 btn-blue' to={""}>Başvur</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="gradient-line2 mt-10"></div>

				<div>
    				<div className="raw-html-embed">
        				<div className="raw-html-embed">
							<style>
								{`
								.ca {
									border-radius: 12px;
									border: 3px solid #93f;
									padding: 2em 5% 0.75em 9%;
									margin: 0em auto 4em auto;
									align-items: center;
								}
								.ca span {
									font-size: 2em;
									font-weight: 600;
									color: #fff;
								}
								.ca p {
									font-size: 1.5em;
									font-weight: 500;
									color: #fff;
									margin-top: 2em;
								}
								.navbar {
									top: 70px !important;
								}
								`}
							</style>
							<div className="container">
								<div className="row py-20 ">{/* bu div flex olacak */}
									<div className="col-lg-5 col-12">
										<h3 className="text-white">Hangi Konuda Kendini<br/>Geliştirmek İstersin?</h3>
										<div className="nav flex-column nav-pills me-3 my-14" id="v-pills-tab" role="tablist" aria-orientation="vertical">{/* bu div flex olacak */}
											<button className="tab-button active mb-5" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
												<div className="title">
													Teknik ve Profesyonel Eğitimler
												</div>
												<div className="desc">
													Kapsamlı beceri setlerinden, gelişmek istediğin konuyu seç, kariyerinde bir adım öne geç.
												</div>
											</button>
											<button className="tab-button" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
												<div className="title">
													Yeni bir meslek
												</div>
												<div className="desc">
													İhtiyaç duyduğun kapsamlı beceri setlerinden oluşan eğitim yolculuğunu seç, yazılım veya profesyonel iş alanlarında tercih ettiğin yeni mesleğine doğru ilk adımını at.
												</div>
											</button>
										</div>
									</div>
									<div className="col-lg-1 col-12"></div>
									<div className="col-lg-6 col-12 tabs-content">
										<div className="tab-vector">
											<img src="https://tobeto.s3.cloud.ngn.com.tr/dot_purple_358e282aef.svg?updated_at=2022-09-20T12:52:57.402Z" alt="" width="250" height="250"/>
										</div>
										<div className="tab-content" id="v-pills-tabContent">
											<div className="tab-pane fade show active tabs-pane" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
												<div className="row">{/* bu div flex olacak */}
													<div className="col-lg-6 col-6">
														<Link to={""} className="tabs-box mb-5 position-relative" style={{color:"#000!important", textDecoration:"none"}}>
															Object Oriented Programming (OOP)
														</Link>
													</div>
													<div className="col-lg-6 col-6">
														<Link to={""} className="tabs-box mb-5 position-relative" style={{color:"#000!important", textDecoration:"none"}}>
															Microsoft SQL Server Database
														</Link>
													</div>
													<div className="col-lg-6 col-6">
														<Link to={""} className="tabs-box mb-5" style={{color:"#000!important", textDecoration:"none"}}>
															HTML-CSS-SASS
														</Link>
													</div>
													<div className="col-lg-6 col-6">
														<Link to={""} className="tabs-box mb-5" style={{color:"#000!important", textDecoration:"none"}}>
															Javascript
														</Link>
													</div>
													<div className="col-lg-6 col-6">
														<Link to={""} className="tabs-box mb-5" style={{color:"#000!important", textDecoration:"none"}}>
															ASPNET Core MVC
														</Link>
													</div>
													<div className="col-lg-6 col-6">
														<Link to={""} className="tabs-box mb-5 position-relative" style={{color:"#000!important", textDecoration:"none"}}>
															C# Programming
														</Link>
													</div>
												</div>
											</div>
											<div className="tab-pane fade tabs-pane" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
												<div className="row">
													<div className="col-lg-6 col-6">
														<Link to={""} className="tabs-box mb-5" style={{color:"#000!important", textDecoration:"none"}}>
															Full Stack Developer
														</Link>
													</div>
													<div className="col-lg-6 col-6">
														<Link to={""} className="tabs-box mb-5" style={{color:"#000!important", textDecoration:"none"}}>
															Front End Developer
														</Link>
													</div>
													<div className="col-lg-6 col-6">
														<Link to={""} className="tabs-box mb-5" style={{color:"#000!important", textDecoration:"none"}}>
															Web &amp; Mobile Developer 
														</Link>
													</div>
													<div className="col-lg-6 col-6">
														<div className="tabs-box mb-5">
															Siber <br/> Güvenlik Uzmanı
															<div className="overlay2">
																<div className="d-flex align-items-end justify-content-end h-100 px-4 py-2">
																	<img src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z" alt="" className="w-35"/>
																</div>
															</div>
														</div>
													</div>
													<div className="col-lg-6 col-6">
														<div className="tabs-box mb-5">
															Veri <br/> Bilimi Uzmanı
															<div className="overlay2">
																<div className="d-flex align-items-end justify-content-end h-100 px-4 py-2">
																	<img src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z" alt="" className="w-35"/>
																</div>
															</div>
														</div>
													</div>
													<div className="col-lg-6 col-6">
														<div className="tabs-box mb-5">
															UI/UX <br/> Developer
															<div className="overlay2">
																<div className="d-flex align-items-end justify-content-end h-100 px-4 py-2">
																	<img src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z" alt="" className="w-35"/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="my-10 d-flex justify-content-end">
										<a href="/egitimler" className="tab-link mobile-mx-auto">Tümünü İncele &gt;</a>
									</div>
								</div>
							</div>
							<div className="container ca">
								<div className="d-flex" style={{gap:"2em"}}>{/* bu div flex olacak */}
									<div>
										<img alt='' src="https://tobeto.s3.cloud.ngn.com.tr/calogo_d676092a98.png?updated_at=2022-12-28T12:36:58.291Z" style={{maxWidth:"172px", height:"auto"}}/>
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
							<div className="container-fluid m-0 mp-0 section-three py-20">
								<div className="container">
									<div className="position-relative">
										<p className="h6 px-10  mx-auto text-center text-white">
											Tobeto Platform'da ücretsiz olarak; sahip olduğun yetkinlikleri değerlendirir,
											<br/> ilgi ve bilgi seviyene göre yüzlerce eğitim içeriğine ulaşırsın. Bunları nasıl tamamlayacağını
											<br/> hızına, bütçene ve zamanına göre kendin belirlersin.
											<br/>
											<br/> Hemen ücretsiz üye ol, platforma katıl!
										</p>
										<div className="tab-vector3">
											<img src="https://tobeto.s3.cloud.ngn.com.tr/dot_white_1e7b4378ec.svg?updated_at=2022-09-20T12:52:57.424Z" alt="" width="150" height="150"/>
										</div>
										<div className="tab-vector2">
											<img src="https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7.svg?updated_at=2022-07-05T11:08:56.797Z" alt="" width="75" height="75"/>
										</div>
									</div>
								</div>
							</div>
							<section className="headfarming-mobile">
								<div className="container">
									<div className="headfarming my-10">
										<p className="h6 px-10  mx-auto text-center text-white">
											Tobeto , 20. yy''ın “headhunting” yaklaşımını “headfarming” olarak değiştirmeyi hedefler!
											<br/>
											<br/> Headfarming: Genç yetenekleri, sürekli öğrenme hevesi içinde olan profesyonelleri, 360 derece eğitmek, değerlendirmek, yönlendirmek ve desteklemektir.
										</p>
									</div>
								</div>
							</section>
							<div className="container-fluid py-8">
								<div className="container">
									<div className="row d-flex align-items-center py-10" style={{background:"#2f2f2f!important", borderRadius:"25px"}}>{/* bu div flex olacak */}
										<div className="col-lg-7 col-12 col-lg-order-first col-order-last">
											<div className="mw-xxl mx-auto">
												<img alt='' src="https://tobeto.s3.cloud.ngn.com.tr/spider_2_75142468a4.gif" className="w-100"/>
											</div>
										</div>
										<div className="col-lg-5 col-12 col-lg-order-first col-order-last">
											<div className="mw-lg mx-auto mobile-text-center">
												<h4 className="text-white ml-3">
													Tobeto 'İşte Başarı Modeli'mizi Keşfet!
												</h4>
												<p className="d-block text-white ml-3 mt-6">
													Üyelerimize ücretsiz sunduğumuz, iş bulma ve işte başarılı olma sürecinde gerekli 80 tane davranış ifadesinden oluşan Tobeto 'İşte Başarı Modeli' ile, profesyonellik yetkinliklerini ölç,
													<br/> raporunu gör.
												</p>
												{/* <link href="/kayit-ol"> */}
												<a className="btn d-md-inline-block mt-3 mx-2 btn-secondary" href="/kayit-ol">Hemen Başla</a>
											</div>
										</div>
									</div>
								</div>
							</div>
        				</div>
    				</div>
				</div>

				<div className='mb-6 container mt-20'>
					<div className='row acc-bg px-5'>{/* bu div flex olacak */}
						<div className="col-12">
							<div className="accordion spec-acc" id="accordionExample">
								<div className="accordion-item">
									<div className="row">{/* bu div flex olacak */}
										<div className="col-md-12 col-12">
											<div className="bar d-none">
												<div className='show'></div>{/* class d-none ve d-show olarak otomatik değişecek */}
											</div>
											<h2 className="accordion-header" id='heading1'>
												<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Tobeto "YazılımdLink Başarı" Testi &amp; Huawei Talent Interview</button>{/* button classınLink collapsed eklenip kaldırılması otomatik yapılacak, kapalı iken collapsed  aria-expanded dLink true false olarak değiştirilecek. Kapalı iken false*/}
											</h2>
										</div>
										<div className="col-12">
											<div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample" style={{}}>{/* classLink akordiyon açıkken show eklenecek kapalıdLink bir şey yok */}
												<div className="accordion-body tb-bottom">
													<div className="row">{/* bu div flex olacak */}
														<div className="col-lg-9 col-12">
															<div className="acc-content-text">
																Tobeto"dLink kendini sürekli değerlendirerek, öğrenim yolculuğunu kişiselleştirebilir ve işe hazırlık sürecine yön verebilirsin.&nbsp;<br/> - Ücretsiz sunduğumuz&nbsp; Tobeto "YazılımdLink Başarı" Testi ile teknik bilgi ve yetkinliklerini kolaylıklLink ölç.<br/>  - Aldığın mesleki eğitimlerin sonundLink uluslararası geçerliliğe sahip Huawei Talent Interview teknik bilgi sınavları ile öğrendiğine emin ol, rozetini al.
															</div>
														</div>
														<div className="col-lg-3 col-12">
															<img className="img-fluid" src="../a1.png" alt="" style={{borderRadius: "16px"}}/>
														</div>
													</div>
													<div className="tb-bottom-2"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<div className="row">{/* bu div flex olacak */}
										<div className="col-md-12 col-12">
											<div className="bar d-none">
												<div className='show'></div>{/* class d-none ve d-show olarak otomatik değişecek */}
											</div>
											<h2 className="accordion-header" id='heading1'>
												<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Tobeto "YazılımdLink Başarı" Testi &amp; Huawei Talent Interview</button>{/* button classınLink collapsed eklenip kaldırılması otomatik yapılacak, kapalı iken collapsed  aria-expanded dLink true false olarak değiştirilecek. Kapalı iken false*/}
											</h2>
										</div>
										<div className="col-12">
											<div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample" style={{}}>{/* classLink akordiyon açıkken show eklenecek kapalıdLink bir şey yok */}
												<div className="accordion-body tb-bottom">
													<div className="row">{/* bu div flex olacak */}
														<div className="col-lg-9 col-12">
															<div className="acc-content-text">
																Tobeto"dLink kendini sürekli değerlendirerek, öğrenim yolculuğunu kişiselleştirebilir ve işe hazırlık sürecine yön verebilirsin.&nbsp;<br/> - Ücretsiz sunduğumuz&nbsp; Tobeto "YazılımdLink Başarı" Testi ile teknik bilgi ve yetkinliklerini kolaylıklLink ölç.<br/>  - Aldığın mesleki eğitimlerin sonundLink uluslararası geçerliliğe sahip Huawei Talent Interview teknik bilgi sınavları ile öğrendiğine emin ol, rozetini al.
															</div>
														</div>
														<div className="col-lg-3 col-12">
															<img className="img-fluid" src="../a1.png" alt="" style={{borderRadius: "16px"}}/>
														</div>
													</div>
													<div className="tb-bottom-2"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<div className="row">{/* bu div flex olacak */}
										<div className="col-md-12 col-12">
											<div className="bar d-none">
												<div className='show'></div>{/* class d-none ve d-show olarak otomatik değişecek */}
											</div>
											<h2 className="accordion-header" id='heading1'>
												<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Tobeto "YazılımdLink Başarı" Testi &amp; Huawei Talent Interview</button>{/* button classınLink collapsed eklenip kaldırılması otomatik yapılacak, kapalı iken collapsed  aria-expanded dLink true false olarak değiştirilecek. Kapalı iken false*/}
											</h2>
										</div>
										<div className="col-12">
											<div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample" style={{}}>{/* classLink akordiyon açıkken show eklenecek kapalıdLink bir şey yok */}
												<div className="accordion-body tb-bottom">
													<div className="row">{/* bu div flex olacak */}
														<div className="col-lg-9 col-12">
															<div className="acc-content-text">
																Tobeto"dLink kendini sürekli değerlendirerek, öğrenim yolculuğunu kişiselleştirebilir ve işe hazırlık sürecine yön verebilirsin.&nbsp;<br/> - Ücretsiz sunduğumuz&nbsp; Tobeto "YazılımdLink Başarı" Testi ile teknik bilgi ve yetkinliklerini kolaylıklLink ölç.<br/>  - Aldığın mesleki eğitimlerin sonundLink uluslararası geçerliliğe sahip Huawei Talent Interview teknik bilgi sınavları ile öğrendiğine emin ol, rozetini al.
															</div>
														</div>
														<div className="col-lg-3 col-12">
															<img className="img-fluid" src="../a1.png" alt="" style={{borderRadius: "16px"}}/>
														</div>
													</div>
													<div className="tb-bottom-2"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<div className="row">{/* bu div flex olacak */}
										<div className="col-md-12 col-12">
											<div className="bar d-none">
												<div className='show'></div>{/* class d-none ve d-show olarak otomatik değişecek */}
											</div>
											<h2 className="accordion-header" id='heading1'>
												<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Tobeto "YazılımdLink Başarı" Testi &amp; Huawei Talent Interview</button>{/* button classınLink collapsed eklenip kaldırılması otomatik yapılacak, kapalı iken collapsed  aria-expanded dLink true false olarak değiştirilecek. Kapalı iken false*/}
											</h2>
										</div>
										<div className="col-12">
											<div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample" style={{}}>{/* classLink akordiyon açıkken show eklenecek kapalıdLink bir şey yok */}
												<div className="accordion-body tb-bottom">
													<div className="row">{/* bu div flex olacak */}
														<div className="col-lg-9 col-12">
															<div className="acc-content-text">
																Tobeto"dLink kendini sürekli değerlendirerek, öğrenim yolculuğunu kişiselleştirebilir ve işe hazırlık sürecine yön verebilirsin.&nbsp;<br/> - Ücretsiz sunduğumuz&nbsp; Tobeto "YazılımdLink Başarı" Testi ile teknik bilgi ve yetkinliklerini kolaylıklLink ölç.<br/>  - Aldığın mesleki eğitimlerin sonundLink uluslararası geçerliliğe sahip Huawei Talent Interview teknik bilgi sınavları ile öğrendiğine emin ol, rozetini al.
															</div>
														</div>
														<div className="col-lg-3 col-12">
															<img className="img-fluid" src="../a1.png" alt="" style={{borderRadius: "16px"}}/>
														</div>
													</div>
													<div className="tb-bottom-2"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<div className="row">{/* bu div flex olacak */}
										<div className="col-md-12 col-12">
											<div className="bar d-none">
												<div className='show'></div>{/* class d-none ve d-show olarak otomatik değişecek */}
											</div>
											<h2 className="accordion-header" id='heading1'>
												<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Tobeto "YazılımdLink Başarı" Testi &amp; Huawei Talent Interview</button>{/* button classınLink collapsed eklenip kaldırılması otomatik yapılacak, kapalı iken collapsed  aria-expanded dLink true false olarak değiştirilecek. Kapalı iken false*/}
											</h2>
										</div>
										<div className="col-12">
											<div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample" style={{}}>{/* classLink akordiyon açıkken show eklenecek kapalıdLink bir şey yok */}
												<div className="accordion-body tb-bottom">
													<div className="row">{/* bu div flex olacak */}
														<div className="col-lg-9 col-12">
															<div className="acc-content-text">
																Tobeto"dLink kendini sürekli değerlendirerek, öğrenim yolculuğunu kişiselleştirebilir ve işe hazırlık sürecine yön verebilirsin.&nbsp;<br/> - Ücretsiz sunduğumuz&nbsp; Tobeto "YazılımdLink Başarı" Testi ile teknik bilgi ve yetkinliklerini kolaylıklLink ölç.<br/>  - Aldığın mesleki eğitimlerin sonundLink uluslararası geçerliliğe sahip Huawei Talent Interview teknik bilgi sınavları ile öğrendiğine emin ol, rozetini al.
															</div>
														</div>
														<div className="col-lg-3 col-12">
															<img className="img-fluid" src="../a1.png" alt="" style={{borderRadius: "16px"}}/>
														</div>
													</div>
													<div className="tb-bottom-2"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<div className="row">{/* bu div flex olacak */}
										<div className="col-md-12 col-12">
											<div className="bar d-none">
												<div className='show'></div>{/* class d-none ve d-show olarak otomatik değişecek */}
											</div>
											<h2 className="accordion-header" id='heading1'>
												<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">Tobeto "YazılımdLink Başarı" Testi &amp; Huawei Talent Interview</button>{/* button classınLink collapsed eklenip kaldırılması otomatik yapılacak, kapalı iken collapsed  aria-expanded dLink true false olarak değiştirilecek. Kapalı iken false*/}
											</h2>
										</div>
										<div className="col-12">
											<div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample" style={{}}>{/* classLink akordiyon açıkken show eklenecek kapalıdLink bir şey yok */}
												<div className="accordion-body tb-bottom">
													<div className="row">{/* bu div flex olacak */}
														<div className="col-lg-9 col-12">
															<div className="acc-content-text">
																Tobeto"dLink kendini sürekli değerlendirerek, öğrenim yolculuğunu kişiselleştirebilir ve işe hazırlık sürecine yön verebilirsin.&nbsp;<br/> - Ücretsiz sunduğumuz&nbsp; Tobeto "YazılımdLink Başarı" Testi ile teknik bilgi ve yetkinliklerini kolaylıklLink ölç.<br/>  - Aldığın mesleki eğitimlerin sonundLink uluslararası geçerliliğe sahip Huawei Talent Interview teknik bilgi sınavları ile öğrendiğine emin ol, rozetini al.
															</div>
														</div>
														<div className="col-lg-3 col-12">
															<img className="img-fluid" src="../a1.png" alt="" style={{borderRadius: "16px"}}/>
														</div>
													</div>
													<div className="tb-bottom-2"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className='mobile-none-1200 brand-slider my-8 mt-20'>mobil ekrana geçince gelecek ksım</div>

				<div className='pb-20 mt-20'>
					<div className='mobile-display-1200 conteudo'>
						<div className='carrosel'>
							<div className="caixa__card cc__1">{/* bu div flex olacak */}
								<span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
									<span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
										<img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2785%27%20height=%2754%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>
									</span>
									<img alt="" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img-fluid" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
								</span>
							</div>
							<div className="caixa__card cc__2">{/* bu div flex olacak */}
								<span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
									<span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
										<img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2785%27%20height=%2754%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>
									</span>
									<img alt="" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img-fluid" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
								</span>
							</div>
							<div className="caixa__card cc__3">{/* bu div flex olacak */}
								<span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
									<span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
										<img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2785%27%20height=%2754%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>
									</span>
									<img alt="" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img-fluid" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
								</span>
							</div>
							<div className="caixa__card cc__4">{/* bu div flex olacak */}
								<span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
									<span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
										<img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2785%27%20height=%2754%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>
									</span>
									<img alt="" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img-fluid" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
								</span>
							</div>
							<div className="caixa__card cc__5">{/* bu div flex olacak */}
								<span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
									<span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
										<img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2785%27%20height=%2754%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>
									</span>
									<img alt="" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=256&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img-fluid" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div>Boş kalacak div</div>
			</main>

			{/* Footer */}
			<section className='py-20 border-top border-info py-xs-5 bg-front-dark'>
				<div className="container">
					<div className="row justify-content-between pb-20 border-info border-bottom">{/* bu div flex olacak */}
						<div className="col-6 col-md-6 col-lg-2 mb-8 mb-lg-0">
							<p className="mb-6 text-white fw-bold">Site Haritası</p>
							<ul className="list-unstyled">
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/hakkimizda">Hakkımızda</Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/bireyler-icin">Bireyler İçin</Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/kurumlar-icin">Kurumlar İçin</Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/kurumsal-kimlik">Kurumsal Kimlik</Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/sss">S.S.S.</Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/iletisim">İletişim</Link></li>
							</ul>
						</div>
						<div className="col-6 col-md-6 col-lg-3 mb-8 mb-lg-0">
							<p className="mb-6 text-white fw-bold">Kaynaklar</p>
							<ul className="list-unstyled">
								<li className="mb-3"><Link target="_blank" className="small text-white text-decoration-none" to="/yasal-metinler/tobeto-uyelik-sozlesmesi">Üyelik Sözleşmesi ve Kullanım Koşulları</Link></li>
								<li className="mb-3"><Link target="_blank" className="small text-white text-decoration-none" to="/yasal-metinler/kvkk-aydinlatma-metni">KVKK AydınlatmaMetni</Link></li>
								<li className="mb-3"><Link target="_blank" className="small text-white text-decoration-none" to="https://tobeto.s3.cloud.ngn.com.tr/Tobeto_Ilgili_Kisi_Basvuru_Formu_b0f79d29ba.pdf">İlgili Kişi Başvuru Formu</Link></li>
								<li className="mb-3"><Link target="_blank" className="small text-white text-decoration-none" to="/yasal-metinler/tobeto-cerez-politikasi">Çerez Politikası</Link></li>
								<li className="mb-3"><Link target="_blank" className="small text-white text-decoration-none" to="https://tobeto.s3.cloud.ngn.com.tr/v_Cayma_Formu_6bc3a888a3.pdf">Cayma Formu</Link></li>
							</ul>
						</div>
						<div className="col-6 col-md-6 col-lg-3 mb-8 mb-lg-0">
							<p className="mb-6 text-white fw-bold">Eğitim Yolculukları</p>
							<ul className="list-unstyled">
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/programlar/frontend">Front End  </Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/programlar/full-stack-developer">Full Stack  </Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/programlar/web-mobile">Web &amp; Mobile  </Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/yakinda">Veri Bilimi </Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/yakinda">Siber Güvenlik </Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="/yakinda">UI / UX  </Link></li>
							</ul>
						</div>
						<div className="col-6 col-md-6 col-lg-4 mb-8 mb-lg-0">
							<p className="mb-6 text-white fw-bold">Blog</p>
							<ul className="list-unstyled">
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="">Web API Nedir? Programlama Yazılımının Arayüzü Nasıl Çalışır?</Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="">Yapay ZekaChatbot: İşte Geleceğin İletişim Aracı!</Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="">Yazılım Test Otomasyonu: İş Akışınızı Daha Link Verimli Hale Getirin!</Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="">Node.js Nedir ve Nasıl Kullanılır? İşte Sana Link Basit ve Etkili Kılavuz</Link></li>
								<li className="mb-3"><Link className="small text-white text-decoration-none" to="">Robotlar ve Yapay Zeka İçin Hangi Yazılım Dili Kullanılır?</Link></li>
							</ul>
						</div>
					</div>
					<div className='row pt-8 justify-content-between align-items-center'>{/* bu div flex olacak */}
						<div className="col-12 col-lg-auto text-center mb-8 mb-lg-0">
						<Link className="navbar-brand" to="#">
							<span style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%"}}>
								<span style={{boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%"}}>
									<img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27132%27%20height=%2727%27/%3e" style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px"}}/>
								</span>
								<img alt="" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&amp;w=384&amp;q=75" decoding="async" data-nimg="intrinsic" style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}/>
							</span>
						</Link>
						</div>
						<div className="col-12 col-lg-auto mb-5 mb-lg-0">
							<p className="small text-white text-center mb-0">© 2022 Tobeto I Her Hakkı Saklıdır</p>
						</div>
						<div className='col-12 col-lg-auto text-center'>
							<Link className="text-decoration-none me-4" to="https://www.facebook.com/tobetoplatform" target="blank">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#A628FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</Link>
							<Link className="text-decoration-none me-4" to="https://www.instagram.com/tobeto_official/" target="blank">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#A628FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									</path>
									<path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#A628FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									</path>
									<path d="M17.5 6.5H17.51" stroke="#A628FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</Link>
							<Link className="text-decoration-none me-4" to="https://twitter.com/tobeto_platform" target="blank">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="#A628FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</Link>
							<Link className="text-decoration-none" to="https://www.linkedin.com/company/tobeto/" target="blank">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="#A628FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									</path>
									<path d="M6 9H2V21H6V9Z" stroke="#A628FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									</path>
									<path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#A628FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
		</div>
	)
}

export default Homepage
import React from 'react'
import { Link } from 'react-router-dom'

export default function testNavbar() {
  return (
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
  )
}

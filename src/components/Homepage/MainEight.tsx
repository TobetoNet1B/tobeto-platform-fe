import { Link } from "react-router-dom"

type Props = {}

const MainEight = (props: Props) => {
	return (
		<div>
			<style>{`
			@media screen and (max-width: 900px) {
				#slide {
					display: grid !important;
					grid-template-columns: repeat(2, 1fr);
				}
				#slider {
					height: auto!important
			}
			}`}</style>
			<div id="slider" className="[@media(max-width:1200px)]:!hidden bg-transparent h-[100px] mx-auto overflow-hidden relative w-max flex items-center !mb-8 !mt-20">
				<div id="slide" className="flex items-center gap-[3em]">
					<Link to={"https://www.enocta.com/"} className="h-[58px] max-w-[163px] flex items-center cursor-pointer justify-center">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75" />
							</span>
							<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75&amp;w=96&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75&amp;w=256&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fenocta.9d43f28e.png&w=256&q=75&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="max-w-full h-auto" loading="lazy" />
							</noscript>
						</span>
					</Link>
					<Link to={"https://www.codecademy.com/"} className="h-[58px] max-w-[163px] flex items-center cursor-pointer justify-center">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75" />
							</span>
							<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75&amp;w=1920&amp;q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75&amp;w=1080&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75&amp;w=1920&amp;q=75 2x" />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&w=1920&q=75&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&amp;w=1920&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcodecademy.1a1f5478.png&amp;w=1920&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="max-w-full h-auto" loading="lazy" />
							</noscript>
						</span>
					</Link>
					<Link to={"https://perculus.com/tr"} className="h-[58px] max-w-[163px] flex items-center cursor-pointer justify-center">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75" />
							</span>
							<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=256&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=640&amp;q=75 2x" />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=256&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=640&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperculus.8d1bf42c.png&w=640&q=75&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="max-w-full h-auto" loading="lazy" />
							</noscript>
						</span>
					</Link>
					<Link to={"https://www.advancity.com.tr/"} className="h-[58px] max-w-[163px] flex items-center cursor-pointer justify-center">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75" />
							</span>
							<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=256&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=640&amp;q=75 2x" />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=256&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=640&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkampus365.801c721d.png&w=256&q=75&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="max-w-full h-auto" loading="lazy" />
							</noscript>
						</span>
					</Link>
					<Link to={"https://www.talent-interview.com/tr/"} className="h-[58px] max-w-[163px] flex items-center cursor-pointer justify-center">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=640&q=75" />
							</span>
							<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=640&q=75&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=640&q=75&amp;w=256&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=640&q=75=75&amp;w=640&amp;q=75 2x" />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=640&q=75&amp;w=640&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei.0004b5e6.png&w=256&q=75&amp;w=640&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="max-w-full h-auto" loading="lazy" />
							</noscript>
						</span>
					</Link>
					<Link to={"https://www.talent-interview.com/tr/"} className="h-[58px] max-w-[163px] flex items-center cursor-pointer justify-center">
						<span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
							<span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
								<img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} alt="" aria-hidden="true" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75" />
							</span>
							<img alt="" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=3840&amp;q=75" decoding="async" data-nimg="intrinsic" className="max-w-full h-auto" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=1080&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=3840&amp;q=75 2x" />
							<noscript>
								<img alt="" srcSet="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=1080&amp;q=75 1x, https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=3840&amp;q=75 2x" src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalent-interview_logo_disi.dfda1758.png&w=1080&q=75&amp;w=3840&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="max-w-full h-auto" loading="lazy" />
							</noscript>
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default MainEight
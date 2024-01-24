import React from 'react'

type Props = {}

const MainFive = (props: Props) => {
	return (
		<div>
			<style>
				{`
				@media (max-width: 998px) {
					#border {
						border-top: 4px solid #ff4d05;
						border-bottom: 4px solid #93f;
					}
				}
				@media (max-width: 576px) {
					#border {
						border-top: 4px solid #ff4d05;
						border-bottom: 4px solid #93f;
					}
				}
				@media (max-width: 998px) {
					 #res{
						background: none !important;
						min-height: auto;
					} 
				}
				@media (max-width: 576px) {
					#res{
						background: none !important;
						min-height: auto;
				}
				} `}
			</style>
			<section id='border' className="max-w-6xl mx-auto">
				<div className="container mx-auto">
					<div id='res' className="min-h-[200px] flex items-center !my-10" style={{ background: "url('https://tobeto.com/headfarming.svg') no-repeat 50%", backgroundSize: "100%" }}>
						<p className="text-[1.25rem] font-bold leading-[1.2] !px-10  !mx-auto !text-center text-white [@media(max-width:998px)]:!px-4 [@media(max-width:998px)]:text-[18px]">
							Tobeto , 20. yy''ın “headhunting” yaklaşımını “headfarming” olarak değiştirmeyi hedefler!
							<br />
							<br /> Headfarming: Genç yetenekleri, sürekli öğrenme hevesi içinde olan profesyonelleri, 360 derece eğitmek, değerlendirmek, yönlendirmek ve desteklemektir.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default MainFive
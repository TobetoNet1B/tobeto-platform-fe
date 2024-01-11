
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterComp() {
	return (
		<Footer container className="text-white !bg-[#181717] px-48">
			<div className="w-[100%]">
				<div className="grid w-full gap-8 px-6 py-8 lg:grid-cols-4 md:grid-cols-2">
					<div>
						<Footer.LinkGroup col>
							<Footer.Title title="Site Haritası" />
							<Footer.Link href="#">About</Footer.Link>
							<Footer.Link href="#">Careers</Footer.Link>
							<Footer.Link href="#">Brand Center</Footer.Link>
							<Footer.Link href="#">Blog</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.LinkGroup col>
							<Footer.Title title="Kaynaklar" />
							<Footer.Link href="#">Discord Server</Footer.Link>
							<Footer.Link href="#">Twitter</Footer.Link>
							<Footer.Link href="#">Facebook</Footer.Link>
							<Footer.Link href="#">Contact Us</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.LinkGroup col>
							<Footer.Title title="Eğitim Yolculukları" />
							<Footer.Link href="#">Privacy Policy</Footer.Link>
							<Footer.Link href="#">Licensing</Footer.Link>
							<Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.LinkGroup col>
							<Footer.Title title="Blog" />
							<Footer.Link href="#">iOS</Footer.Link>
							<Footer.Link href="#">Android</Footer.Link>
							<Footer.Link href="#">Windows</Footer.Link>
							<Footer.Link href="#">MacOS</Footer.Link>
						</Footer.LinkGroup>
					</div>
				</div>
				<div className='divide-y divide-solid'></div>
				<div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
					<Footer.Brand src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75' />
					<Footer.Copyright href="#" by="Tobeto" year={2024} />
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<Footer.Icon href="#" icon={BsFacebook} />
						<Footer.Icon href="#" icon={BsInstagram} />
						<Footer.Icon href="#" icon={BsTwitter} />
						<Footer.Icon href="#" icon={BsGithub} />
						<Footer.Icon href="#" icon={BsDribbble} />
					</div>
				</div>
			</div>
		</Footer>
	);
}

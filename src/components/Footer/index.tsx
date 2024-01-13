
'use client';

import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function FooterComp() {
	return (
		<Footer container className="text-white !bg-[#181717] max-w-7xl mx-auto">
			<div className="w-full divide-y divide-zinc-600 divide-solid">
				<div className="grid w-full gap-8 px-6 py-8 lg:grid-cols-4 md:grid-cols-2 ">
					<div>
						<Footer.Title title="Site Haritası" />
						<Footer.LinkGroup col className='items-start'>
							<Footer.Link href="#">Hakkımızda</Footer.Link>
							<Footer.Link href="#">Bireyler İçin</Footer.Link>
							<Footer.Link href="#">Kurumlar İçin</Footer.Link>
							<Footer.Link href="#">Kurumsal Kimlik</Footer.Link>
							<Footer.Link href="#">S.S.S.</Footer.Link>
							<Footer.Link href="#">İletişim</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title="Kaynaklar" />
						<Footer.LinkGroup col className='items-start'>
							<Footer.Link href="#">Üyelik Sözleşmesi ve Kullanım Koşulları</Footer.Link>
							<Footer.Link href="#">KVKK Aydınlatma Metni</Footer.Link>
							<Footer.Link href="#">İlgili Kişi Başvuru Formu</Footer.Link>
							<Footer.Link href="#">Çerez Politikası</Footer.Link>
							<Footer.Link href="#">Cayma Formu</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title="Eğitim Yolculukları" />
						<Footer.LinkGroup col className='items-start'>
							<Footer.Link href="#">Front End</Footer.Link>
							<Footer.Link href="#">Full Stack</Footer.Link>
							<Footer.Link href="#">Web & Mobile</Footer.Link>
							<Footer.Link href="#">Veri Bilimi</Footer.Link>
							<Footer.Link href="#">Siber Güvenlik</Footer.Link>
							<Footer.Link href="#">UI / UX</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title="Blog" />
						<Footer.LinkGroup col className='items-start'>
							<Footer.Link href="#">Web API Nedir? Programlama Yazılımının Arayüzü Nasıl Çalışır?</Footer.Link>
							<Footer.Link href="#">Yapay Zeka Chatbot: İşte Geleceğin İletişim Aracı!</Footer.Link>
							<Footer.Link href="#">Yazılım Test Otomasyonu: İş Akışınızı Daha Verimli Hale Getirin!</Footer.Link>
							<Footer.Link href="#">Node.js Nedir ve Nasıl Kullanılır? İşte Sana Basit ve Etkili Kılavuz</Footer.Link>
							<Footer.Link href="#">Robotlar ve Yapay Zeka İçin Hangi Yazılım Dili Kullanılır?</Footer.Link>
						</Footer.LinkGroup>
					</div>
				</div>
				<div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
					<Footer.Brand src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75' />
					<Footer.Copyright href="#" by="Tobeto" year={2024} />
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<Footer.Icon href="#" icon={BsFacebook} />
						<Footer.Icon href="#" icon={BsInstagram} />
						<Footer.Icon href="#" icon={BsTwitter} />
						<Footer.Icon href="#" icon={BsLinkedin} />
					</div>
				</div>
			</div>
		</Footer>
	);
}

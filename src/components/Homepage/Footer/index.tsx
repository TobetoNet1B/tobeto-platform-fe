
'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function FooterComp() {
	return (
		<Footer container className="text-white !bg-[#181717] max-w-7xl mx-auto">
			<div className="w-full divide-y divide-zinc-600 divide-solid">
				<div className="w-full lg:flex grid gap-14 px-6 pt-8 pb-24 lg:grid-cols-4 grid-cols-2">
					<div className='!size-fit min-w-40'>
						<Footer.Title title="Site Haritası" />
						<Footer.LinkGroup col className='items-start footer-link-group'>
							<Link to="#">Hakkımızda</Link>
							<Link to="#">Bireyler İçin</Link>
							<Link to="#">Kurumlar İçin</Link>
							<Link to="#">Kurumsal Kimlik</Link>
							<Link to="#">S.S.S.</Link>
							<Link to="#">İletişim</Link>
						</Footer.LinkGroup>
					</div>
					<div className='!size-fit min-w-40'>
						<Footer.Title title="Kaynaklar" />
						<Footer.LinkGroup col className='items-start'>
							<Link to="#">Üyelik Sözleşmesi ve Kullanım Koşulları</Link>
							<Link to="#">KVKK Aydınlatma Metni</Link>
							<Link to="#">İlgili Kişi Başvuru Formu</Link>
							<Link to="#">Çerez Politikası</Link>
							<Link to="#">Cayma Formu</Link>
						</Footer.LinkGroup>
					</div>
					<div className='!size-fit min-w-40'>
						<Footer.Title title="Eğitim Yolculukları" />
						<Footer.LinkGroup col className='items-start'>
							<Link to="#">Front End</Link>
							<Link to="#">Full Stack</Link>
							<Link to="#">Web & Mobile</Link>
							<Link to="#">Veri Bilimi</Link>
							<Link to="#">Siber Güvenlik</Link>
							<Link to="#">UI / UX</Link>
						</Footer.LinkGroup>
					</div>
					<div className='!size-fit min-w-40'>
						<Footer.Title title="Blog" />
						<Footer.LinkGroup col className='items-start'>
							<Link to="#">Web API Nedir? Programlama Yazılımının Arayüzü Nasıl Çalışır?</Link>
							<Link to="#">Yapay Zeka Chatbot: İşte Geleceğin İletişim Aracı!</Link>
							<Link to="#">Yazılım Test Otomasyonu: İş Akışınızı Daha Verimli Hale Getirin!</Link>
							<Link to="#">Node.js Nedir ve Nasıl Kullanılır? İşte Sana Basit ve Etkili Kılavuz</Link>
							<Link to="#">Robotlar ve Yapay Zeka İçin Hangi Yazılım Dili Kullanılır?</Link>
						</Footer.LinkGroup>
					</div>
				</div>
				<div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
					<Footer.Brand src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75' />
					<Footer.Copyright href="#" by="Tobeto | Her Hakkı Saklıdır" year={new Date().getFullYear()} />
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<Footer.Icon className='text-[#a628ff] hover:!text-[#a528ffdd]' href="#" icon={BsFacebook} />
						<Footer.Icon className='text-[#a628ff] hover:!text-[#a528ffdd]' href="#" icon={BsInstagram} />
						<Footer.Icon className='text-[#a628ff] hover:!text-[#a528ffdd]' href="#" icon={BsTwitter} />
						<Footer.Icon className='text-[#a628ff] hover:!text-[#a528ffdd]' href="#" icon={BsLinkedin} />
					</div>
				</div>
			</div>
		</Footer>
	);
}

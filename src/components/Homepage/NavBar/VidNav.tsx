import { useState } from 'react'
import { Modal } from 'flowbite-react';
//import './vidnav.css'

type Props = {}

const VidNav = (props: Props) => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<div className="bg-cover min-h-16 flex items-center" style={{ backgroundImage: "url(https://tobeto.com/_next/static/media/video-back.b5dde37e.png)" }}>
				<div className="container max-w-6xl flex items-center w-full mx-auto place-content-between text-white">
					<span className='text-base font-semibold	tracking-wide	'>Tobeto ile geleceğini keşfet</span>
					<button onClick={() => setOpenModal(true)} className='btn btn-sm font-medium bg-white text-black rounded-full px-6'>İzle
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.5835 2.75L17.4168 11L4.5835 19.25V2.75Z" stroke="#3171FF" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>
					</button>
				</div>
			</div>

			<Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
				<style>{`div:has(> .vid-modal) {background-color: #000a;}`}</style>
				<Modal.Header className='pl-8 pr-0 border-b-0 vid-modal'>
					<video width="100%" height="240" controls src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4">
						<source src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4" type="video/mp4" />
						<source src="movie.ogg" type="video/ogg" />
					</video>
				</Modal.Header>
			</Modal>
		</>
	)
}

export default VidNav
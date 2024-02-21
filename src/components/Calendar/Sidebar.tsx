import SideChecks from "./SideChecks"

type Props = {}

const Sidebar = (props: Props) => {
	return (
		<div className='mx-5 mt-5 text-lg text-[#828282]'>
			<div>
				<span className='font-medium block mb-2'>Eğitim Arama</span>
				<input type="text" placeholder="Eğitmen arayın..." className="input input-bordered w-full rounded-none border-2 border-[#ddd]" />
			</div>
			<div className='my-8'>
				<span className='font-medium block mb-2'>Eğitmen</span>
				<select className="select select-bordered w-full rounded-md border-2 border-[#ddd] text-[1rem]">
					<option disabled selected className='text-[#82828282]'>Eğitmen Seçiniz</option>
					<option>Engin Demiroğ</option>
					<option>Halit Enes Kalaycı</option>
				</select>
			</div>
			<div>
				<div className="form-control">
					<span className='font-medium block mb-2'>Eğitim Durumu</span>
					<SideChecks span="Bitmiş Dersler" />
					<SideChecks span="Devam Eden Dersler" />
					<SideChecks span="Satın Alınmış Dersler" />
					<SideChecks span="Başlamamış Dersler" />
				</div>
			</div>
		</div>
	)
}

export default Sidebar
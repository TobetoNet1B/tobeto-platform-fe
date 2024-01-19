import { log } from 'console';
import { Datepicker } from 'flowbite-react';
import './personal-informations.css'
import { useFormik } from 'formik'

type Props = {}

const PersonalInformations = (props: Props) => {

	const formik = useFormik({
		initialValues: {
			name: '',
			surname: '',
			phone: '',
			birthDate: '',
			identityNumber: '',
			email: '',
			country: '',
			city: '',
			district: '',
			addressDetails: ''
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className=''>
			<div className='grid grid-cols-12 gap-6 mx-auto'>
				<div className="avatar col-span-12">
					<div className="w-36 rounded-full mx-auto">
						<img src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=48&q=75" />
					</div>
				</div>
				<div className='lg:col-span-6 col-span-12'>
					<label htmlFor='name'>Adınız</label>
					<input id='name' type='text' name='name' onChange={formik.handleChange} value={formik.values.name}
						className="input input-bordered w-full" />
				</div>
				<div className='lg:col-span-6 col-span-12'>
					<label htmlFor='surname'>Soyadınız</label>
					<input id='surname' type='text' name='surname' onChange={formik.handleChange} value={formik.values.surname}
						className="input input-bordered w-full" />
				</div>
				<div className='lg:col-span-6 col-span-12'>
					<label htmlFor='tel'>Telefon Numaranız</label>
					<div className='join w-full'>
						<select defaultValue="+90" className="select select-bordered join-item">
							<option>+90</option>
							<option>+1</option>
							<option>+44</option>
						</select>
						<input id='tel' type='tel' name='tel' onChange={formik.handleChange} value={formik.values.phone}
							className="input input-bordered w-full join-item" />
					</div>
				</div>
				<div className='lg:col-span-6 col-span-12'>
					<label htmlFor='birthDate'>Doğum Tarihiniz</label>
					<input id='birthDate' type='date' name='birthDate' max={new Date().toLocaleDateString('sv-SE')}
						onChange={formik.handleChange} value={formik.values.birthDate}
						className="input input-bordered w-full" />
				</div>
				<div className='lg:col-span-6 col-span-12'>
					<label htmlFor='identityNumber'>TC Kimlik No</label>
					<input id='identityNumber' type='number' name='identityNumber' onChange={formik.handleChange} value={formik.values.identityNumber}
						className="input input-bordered w-full" />
				</div>
				<div className='lg:col-span-6 col-span-12'>
					<label htmlFor='email'>E-posta</label>
					<input id='email' type='email' name='email' onChange={formik.handleChange} value={formik.values.email}
						className="input input-bordered w-full" />
				</div>
				<div className='col-span-12'>
					<label htmlFor='country'>Ülke</label>
					<input id='country' type='text' name='country' onChange={formik.handleChange} value={formik.values.country}
						className="input input-bordered w-full" />
				</div>
				<div className='lg:col-span-6 col-span-12'>
					<label htmlFor='city'>Şehir</label>
					<input id='city' type='text' name='city' onChange={formik.handleChange} value={formik.values.city}
						className="input input-bordered w-full" />
				</div>
				<div className='lg:col-span-6 col-span-12'>
					<label htmlFor='district'>İlçe</label>
					<input id='district' type='text' name='district' onChange={formik.handleChange} value={formik.values.district}
						className="input input-bordered w-full" />
				</div>
				<div className='col-span-12'>
					<label htmlFor='addressDetails'>Adres</label>
					<textarea id='addressDetails' name='addressDetails' onChange={formik.handleChange} value={formik.values.district}
						className="textarea textarea-bordered w-full"></textarea>
				</div>
			</div>
			<button type="submit" className='btn mt-5'>Submit</button>
		</form>
	)
}

export default PersonalInformations
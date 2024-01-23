import { Field, FormikProvider, useFormik } from 'formik'
import { MdOutlineEdit } from "react-icons/md";
import { useEffect, useState } from 'react'
import axios from 'axios';
import CityAndDistrictTR from 'utils/CityAndDistrictTR.json'
import FormInput from 'utils/FormInput/FormInput';

type Props = {}

const PersonalInformations = (props: Props) => {

	const maxDate = new Date().toLocaleDateString('sv-SE')

	// const [city, setCity] = useState([])
	// const [district, setDistrict] = useState([])
	// const [countryCode, setCountryCode] = useState([])

	const countryCodes = ["+1", "+44", "+90"]

	const formik = useFormik({
		initialValues: {
			name: '',
			surname: '',
			phone: '',
			countryCode: "+90",
			birthDate: '',
			identityNumber: '',
			email: '',
			country: '',
			city: "SAKARYA",
			district: '',
			addressDetails: '',
			about: ''
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		}
	});

	return (
		<FormikProvider value={formik}>
			<form onSubmit={formik.handleSubmit} className='flex-shrink-0 flex-grow-0'>

				<div className='grid grid-cols-12 gap-6 mx-auto'>
					<div className="avatar col-span-12">
						<div className="w-36 rounded-full mx-auto">
							<img src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=48&q=75" />
							<MdOutlineEdit className='z-10 absolute ml-24 top-24 bg-white text-violet-600 rounded-full text-3xl p-2' />
						</div>
					</div>

					<FormInput label="Adınız" name="name" isRequired={true} inputStyle='input'
						value={formik.values.name} className='lg:col-span-6 col-span-12' />
					<FormInput label="Soyadınız" name="surname" isRequired={true} inputStyle='input'
						value={formik.values.surname} className='lg:col-span-6 col-span-12' />

					<div className='lg:col-span-6 col-span-12'>
						<label htmlFor='tel'>Telefon Numaranız*</label>
						<div className='join w-full'>
							<Field as='select' className="select select-bordered join-item"
								id='countryCode' name='countryCode' value={formik.values.countryCode}>
								{countryCodes.map(cc => <option key={cc}>{cc}</option>)}
							</Field>
							<Field id='tel' type='tel' name='tel' value={formik.values.phone}
								className="input input-bordered w-full join-item" placeholder='5** *** ** **' />
						</div>
					</div>

					<FormInput label='Doğum Tarihiniz' name='birthDate' isRequired={true}
						inputStyle='input' type='date' maxDate={maxDate}
						value={formik.values.birthDate} className='lg:col-span-6 col-span-12' />

					<FormInput label='TC Kimlik No' name='identityNumber' isRequired={true} inputStyle='input'
						value={formik.values.identityNumber} className='lg:col-span-6 col-span-12' />
					<FormInput label='E-posta' name='email' isRequired={true} inputStyle='input'
						value={formik.values.email} className='lg:col-span-6 col-span-12' />
					<FormInput label='Ülke' name='country' isRequired={true} inputStyle='input'
						value={formik.values.country} className='col-span-12' />


					<div className='lg:col-span-6 col-span-12'>
						<label htmlFor='city'>İl*</label>
						<Field as='select' className='select select-bordered w-full'
							id='city' name='city' value={formik.values.city}>
							{CityAndDistrictTR.map(c => <option key={c.value} >{c.city}</option>)}
						</Field>
					</div>
					<div className='lg:col-span-6 col-span-12'>
						<label htmlFor='district'>İlçe*</label>
						<Field as='select' disabled className='select select-bordered w-full'
							id='district' name='district' value={formik.values.district}>
							<option>İlçeler</option>
						</Field>
					</div>

					<FormInput label='Adres' name='addressDetails' isRequired={false} inputStyle='textarea' textareaH='h-28'
						value={formik.values.addressDetails} className='col-span-12' />
					<FormInput label='Hakkımda' name='about' isRequired={false} inputStyle='textarea' textareaH='h-32'
						value={formik.values.about} className='col-span-12' />

				</div>
				<button type="submit" className='btn btn-md px-5 mt-5 rounded-full bg-[#93f] hover:bg-[#822bd9] text-white'>
					Kaydet
				</button>

			</form>
		</FormikProvider>
	)
}

export default PersonalInformations
import { FormikProvider, useFormik } from 'formik'
import { MdOutlineEdit } from "react-icons/md";
import FormInput from 'utils/FormInput/FormInput';
import Address from './Address';
import PhoneNumber from './PhoneNumber';

type Props = {}

const PersonalInformations = (props: Props) => {

	const maxDate = new Date().toLocaleDateString('sv-SE')

	const formik = useFormik({
		initialValues: {
			name: '',
			surname: '',
			phoneNumber: '',
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

					<PhoneNumber countryCode={formik.values.countryCode} phoneNumber={formik.values.phoneNumber} />

					<FormInput label='Doğum Tarihiniz' name='birthDate' isRequired={true}
						inputStyle='input' type='date' maxDate={maxDate}
						value={formik.values.birthDate} className='lg:col-span-6 col-span-12' />

					<FormInput label='TC Kimlik No' name='identityNumber' isRequired={true} inputStyle='input'
						value={formik.values.identityNumber} className='lg:col-span-6 col-span-12' />
					<FormInput label='E-posta' name='email' isRequired={true} inputStyle='input'
						value={formik.values.email} className='lg:col-span-6 col-span-12' />

					<FormInput label='Ülke' name='country' isRequired={true} inputStyle='input'
						value={formik.values.country} className='col-span-12' />
					<Address city={formik.values.city} district={formik.values.district} addressDetails={formik.values.addressDetails} />

					<FormInput label='Hakkımda' name='about' isRequired={false} inputStyle='textarea' textareaH='h-32'
						value={formik.values.about} className='col-span-12' placeHolder="Kendini kısaca tanıt" />
				</div>

				<button type="submit" className='btn btn-md px-5 mt-5 rounded-full bg-[#93f] hover:bg-[#822bd9] text-white'>
					Kaydet
				</button>
			</form>
		</FormikProvider>
	)
}

export default PersonalInformations
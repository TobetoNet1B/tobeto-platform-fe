import { FormikProvider, useFormik } from 'formik'
import { MdOutlineEdit } from "react-icons/md";
import FormInput from 'utils/FormInput/FormInput';
import Address from './Address';
import PhoneNumber from './PhoneNumber';
import * as Yup from 'yup';

type Props = {}

const PersonalInformations = (props: Props) => {

	const date = new Date().toLocaleDateString('sv-SE')

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			phoneNumber: '' as any,
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
		validationSchema: Yup.object({
			firstName: Yup.string()
				.required('Adınızı girin')
				.min(2, 'Ad 2 karakterden az olamaz.')
				.max(20, 'Ad 20 karakterden fazla olamaz.'),
			lastName: Yup.string()
				.required('Soyadınızı girin')
				.min(2, 'Soyad 2 karakterden az olamaz.')
				.max(20, 'Soyad 20 karakterden fazla olamaz.'),
			phoneNumber: Yup.string()
				.required('Telefon Numarası Zorunlu')
				.min(10, 'Telefon numarası en az 10 karakter olabilir.')
				.max(16, 'Telefon numarası en fazla 16 karakter olabilir.'),
			birthDate: Yup.date()
				.required('Doğum tarihi gerekli'),
			identityNumber: Yup.string()
				.required('Aboneliklerde fatura için doldurulması zorunlu alan')
				.min(11, '11 karakter')
				.max(11, '11 karakter'),
			email: Yup.string().email('Geçersiz e-posta')
				.required('E-posta zorunlu'),
			country: Yup.string()
				.required('Gerekli')
				.min(2, 'Geçersiz ülke adı')
				.max(40, 'Ülke adı çok uzun'),
			district:  Yup.string()
				.required('İlçe Seçin')
		}),
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

					<FormInput label="Adınız" name="firstName" isRequired={true} inputStyle='input'
						value={formik.values.firstName} className='lg:col-span-6 col-span-12' />
					<FormInput label="Soyadınız" name="lastName" isRequired={true} inputStyle='input'
						value={formik.values.lastName} className='lg:col-span-6 col-span-12' />

					<PhoneNumber value={formik.values.phoneNumber} name='phoneNumber' handleChange={formik.handleChange} />

					<FormInput label='Doğum Tarihiniz' name='birthDate' isRequired={true}
						inputStyle='input' type='date' maxDate={date}
						value={formik.values.birthDate} className='lg:col-span-6 col-span-12' />

					<FormInput label='TC Kimlik No' name='identityNumber' isRequired={true} inputStyle='input'
						value={formik.values.identityNumber} className='lg:col-span-6 col-span-12' />
					<FormInput label='E-posta' name='email' isRequired={true} inputStyle='input'
						value={formik.values.email} className='lg:col-span-6 col-span-12' />

					<FormInput label='Ülke' name='country' isRequired={true} inputStyle='input'
						value={formik.values.country} className='col-span-12' />
					<Address city={formik.values.city} district={formik.values.district} addressDetails={formik.values.addressDetails}
						cname="city" dname="district" />

					<FormInput label='Hakkımda' name='about' isRequired={false} inputStyle='textarea' textareaH='h-32'
						value={formik.values.about} className='col-span-12' placeHolder="Kendini kısaca tanıt" />
				</div>

				<button type="submit" className='btn btn-md px-5 mt-5 rounded-full bg-bs_btn_bg hover:bg-bs_btn_hover_bg text-bs_btn_color'>
					Kaydet
				</button>
			</form>
		</FormikProvider>
	)
}

export default PersonalInformations
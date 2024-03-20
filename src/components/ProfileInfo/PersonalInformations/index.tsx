import { useEffect, useState } from 'react';
import { FormikProvider, useFormik } from 'formik'
import { MdOutlineEdit } from "react-icons/md";
import FormInput from 'utils/FormInput/FormInput';
import Address from './Address';
import PhoneNumber from './PhoneNumber';
import * as Yup from 'yup';
import { GetStudentResponse } from 'models/responses/students/getStudentResponse';
import { GetAddressResponse } from 'models/responses/addresses/getAddressResponse';
import studentService from 'services/studentService';
import { UpdateStudentRequest } from 'models/requests/students/updateStudentRequest';
import addressService from 'services/addressService';
import { UpdateUserRequest } from 'models/requests/users/updateUserRequest';
import userService from 'services/userService';
import { UpdateAddressRequest } from 'models/requests/addresses/updateAddressRequest';
import { ToastContainer, toast } from 'react-toastify';
// import Toast from 'utils/Toast/Toast';

type Props = {}

const PersonalInformations = (props: Props) => {

	const [student, setStudent] = useState<GetStudentResponse>({} as GetStudentResponse);
	const [address, setAddress] = useState<GetAddressResponse>({} as GetAddressResponse);

	const fetchStudents = async () => {
		const response = await studentService.getById(localStorage.userId);
		setStudent(response.data as GetStudentResponse);
	};

	const fetchAddress = async () => {
		const response = await addressService.getById(localStorage.studentId)
		setAddress(response.data as GetAddressResponse);
	}

	useEffect(() => {
		fetchStudents();
		fetchAddress();
	}, []);


	const date = new Date().toLocaleDateString('sv-SE')
	const birthDate = new Date(student.birthDate);
	const formattedBirthDate = birthDate.toLocaleDateString('sv-SE');


	const formik = useFormik({
		initialValues: {
			imgUrl: student.imgUrl ?? '/pp.png',
			firstName: student.user?.firstName ?? '',
			lastName: student.user?.lastName ?? '',
			phoneNumber: student?.phoneNumber ?? '',
			birthDate: formattedBirthDate ?? '',
			identityNumber: student.identityNumber ?? '',
			email: student.user?.email ?? '',
			country: address.countryName ?? '',
			city: address.cityId ?? '',
			district: address.districtId ?? '',
			addressDetails: address.addressDetails ?? '',
			about: student.about ?? ''
		},
		enableReinitialize: true,
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
			city: Yup.string()
				.required('Şehir Seçin'),
			district: Yup.string()
				.required('İlçe Seçin')
		}),
		onSubmit: async (values) => {
			try {
				const updateData: UpdateStudentRequest = {
					...values,
					id: localStorage.studentId,
					imgUrl: student.imgUrl ?? '/pp.png',
					userId: localStorage.userId,
				};
				const updateUserData: UpdateUserRequest = {
					...values,
					id: localStorage.userId,
				};
				const updateAddressData: UpdateAddressRequest = {
					...values,
					Id: address.id,
					countryId: "a01104d8-7328-49e7-e225-08dc3748c896",
					cityId: values.city,
					districtId: values.district,
					studentId: localStorage.studentId,
				};
				await studentService.update(updateData);
				await userService.update(updateUserData);
				await addressService.update(updateAddressData);
				toast.success('Bilgileriniz başarıyla güncellendi!');
				//<Toast message='Bilgileriniz başarıyla güncellendi!' type='success'/>
			}
			catch (error) {
				toast.error('Güncelleme sırasında bir hata oluştu!');
				console.error(error);
			}
		}
	});


	return (
		<FormikProvider value={formik}>
			<form onSubmit={formik.handleSubmit} className='flex-shrink-0 flex-grow-0'>

				<div className='grid grid-cols-12 gap-6 mx-auto'>
					<div className="avatar col-span-12">
						<div className="w-36 rounded-full mx-auto">
							<img alt='' src={formik.values.imgUrl} />
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
			<ToastContainer />
		</FormikProvider>

	)
}

export default PersonalInformations
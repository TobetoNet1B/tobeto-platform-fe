import { Datepicker } from 'flowbite-react';
import { useFormik } from 'formik'

type Props = {}

const PersonalInformations = (props: Props) => {

	const formik = useFormik({
		initialValues: {
			name: '',
			surname: '',
			phone: '',
			birthdate: '',
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
			<div className='grid grid-cols-12 gap-y-4 gap-x-3 mx-auto'>
				<div className="avatar col-span-12">
					<div className="w-40 rounded-full mx-auto">
						<img src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=48&q=75" />
					</div>
				</div>
				<div className='col-span-6'>
					<label htmlFor='name'>Adınız</label>
					<input id='name' type='text' name='name' onChange={formik.handleChange} value={formik.values.name}
						className="input input-bordered w-full" />
				</div>
				<div className='col-span-6'>
					<label htmlFor='surname'>Soyadınız</label>
					<input id='surname' type='text' name='surname' onChange={formik.handleChange} value={formik.values.surname}
						className="input input-bordered w-full" />
				</div>
				<div className='col-span-6'>
					<label htmlFor='tel'>Telefon Numaranız</label>
					<div className='join w-full'>
						<select className="select select-bordered join-item">
							<option selected>+90</option>
							<option>+1</option>
							<option>+44</option>
						</select>
						<input id='tel' type='tel' name='tel' onChange={formik.handleChange} value={formik.values.phone}
							className="input input-bordered w-full join-item" />
					</div>
				</div>
				<div className='col-span-6'>
					<label htmlFor='birthDate'>Doğum Tarihiniz</label>
					<Datepicker language="tr-TR" labelTodayButton="Bugün" labelClearButton="Temizle" maxDate={new Date()} weekStart={1}
						className='input input-bordered w-full pt-0.5 pl-0' style={{ backgroundColor: "transparent", border: "none" }} />
				</div>
				<div className='col-span-12'>

				</div>
				<div className='col-span-6'>

				</div>
				<div className='col-span-6'>

				</div>
				<div className='col-span-12'>

				</div>
				<div className='col-span-12'>

				</div>
			</div>

			{/* <label htmlFor="email">Email Address</label>
			<input
				id="email"
				name="email"
				type="email"
				onChange={formik.handleChange}
				value={formik.values.email}
			/> */}
			<button type="submit" className='btn'>Submit</button>
		</form>
	)
}

export default PersonalInformations
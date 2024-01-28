import { Field } from 'formik'
import CityAndDistrictTR from 'utils/CityAndDistrictTR.json'
import ErrorSpan from 'utils/FormInput/ErrorSpan';
import FormInput from 'utils/FormInput/FormInput'

type Props = {
	cname: string;
	dname: string
	city: string;
	district: string;
	addressDetails: string;
}

const Address = (props: Props) => {
	return (
		<>
			<div className='lg:col-span-6 col-span-12'>
				<label htmlFor='city'>İl*</label>
				<Field as='select' className='select select-bordered w-full'
					id='city' name='city' value={props.city}>
					{CityAndDistrictTR.map(c => <option key={c.value} value={c.city}>{c.city}</option>)}
				</Field>
				<ErrorSpan name={props.cname} />
			</div>
			<div className='lg:col-span-6 col-span-12'>
				<label htmlFor='district'>İlçe*</label>
				<Field as='select' className='select select-bordered w-full'
					id='district' name='district' value={props.district}>
					<option value='' disabled>İlçe Seçin</option>
					{props.city && CityAndDistrictTR.find((c) => c.city === props.city)
						?.districts.map((d) => (<option key={d.value} value={d.district}>{d.district}</option>))}
				</Field>
				<ErrorSpan name={props.dname} />
			</div>

			<FormInput label='Adres' name='addressDetails' isRequired={false} inputStyle='textarea' textareaH='h-28'
				value={props.addressDetails} className='col-span-12' />
		</>
	)
}

export default Address
import { Field } from 'formik'
import { GetAllCityResponse } from 'models/responses/cities/getAllCityResponse';
import { GetDistrictResponse } from 'models/responses/districts/getDistrictResponse';
import { useEffect, useState } from 'react';
import cityService from 'services/cityService';
import districtService from 'services/districtService';
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

	const [cities, setCities] = useState<GetAllCityResponse | null>(null);
	const [districts, setDistricts] = useState<GetDistrictResponse | null>(null);

	const fetchCities = async () => {
		const response = await cityService.getAll(0, 81);
		setCities(response.data as GetAllCityResponse);
	}

	const fetchDistricts = async (id: string) => {
		const response = await districtService.getById(id);
		setDistricts(response.data as GetDistrictResponse);
		console.log("id"+id);
		console.log(response.data);
	}

	useEffect(() => {
		fetchCities();
		if (props.city) {
			fetchDistricts(props.city);
		} else {
			setDistricts([]);
		}
	}, [props.city]);

	return (
		<>
			<div className='lg:col-span-6 col-span-12'>
				<label htmlFor='city'>İl*</label>
				<Field as='select' className='select select-bordered w-full'
					id='city' name='city' value={props.city}>
						<option value='' disabled>İl Seçiniz</option>
					{cities?.items.slice().sort((a, b) => a.name.localeCompare(b.name)).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
				</Field>
				<ErrorSpan name={props.cname} />
			</div>
			<div className='lg:col-span-6 col-span-12'>
				<label htmlFor='district'>İlçe*</label>
				<Field as='select' className='select select-bordered w-full'
					id='district' name='district' value={props.district}>
					<option value='' disabled>İlçe Seçiniz</option>
					{districts?.slice().sort((a, b) => a.name.localeCompare(b.name)).map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
				</Field>
				<ErrorSpan name={props.dname} />
			</div>

			<FormInput label='Adres' name='addressDetails' isRequired={false} inputStyle='textarea' textareaH='h-28'
				value={props.addressDetails} className='col-span-12' />
		</>
	)
}

export default Address
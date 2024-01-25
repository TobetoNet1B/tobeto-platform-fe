import { Field } from 'formik'
import React from 'react'

type Props = {
	countryCode: string;
	phoneNumber: string;
}

const PhoneNumber = (props: Props) => {

	const countryCodes = ["+1", "+44", "+90"]

	return (
		<div className='lg:col-span-6 col-span-12'>
			<label htmlFor='phoneNumber'>Telefon Numaranız*</label>
			<div className='join w-full'>
				<Field as='select' className="select select-bordered join-item"
					id='countryCode' name='countryCode' value={props.countryCode}>
					{countryCodes.map(cc => <option key={cc} value={cc}>{cc}</option>)}
				</Field>
				<Field id='phoneNumber' type='number' name='phoneNumber' value={props.phoneNumber}
					className="input input-bordered w-full join-item" placeholder='5** *** ** **' />
			</div>
		</div>
	)
}

export default PhoneNumber
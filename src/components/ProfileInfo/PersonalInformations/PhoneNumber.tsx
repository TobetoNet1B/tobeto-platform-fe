import ErrorSpan from 'utils/FormInput/ErrorSpan';
import PhoneInput from 'react-phone-number-input'
import tr from 'react-phone-number-input/locale/tr.json'
import 'react-phone-number-input/style.css'
import './phone-number.css'

type Props = {
	name: string;
	value: string;
	handleChange?: any;
}

const PhoneNumber = (props: Props) => {
	return (
		<div className='lg:col-span-6 col-span-12'>
			<label htmlFor='phoneNumber'>Telefon Numaranız*</label>
			<PhoneInput defaultCountry="TR" labels={tr} countryCallingCodeEditable={true} international
				className='input input-bordered w-full' id={props.name} name={props.name}
				value={props.value} onChange={(value) => {
					props.handleChange({ target: { name: props.name, value } });
				}} />
			<ErrorSpan name={props.name} />
		</div>
	)
}

export default PhoneNumber
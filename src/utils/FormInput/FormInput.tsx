import './form-input.css'
import { Field } from "formik";
import ErrorSpan from './ErrorSpan';
import { SecondErrorSpan } from 'utils/FormInput/ErrorSpan';

type Props = {
	label?: string;
	name: string;
	type?: string;
	placeHolder?: string;
	isRequired?: boolean;
	value: any;
	className: string;
	maxDate?: any;
	inputStyle?: string;
	textareaH?: string;
	selectOption?: [];
}

const FormInput = (props: Props) => {
	return (
		<div className={props.className}>
			<label htmlFor={props.name}>{props.label}{props.isRequired ? "*" : ""}</label>
			{props.inputStyle === "input" &&
				<Field id={props.name} type={props.type || "text"} name={props.name} value={props.value}
					className="input input-bordered w-full" placeholder={props.placeHolder} max={props.maxDate} />
			}
			{props.inputStyle === "textarea" &&
				<Field as="textarea" id={props.name} name={props.name} value={props.value}
					className={`textarea textarea-bordered w-full ${props.textareaH}`} placeholder={props.placeHolder}></Field>
			}
			{props.inputStyle === "select" &&
				<Field as="select" id={props.name} name={props.name} value={props.value}
					className='select select-bordered w-full'>
					{props.selectOption?.map((option, index) => <option key={index} value={option}>{option}</option>)}
				</Field>
			}
			{props.name === 'identityNumber' ? <SecondErrorSpan name={props.name} /> : <ErrorSpan name={props.name} />}
		</div>
	)
}

export default FormInput
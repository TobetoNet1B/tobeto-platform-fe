import { ErrorMessage } from 'formik'

type Props = {
	name: string;
}

const ErrorSpan = (props: Props) => {
	return (
		<ErrorMessage name={props.name}>
			{message => <span className='font-light text-[#fc5c46]'>{message}*</span>}
		</ErrorMessage>
	)
}

export const SecondErrorSpan = (props: Props) => {
	return (
		<ErrorMessage name={props.name}>
			{message => <span className='italic font-extralight text-sm text-[#fc5c46]'>*{message}</span>}
		</ErrorMessage>
	)
}

export default ErrorSpan
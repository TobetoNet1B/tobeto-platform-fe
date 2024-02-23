import React from 'react'

type Props = {
	span: string;
}

const SideChecks = (props: Props) => {
	return (
		<label className="cursor-pointer label justify-start gap-x-2">
			<input type="checkbox" className="checkbox rounded-md [--chkbg:#ff442b]" />
			<span className="label-text">{props.span}</span>
		</label>
	)
}

export default SideChecks
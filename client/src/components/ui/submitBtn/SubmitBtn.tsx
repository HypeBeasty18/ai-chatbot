import React, { FC } from 'react'

import s from './SubmitBtn.module.scss'

type Props = {
	text: string
	setType?: React.Dispatch<React.SetStateAction<string>>
}

const SubmitBtn: FC<Props> = ({ setType, text, link }) => {
	
	const handleClick = () => {
		setType && setType('signup')
	}

	return (
		<button type='submit' className={s.btn} onClick={setType && handleClick}>
			{text}
		</button>
	)
}

export default SubmitBtn

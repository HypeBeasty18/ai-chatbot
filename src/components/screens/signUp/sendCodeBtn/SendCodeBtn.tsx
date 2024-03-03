import clsx from 'clsx'
import LoaderUI from 'components/ui/loaderUI/LoaderUI'
import React, { FC, useEffect, useRef, useState } from 'react'

import s from './SendCodeBtn.module.scss'

type Props = {
	setType: React.Dispatch<React.SetStateAction<string>>
	isPending: boolean
	isSuccess: boolean
}

const SendCodeBtn: FC<Props> = ({ setType, isPending, isSuccess }) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(false)
	const [timeLeft, setTimeLeft] = useState<number>(60)
	const btnRef = useRef<string>('Send code')

	useEffect(() => {
		let timer: NodeJs.Timeout
		if (isSuccess) {
			setIsDisabled(true)
			btnRef.current = 'Resend after'

			timer = setInterval(() => {
				setTimeLeft(prevTime => {
					if (prevTime === 1) {
						clearInterval(timer)
						setIsDisabled(false)
					}
					return prevTime - 1
				})
			}, 1000)
		}

		return () => {
			clearInterval(timer)
			setTimeLeft(60)
		}
	}, [isSuccess])

	const handleClick = () => {
		setType('sendcode')
	}

	return (
		<div>
			<button
				className={clsx(s.codeBtn, {
					[s.disabled]: isDisabled,
					[s.enabled]: !isDisabled
				})}
				type='submit'
				style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
				disabled={isDisabled}
				onClick={handleClick}
			>
				{!!isPending && <LoaderUI />}
				{btnRef.current}
				{!!isDisabled && <span>{timeLeft}s</span>}
			</button>
		</div>
	)
}

export default SendCodeBtn

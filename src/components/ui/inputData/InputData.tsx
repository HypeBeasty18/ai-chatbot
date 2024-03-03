import { FC } from 'react'
import { InputData } from 'types/types.data'

import s from './InputData.module.scss'

import { CiHashtag, CiLock, CiMail } from "react-icons/ci";


const InputData: FC<InputData> = ({
	error,
	type,
	register,
	name,
	...rest
}) => {
	return (
		<div className={s.container}>
			<div className={s.inputCont}>
				{name === 'username' ? <CiMail/>  : name === 'confirmEmail' ? <CiHashtag />  :  <CiLock />}
				<input type={type} {...register(name)} {...rest}  />
			</div>
			{!!error && <div className='error'>{error}</div>}
		</div>
	)
}

export default InputData

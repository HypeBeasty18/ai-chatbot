import LayoutGuest from 'components/layout/layoutGuest/LayoutGuest'
import InputData from 'components/ui/inputData/InputData'
import SubmitBtn from 'components/ui/submitBtn/SubmitBtn'
import { FC } from 'react'

import s from './SignIn.module.scss'
import { useSignIn } from './useSignIn'

const SignIn: FC = () => {
	const { onSubmit, handleSubmit, errors, register, isPending, isSuccess } =
		useSignIn()
	return (
		<LayoutGuest>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputData
					error={errors.username?.message}
					register={register}
					autoComplete='email'
					type='text'
					placeholder='Enter email'
					name='username'
				/>
				<InputData
					error={errors.password?.message}
					register={register}
					autoComplete='off'
					type='password'
					placeholder='Enter password'
					name='password'
				/>
				<SubmitBtn text='Sign In' />
			</form>
		</LayoutGuest>
	)
}

export default SignIn

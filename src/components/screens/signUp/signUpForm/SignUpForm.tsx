import InputData from 'components/ui/inputData/InputData'
import SubmitBtn from 'components/ui/submitBtn/SubmitBtn'
import { FC } from 'react'

import SendCodeBtn from '../sendCodeBtn/SendCodeBtn'
import { useSignUp } from '../useSignUp'

import s from './SignUpForm.module.scss'

const SignUpForm: FC = () => {
	const {
		setType,
		onSubmit,
		handleSubmit,
		errors,
		register,
		isPending,
		isSuccess
	} = useSignUp()

	return (
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
			<InputData
				error={errors.confirmPwd?.message}
				register={register}
				autoComplete='off'
				type='password'
				placeholder='Repeat password'
				name='confirmPwd'
			/>
			<div className={s.confirmEmail}>
				<InputData
					error={errors.confirmEmail?.message}
					register={register}
					autoComplete='off'
					type='text'
					placeholder='Code'
					name='confirmEmail'
				/>
				<SendCodeBtn
					setType={setType}
					isPending={isPending}
					isSuccess={isSuccess}
				/>
			</div>

			<SubmitBtn text='Sign Up' setType={setType} />
		</form>
	)
}

export default SignUpForm

import LayoutGuest from 'components/layout/layoutGuest/LayoutGuest'
import { FC } from 'react'

import s from './SignUp.module.scss'
import SignUpForm from './signUpForm/SignUpForm'

const SignUp: FC = () => {
	return (
		<LayoutGuest>
			<div className={s.container}>
				<SignUpForm />
			</div>
		</LayoutGuest>
	)
}

export default SignUp

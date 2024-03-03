import { UseFormRegister } from 'react-hook-form'

export type SignUpInput = {
	username: string
	password: string
	confirmPwd?: string
	confirmEmail: number
}

export interface FormFields {
	username: string;
	password: string ;
	confirmPwd: string;
	confirmEmail: number;
}

export interface InputData {
	type: string
	placeholder: string
	name: 'password' | 'username' | 'confirmPwd' | 'confirmEmail'
	error: string | undefined
	autoComplete: string
	register: UseFormRegister<FormFields>
}



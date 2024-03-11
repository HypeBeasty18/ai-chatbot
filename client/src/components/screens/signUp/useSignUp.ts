import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useCallback, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Auth } from 'services/Auth.service'
import { FormFields, SignUpInput } from 'types/types.data'
import * as Yup from 'yup'

export const useSignUp = () => {
	const [type, setType] = useState<string>('')

	let passwordSchema = Yup.string().defined()
	let confirmPwdSchema = Yup.string().defined()

	if (type === 'signup') {
		passwordSchema = passwordSchema
			.required('Password is required')
			.min(5, 'Password must be at least 5 characters long')
		confirmPwdSchema = confirmPwdSchema
			.required('Repeat the password')
			.oneOf([Yup.ref('password')], "Passwords don't match")
	}

	const formSchema = Yup.object().shape({
		username: Yup.string()
			.required('Email is required')
			.email('Incorrect email format'),
		password: passwordSchema,
		confirmPwd: confirmPwdSchema,
		confirmEmail: Yup.number()
			.transform((value, originalValue) => {
				if (
					originalValue === undefined ||
					originalValue === null ||
					originalValue === ''
				) {
					return undefined
				}
				return value
			})
			.required('Enter the verification code')
			.typeError('Invalid code')
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormFields>({ resolver: yupResolver(formSchema) })

	const { mutate, isPending, isSuccess, error } = useMutation({
		mutationKey: [type],
		mutationFn: (data: SignUpInput) =>
			type === 'signup' ? Auth.CreateUser(data) : Auth.SendCode(data)
	})

	const onSubmitCallback = useCallback<SubmitHandler<SignUpInput>>(
		userData => {
			console.log(userData)

			mutate(userData)
		},
		[mutate]
	)

	return useMemo(
		() => ({
			setType,
			onSubmit: onSubmitCallback,
			handleSubmit,
			errors,
			register,
			isPending,
			isSuccess,
			error
		}),
		[
			setType,
			onSubmitCallback,
			handleSubmit,
			errors,
			register,
			isPending,
			isSuccess,
			error
		]
	)
}

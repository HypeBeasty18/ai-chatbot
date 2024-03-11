import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useCallback, useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Auth } from 'services/Auth.service'
import { SignInInput } from 'types/types.data'
import * as Yup from 'yup'

export const useSignIn = () => {


	const formSchema = Yup.object().shape({
		username: Yup.string()
			.required('Email is required')
			.email('Incorrect email format'),
		password: Yup.string()
			.required('Password is required')
			.min(5, 'Password must be at least 5 characters long')
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<SignInInput>({ resolver: yupResolver(formSchema) })

	const { mutate, isPending, isSuccess, error } = useMutation({
		mutationKey: ['signin'],
		mutationFn: (data: SignInInput) => Auth.SignInUse(data)
	})

	const onSubmitCallback = useCallback<SubmitHandler<SignInInput>>(
		userData => {
			console.log(userData)

			mutate(userData)
		},
		[mutate]
	)

	return useMemo(
		() => ({
			onSubmit: onSubmitCallback,
			handleSubmit,
			errors,
			register,
			isPending,
			isSuccess,
			error
		}),
		[
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

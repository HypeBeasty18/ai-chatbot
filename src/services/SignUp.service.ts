import { $auth } from 'api/api'
import { SignUpInput } from 'types/types.data'

export const signUp = {
	async SendCode(userData: SignUpInput) {
		try {
			const res = await $auth.post('/', {
				username: userData.username
			})
			return res.data
		} catch (error) {
			throw new Error()
		}
	},
	async CreateUser(userData: SignUpInput) {
		try {
			const res = await $auth.post('/', {
				userData
			})
			return res.data
		} catch (error) {
			throw new Error()
		}
	}
}

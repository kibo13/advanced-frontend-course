import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword.test', () => {
	test('should return the password from state when it is defined', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: 'qwerty123',
			},
		}
		expect(getLoginPassword(state as StateSchema)).toEqual('qwerty123')
	})

	test('should return an empty string when password is not defined in state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getLoginPassword(state as StateSchema)).toEqual('')
	})
})

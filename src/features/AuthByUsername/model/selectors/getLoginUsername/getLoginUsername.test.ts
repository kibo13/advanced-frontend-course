import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
	test('should return the username when it is defined in state', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'admin',
			},
		}
		expect(getLoginUsername(state as StateSchema)).toEqual('admin')
	})

	test('should return an empty string when username is not defined in state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getLoginUsername(state as StateSchema)).toEqual('')
	})
})

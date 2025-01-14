import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
	test('should return the error message from state', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				error: 'error',
			},
		}
		expect(getLoginError(state as StateSchema)).toEqual('error')
	})

	test('should return undefined when error is not present in state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getLoginError(state as StateSchema)).toEqual(undefined)
	})
})

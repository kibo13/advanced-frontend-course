import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading.test', () => {
	test('should return true when isLoading is true in state', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				isLoading: true,
			},
		}
		expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
	})

	test('should return false when isLoading is not defined in state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
	})
})

import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter', () => {
	test('Returns the counter object from the state', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		}
		expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
	})
})

import { counterReducer, counterActions } from './counterSlice'
import { CounterSchema } from '../types/counterSchema'

describe('counterSlice', () => {
	test('Decrements the counter value when decrement action is dispatched', () => {
		const state: CounterSchema = { value: 10 }
		expect(counterReducer(state, counterActions.decrement())).toEqual({
			value: 9,
		})
	})

	test('Increments the counter value when increment action is dispatched', () => {
		const state: CounterSchema = { value: 10 }
		expect(counterReducer(state, counterActions.increment())).toEqual({
			value: 11,
		})
	})

	test('Sets the initial counter value to 1 when state is undefined and increment action is dispatched', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({
			value: 1,
		})
	})
})

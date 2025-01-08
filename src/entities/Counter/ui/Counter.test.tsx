import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './Counter'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Counter', () => {
	test('Displays the initial counter value', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		})
		expect(screen.getByTestId('value-title')).toHaveTextContent('10')
	})

	test('Increments the counter value when increment button is clicked', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		})
		userEvent.click(screen.getByTestId('increment-btn'))
		expect(screen.getByTestId('value-title')).toHaveTextContent('11')
	})

	test('Decrements the counter value when decrement button is clicked', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		})
		userEvent.click(screen.getByTestId('decrement-btn'))
		expect(screen.getByTestId('value-title')).toHaveTextContent('9')
	})
})

import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWIthTranslation/renderWithTranslation'

describe('Sidebar', () => {
	test('should render sidebar', () => {
		renderWithTranslation(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})

	test('should toggle sidebar collapse on button click', () => {
		renderWithTranslation(<Sidebar />)
		const toggleBtn = screen.getByTestId('sidebar-toggle')
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		fireEvent.click(toggleBtn)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})

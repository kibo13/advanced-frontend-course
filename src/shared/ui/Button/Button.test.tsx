import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button', () => {
	test('should render with provided text', () => {
		// eslint-disable-next-line i18next/no-literal-string
		render(<Button>TEST</Button>)
		// eslint-disable-next-line i18next/no-literal-string
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})

	test('should render with clear theme', () => {
		// eslint-disable-next-line i18next/no-literal-string
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
		// eslint-disable-next-line i18next/no-literal-string
		expect(screen.getByText('TEST')).toHaveClass('clear')
	})
})

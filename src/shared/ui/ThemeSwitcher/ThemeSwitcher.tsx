import classes from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import classNames from 'shared/lib/classNames/classNames'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ThemeButton } from '../Button/Button'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()
	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(classes.themeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	)
}

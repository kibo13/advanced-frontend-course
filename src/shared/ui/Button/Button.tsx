import { classNames, Mods } from 'shared/lib/classNames/classNames'
import classes from './Button.module.scss'
import { ButtonHTMLAttributes, memo, ReactNode } from 'react'

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	OUTLINE_RED = 'outline_red',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
	children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		square,
		size = ButtonSize.M,
		disabled,
		...otherProps
	} = props

	const mods: Mods = {
		[classes[theme]]: true,
		[classes.square]: square,
		[classes[size]]: true,
		[classes.disabled]: disabled,
	}

	return (
		<button
			className={classNames(classes.button, mods, [className, classes[theme]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	)
})

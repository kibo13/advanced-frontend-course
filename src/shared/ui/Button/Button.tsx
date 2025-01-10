import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
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
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square,
		size = ButtonSize.M,
		disabled,
		...otherProps
	} = props

	const mods: Record<string, boolean> = {
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
}

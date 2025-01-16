import { memo } from 'react'
import classes from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

export enum TextAling {
	RIGHT = 'right',
	CENTER = 'center',
	LEFT = 'left',
}

interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
	align?: TextAling
}

export const Text = memo((props: TextProps) => {
	const {
		className,
		title,
		text,
		theme = TextTheme.PRIMARY,
		align = TextAling.LEFT,
	} = props

	const mods: Record<string, boolean> = {
		[classes[theme]]: true,
		[classes[align]]: true,
	}

	return (
		<div className={classNames(classes.text, mods, [className])}>
			{title && <p className={classes.title}>{title}</p>}
			{text && <p className={classes.text}>{text}</p>}
		</div>
	)
})

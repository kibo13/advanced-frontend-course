import { CSSProperties, memo, useMemo } from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import classes from './Avatar.module.scss'

interface AvatarProps {
	className?: string
	src?: string
	alt?: string
	size?: number
}

export const Avatar = memo((props: AvatarProps) => {
	const { className, src, alt, size } = props
	const mods: Mods = {}

	const styles = useMemo<CSSProperties>(() => {
		return {
			width: size || 100,
			height: size || 100,
		}
	}, [size])

	return (
		<img
			className={classNames(classes.avatar, mods, [className])}
			style={styles}
			src={src}
			alt={alt}
		/>
	)
})

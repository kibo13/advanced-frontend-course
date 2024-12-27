import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Loader.module.scss'

interface LoaderProps {
	className?: string
}

export const Loader = ({ className }: LoaderProps) => {
	return (
		<div className={classNames(classes.loader, {}, [className])}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

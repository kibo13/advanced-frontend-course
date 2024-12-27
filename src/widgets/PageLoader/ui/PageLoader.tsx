import classes from './PageLoader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
	className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={classNames(classes.pageLoader, {}, [className])}>
			<Loader />
		</div>
	)
}

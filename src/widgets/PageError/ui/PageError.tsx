import { useTranslation } from 'react-i18next'
import classes from './PageError.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
	className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation()
	const reloadPage = () => location.reload()
	return (
		<div className={classNames(classes.pageError, {}, [className])}>
			<p>{t('Something went wrong')}</p>
			<Button onClick={reloadPage}>{t('Refresh page')}</Button>
		</div>
	)
}

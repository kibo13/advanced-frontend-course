import { useTranslation } from 'react-i18next'
import classes from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button'

interface LangSwitcherProps {
	className?: string
	short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation()
	const toggle = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames(classes.langSwitcher, {}, [className])}
			onClick={toggle}
		>
			{t(short ? 'Short lang' : 'Full lang')}
		</Button>
	)
}

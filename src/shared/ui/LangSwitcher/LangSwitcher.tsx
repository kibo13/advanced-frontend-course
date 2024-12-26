import { useTranslation } from 'react-i18next'
import classes from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from '../Button/Button'
import LangRuIcon from 'shared/assets/icons/lang-ru.svg'
import LangEnIcon from 'shared/assets/icons/lang-en.svg'

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { i18n } = useTranslation()
	const toggle = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(classes.langSwitcher, {}, [className])}
			onClick={toggle}
		>
			{i18n.language === 'ru' ? <LangRuIcon /> : <LangEnIcon />}
		</Button>
	)
}

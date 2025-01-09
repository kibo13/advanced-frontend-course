import { useTranslation } from 'react-i18next'
import classes from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
	className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation()
	return (
		<div className={classNames(classes.loginForm, {}, [className])}>
			<Input autofocus type="text" placeholder={t('Enter username')} />
			<Input type="text" placeholder={t('Enter password')} />
			<Button>{t('Sign in')}</Button>
		</div>
	)
}

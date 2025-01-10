import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import classes from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
	className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const { username, password, error, isLoading } = useSelector(getLoginState)

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value))
		},
		[dispatch]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value))
		},
		[dispatch]
	)

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }))
	}, [dispatch, username, password])

	return (
		<div className={classNames(classes.loginForm, {}, [className])}>
			<Text text={t('Auth form')} />
			{error && <Text text={error} theme={TextTheme.ERROR} />}
			<Input
				autofocus
				type="text"
				onChange={onChangeUsername}
				value={username}
				placeholder={t('Enter username')}
			/>
			<Input
				type="text"
				onChange={onChangePassword}
				value={password}
				placeholder={t('Enter password')}
			/>
			<Button
				theme={ButtonTheme.OUTLINE}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('Sign in')}
			</Button>
		</div>
	)
})

import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	return (
		<nav className={classNames(classes.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={classes.links}
				onClick={onShowModal}
			>
				{t('Sign in')}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</nav>
	)
}

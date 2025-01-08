import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev)
	}, [])

	return (
		<nav className={classNames(classes.navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={classes.links}
				onClick={onToggleModal}
			>
				{t('Sign in')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque quae
				accusamus id adipisci quaerat, minus reprehenderit voluptatem facilis
				deleniti!
			</Modal>
		</nav>
	)
}

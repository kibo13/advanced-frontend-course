import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLInk'
import classNames from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<nav className={classNames(classes.navbar, {}, [className])}>
			<div className={classes.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
					О нас
				</AppLink>
			</div>
		</nav>
	)
}

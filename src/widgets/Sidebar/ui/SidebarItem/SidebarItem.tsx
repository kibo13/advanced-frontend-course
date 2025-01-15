import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from '../../model/items'
import classes from './SidebarItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface SidebarItemProps {
	item: SidebarItemType
	collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
	const { t } = useTranslation()
	return (
		<AppLink
			theme={AppLinkTheme.SECONDARY}
			to={item.path}
			className={classNames(classes.sidebarItem, {
				[classes.collapsed]: collapsed,
			})}
		>
			<item.icon />
			<span className={classes.sidebarItemLink}>{t(item.text)}</span>
		</AppLink>
	)
})

import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Sidebar.module.scss'
import { memo, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
	className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)
	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}
	return (
		<div
			data-testid="sidebar"
			className={classNames(
				classes.sidebar,
				{ [classes.collapsed]: collapsed },
				[className]
			)}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={classes.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={classes.items}>
				{SidebarItemsList.map((item) => (
					<SidebarItem key={item.path} item={item} collapsed={collapsed} />
				))}
			</div>
			<div className={classes.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} />
			</div>
		</div>
	)
})

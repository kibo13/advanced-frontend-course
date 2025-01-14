import React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'

export interface SidebarItemType {
	path: string
	text: string
	icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		icon: MainIcon,
		text: 'Главная',
	},
	{
		path: RoutePath.about,
		icon: AboutIcon,
		text: 'О нас',
	},
	{
		path: RoutePath.profile,
		icon: ProfileIcon,
		text: 'Профиль ',
	},
]

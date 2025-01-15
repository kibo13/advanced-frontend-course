import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ProfileCard.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
	className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
	const { className } = props
	const { t } = useTranslation('profile')
	const data = useSelector(getProfileData)

	return (
		<div className={classNames(classes.profileCard, {}, [className])}>
			<div className={classes.profileCardHeader}>
				<Text title={t('Profile')} />
				<Button className={classes.profileCardBtn} theme={ButtonTheme.OUTLINE}>
					{t('Edit')}
				</Button>
			</div>
			<div className={classes.profileCardData}>
				<Input value={data?.firstName} placeholder={t('First name')} />
				<Input value={data?.lastName} placeholder={t('Last name')} />
			</div>
		</div>
	)
}

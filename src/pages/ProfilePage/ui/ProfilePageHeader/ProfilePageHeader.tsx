import classes from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
	getProfileReadonly,
	profileActions,
	updateProfileData,
} from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export const ProfilePageHeader = () => {
	const { t } = useTranslation('profile')
	const readonly = useSelector(getProfileReadonly)
	const dispatch = useAppDispatch()

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false))
	}, [dispatch])

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit())
	}, [dispatch])

	const onSave = useCallback(() => {
		dispatch(updateProfileData())
	}, [dispatch])

	return (
		<div className={classes.profilePageHeader}>
			<Text title={t('Profile')} />
			{readonly ? (
				<Button
					className={classes.profilePageBtn}
					theme={ButtonTheme.OUTLINE}
					onClick={onEdit}
				>
					{t('Edit')}
				</Button>
			) : (
				<div className={classes.profilePageBtnGroup}>
					<Button
						className={classes.profilePageBtn}
						theme={ButtonTheme.OUTLINE_RED}
						onClick={onCancelEdit}
					>
						{t('Cancel')}
					</Button>
					<Button
						className={classes.profileSaveBtn}
						theme={ButtonTheme.OUTLINE}
						onClick={onSave}
					>
						{t('Save')}
					</Button>
				</div>
			)}
		</div>
	)
}

import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import classes from './ProfileCard.module.scss'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'

interface ProfileCardProps {
	className?: string
	data?: Profile
	error?: string
	isLoading?: boolean
	readonly?: boolean
	onChangeFirstName?: (value?: string) => void
	onChangeLastName?: (value?: string) => void
	onChangeCity?: (value?: string) => void
	onChangeAge?: (value?: string) => void
	onChangeUsername?: (value?: string) => void
	onChangeAvatar?: (value?: string) => void
	onChangeCurrency?: (currency: Currency) => void
	onChangeCountry: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeFirstName,
		onChangeLastName,
		onChangeCity,
		onChangeAge,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCountry,
	} = props
	const { t } = useTranslation('profile')

	const mods: Mods = {
		[classes.editing]: !readonly,
	}

	if (isLoading) {
		return (
			<div
				className={classNames(
					classes.profileCard,
					{ [classes.loading]: true },
					[className]
				)}
			>
				<Loader />
			</div>
		)
	}

	if (error) {
		return (
			<div
				className={classNames(classes.profileCard, {}, [
					className,
					classes.error,
				])}
			>
				<Text
					theme={TextTheme.ERROR}
					title={t('Error upload')}
					text={t('Try reload page')}
					align={TextAling.CENTER}
				/>
			</div>
		)
	}

	return (
		<div className={classNames(classes.profileCard, mods, [className])}>
			<div className={classes.profileCardData}>
				{data?.avatar && (
					<div className={classes.avatarWrapper}>
						<Avatar src={data?.avatar} alt="" />
					</div>
				)}
				<Input
					value={data?.firstName}
					placeholder={t('First name')}
					onChange={onChangeFirstName}
					readonly={readonly}
				/>
				<Input
					value={data?.lastName}
					placeholder={t('Last name')}
					onChange={onChangeLastName}
					readonly={readonly}
				/>
				<Input
					value={data?.age}
					placeholder={t('Age')}
					onChange={onChangeAge}
					readonly={readonly}
				/>
				<Input
					value={data?.city}
					placeholder={t('City')}
					onChange={onChangeCity}
					readonly={readonly}
				/>
				<Input
					value={data?.username}
					placeholder={t('Username')}
					onChange={onChangeUsername}
					readonly={readonly}
				/>
				<Input
					value={data?.avatar}
					placeholder={t('Avatar')}
					onChange={onChangeAvatar}
					readonly={readonly}
				/>
				<CurrencySelect
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
				<CountrySelect
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>
			</div>
		</div>
	)
}

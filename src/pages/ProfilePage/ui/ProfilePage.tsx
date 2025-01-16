import {
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	getProfileReadonly,
	profileActions,
	ProfileCard,
	profileReducer,
} from 'entities/Profile'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const reducers: ReducersList = {
	profile: profileReducer,
}

interface ProfilePageProps {
	className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
	const { className } = props
	const dispatch = useDispatch()
	const formData = useSelector(getProfileForm)
	const error = useSelector(getProfileError)
	const isLoading = useSelector(getProfileIsLoading)
	const readonly = useSelector(getProfileReadonly)

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	const onChangeFirstName = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ firstName: value || '' }))
		},
		[dispatch]
	)

	const onChangeLastName = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ lastName: value || '' }))
		},
		[dispatch]
	)

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ city: value || '' }))
		},
		[dispatch]
	)

	const onChangeAge = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
		},
		[dispatch]
	)

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ username: value || '' }))
		},
		[dispatch]
	)

	const onChangeAvatar = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({ avatar: value || '' }))
		},
		[dispatch]
	)

	const onChangeCurrency = useCallback(
		(currency: Currency) => {
			dispatch(profileActions.updateProfile({ currency }))
		},
		[dispatch]
	)

	const onChangeCountry = useCallback(
		(country: Country) => {
			dispatch(profileActions.updateProfile({ country }))
		},
		[dispatch]
	)

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<section className={classNames('', {}, [className])}>
				<ProfilePageHeader />
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstName={onChangeFirstName}
					onChangeLastName={onChangeLastName}
					onChangeCity={onChangeCity}
					onChangeAge={onChangeAge}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
				/>
			</section>
		</DynamicModuleLoader>
	)
}

export default ProfilePage

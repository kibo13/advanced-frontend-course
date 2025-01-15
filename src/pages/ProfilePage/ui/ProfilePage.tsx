import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: ReducersList = {
	profile: profileReducer,
}

interface ProfilePageProps {
	className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
	const { className } = props
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<section className={classNames('', {}, [className])}>
				<ProfileCard />
			</section>
		</DynamicModuleLoader>
	)
}

export default ProfilePage

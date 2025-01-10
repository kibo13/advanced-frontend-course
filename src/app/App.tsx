import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App = () => {
	const { theme } = useTheme()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userActions.initAuthData())
	}, [dispatch])

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={<PageLoader />}>
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App

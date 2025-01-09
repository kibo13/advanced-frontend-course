import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'
import { classNames } from 'shared/lib/classNames/classNames'

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', {}, [])}>
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

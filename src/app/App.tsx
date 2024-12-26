import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { classNames } from 'shared/lib/classNames/classNames'
import { Suspense } from 'react'
import 'app/styles/index.scss'
import { useTranslation } from 'react-i18next'

const App = () => {
	const { theme } = useTheme()
	const { t } = useTranslation('translation')

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={<div>{t('Loading')}</div>}>
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

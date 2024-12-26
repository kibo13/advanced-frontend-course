import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
	const { t } = useTranslation('translation')
	return (
		<Suspense fallback={<div>{t('Loading')}</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route
						key={path}
						path={path}
						element={
							<Suspense fallback={<div>{t('Loading')}</div>}>
								<div className="page-wrapper">{element}</div>
							</Suspense>
						}
					/>
				))}
			</Routes>
		</Suspense>
	)
}

export default AppRouter

import { useTranslation } from 'react-i18next'

const MainPage = () => {
	const { t } = useTranslation('main')
	return (
		<section>
			<h1>{t('Main page')}</h1>
		</section>
	)
}

export default MainPage

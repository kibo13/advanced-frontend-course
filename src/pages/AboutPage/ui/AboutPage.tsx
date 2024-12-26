import { useTranslation } from 'react-i18next'

const AboutPage = () => {
	const { t } = useTranslation('about')
	return (
		<section>
			<h1>{t('About us')}</h1>
		</section>
	)
}

export default AboutPage

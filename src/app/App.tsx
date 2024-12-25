import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider'
import classNames from 'shared/lib/classNames/classNames'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import 'app/styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Theme</button>
			<nav className="navbar">
				<Link to={'/'}>Главная</Link>
				<Link to={'/about'}>О нас</Link>
			</nav>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App

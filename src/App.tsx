import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MainPageLazy from './pages/MainPage/MainPage.lazy'
import AboutPageLazy from './pages/AboutPage/AboutPage.lazy'
import { Suspense } from 'react'
import useTheme from './theme/useTheme'
import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Theme</button>
			<nav className="navbar">
				<Link to={'/'}>Главная</Link>
				<Link to={'/about'}>О нас</Link>
			</nav>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPageLazy />} />
					<Route path="/about" element={<AboutPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App

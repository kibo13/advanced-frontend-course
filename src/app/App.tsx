import { useTheme } from 'app/providers/ThemeProvider'
import { Link } from 'react-router-dom'
import { AppRouter } from './providers/router'
import classNames from 'shared/lib/classNames/classNames'
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
			<AppRouter />
		</div>
	)
}

export default App

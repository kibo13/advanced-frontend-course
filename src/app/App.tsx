import { useTheme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from './providers/router'
import classNames from 'shared/lib/classNames/classNames'
import 'app/styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Theme</button>
			<Navbar />
			<AppRouter />
		</div>
	)
}

export default App

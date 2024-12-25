import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
	return {
		port: options.port,
		historyApiFallback: true, // Включаем обработку несуществующих путей
	}
}

export default buildDevServer

import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
	return {
		port: options.port,
	}
}

export default buildDevServer

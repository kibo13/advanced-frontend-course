import HtmlWebpackPlugin from 'html-webpack-plugin'
import { WebpackPluginInstance } from 'webpack'
import { BuildOptions } from './types/config'

const buildPlugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
	]
}

export default buildPlugins

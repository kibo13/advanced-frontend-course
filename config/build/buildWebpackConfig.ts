import { BuildOptions } from './types/config'
import buildPlugins from './buildPlugins'
import buildLoaders from './buildLoaders'
import buildResolvers from './buildResolvers'

const buildWebpackConfig = (options: BuildOptions) => {
	const { paths, mode } = options

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name][contenthash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
	}
}

export default buildWebpackConfig

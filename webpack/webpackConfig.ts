import path from 'path'
import webpack from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { webpackOptimization } from './webpackOptimization'
import { webpackPlugins } from './webpackPlugins'
import { webpackRules } from './webpackRules'
import { IWebpackOptions } from './webpackTypes'

export function webpackConfig(
  options: IWebpackOptions,
): webpack.Configuration & DevServerConfiguration {
  const { isDev, mode, paths } = options
  const basePath = paths.base
  const devServer = {
    historyApiFallback: true,
    hot: true,
    open: true,
  }
  return {
    devServer: isDev ? devServer : undefined,
    devtool: isDev ? 'eval-source-map' : undefined,

    entry: paths.entry,
    mode: mode,
    module: {
      rules: webpackRules(options),
    },
    optimization: webpackOptimization(),
    output: {
      clean: true,
      filename: 'bundle.[contenthash].js',
      path: paths.build,
    },
    plugins: webpackPlugins(options),
    resolve: {
      alias: {
        '@app': path.resolve(basePath, 'app'),
        '@entities': path.resolve(basePath, 'entities'),
        '@features': path.resolve(basePath, 'features'),
        '@icons': path.resolve(basePath, 'shared/assets/icons'),
        '@images': path.resolve(basePath, 'shared/assets/images'),
        '@pages': path.resolve(basePath, 'pages'),
        '@shared': path.resolve(basePath, 'shared'),
        '@types': path.resolve(basePath, 'types'),
        '@widgets': path.resolve(basePath, 'widgets'),
      },
      extensions: ['.ts', '.tsx', '...'],
    },
  }
}

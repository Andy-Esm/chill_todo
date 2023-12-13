import path from 'path'
import webpack from 'webpack'
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import {webpackRules} from './webpackRules'
import {webpackOptimization} from './webpackOptimization'
import {IWebpackOptions} from './webpackTypes'
import {webpackPlugins} from './webpackPlugins'

export function webpackConfig(options: IWebpackOptions): webpack.Configuration & DevServerConfiguration{

  const {isDev, mode, paths} = options
  const basePath = paths.base
  const devServer = {
    open: true,
    historyApiFallback: true,
    hot: true,
  }
  return {
    mode: mode,
    entry: paths.entry,

    output: {
      path: paths.build,
      filename: 'bundle.[contenthash].js',
      clean: true
    },
    module: {
      rules: webpackRules(options)
    },
    resolve: {
      extensions: ['.ts', '.tsx', '...'],
      alias: {
        '@app': path.resolve(basePath, 'app'),
        '@pages': path.resolve(basePath, 'pages'),
        '@widgets': path.resolve(basePath, 'widgets'),
        '@features': path.resolve(basePath, 'features'),
        '@entities': path.resolve(basePath, 'entities'),
        '@shared': path.resolve(basePath, 'shared'),
        '@types': path.resolve(basePath, 'types'),
        '@icons': path.resolve(basePath, 'shared/assets/icons'),
        '@images': path.resolve(basePath, 'shared/assets/images')
      },
    },
    devtool: isDev ? 'eval-source-map' : undefined,
    devServer: isDev ? devServer : undefined,
    plugins: webpackPlugins(options),
    optimization: webpackOptimization()

  }
}

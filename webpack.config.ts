import path from 'path'
import webpack from 'webpack'
import { webpackConfig } from './webpack/webpackConfig'
import { IEnvironment, IPaths } from './webpack/webpackTypes'

export default (env: IEnvironment) => {
  const paths: IPaths = {
    base: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'src', 'index.html'),
  }

  const mode = env.mode
  const isDev = mode === 'development'

  const config: webpack.Configuration = webpackConfig({
    isDev,
    mode,
    paths,
  })
  return config
}

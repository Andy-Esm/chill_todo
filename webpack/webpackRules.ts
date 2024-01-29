import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { IWebpackOptions } from './webpackTypes'

export function webpackRules({ isDev }: IWebpackOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
    },
  }
  const styleLoader = {
    test: /\.s?css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => !!resPath.includes('.module.'),
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  }
  const assetsLoader = {
    generator: {
      filename: 'images/[name][ext][query]',
    },
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const svgLoader = {
    issuer: /\.[jt]sx?$/,
    loader: '@svgr/webpack',
    options: {
      icon: true,
    },
    test: /\.svg$/i,
  }

  return [tsLoader, styleLoader, assetsLoader, svgLoader]
}

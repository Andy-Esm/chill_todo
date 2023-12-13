import webpack from 'webpack'
import {IWebpackOptions} from './webpackTypes'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function webpackRules({isDev}:IWebpackOptions):webpack.RuleSetRule[]{
  const tsLoader =  {
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
    },
    exclude: /node_modules/,
  }
  const styleLoader = {
    test: /\.s?css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]',
            auto: (resPath:string) => !!resPath.includes('.module.'),
          },
        },
      },
      'sass-loader',
    ],
  }
  const assetsLoader =  {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'images/[name][ext][query]',
    },
  }

  const svgLoader = {
    loader: '@svgr/webpack',
    options: {
      icon: true,
    },
    issuer: /\.[jt]sx?$/,
    test: /\.svg$/i,
  }

  return[
    tsLoader,
    styleLoader,
    assetsLoader,
    svgLoader
  ]
}

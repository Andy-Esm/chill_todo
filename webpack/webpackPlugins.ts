import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import {IWebpackOptions} from './webpackTypes'
import Dotenv from 'dotenv-webpack'

export function webpackPlugins({paths, mode}:IWebpackOptions):webpack.WebpackPluginInstance[]{
  return [
    new HtmlWebpackPlugin({
      template: paths.html,

    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css'
    }),
    new Dotenv({
      path: `./.env.${mode}`,
    })
  ]
}

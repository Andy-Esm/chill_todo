import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'

export function webpackOptimization(){
  return {
    minimizer:[
      new CssMinimizerPlugin()
    ],
    runtimeChunk: false,

  }
}

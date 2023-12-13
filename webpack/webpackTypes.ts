export type ModeType = 'development' | 'production'

export interface IPaths {
  base: string
  build: string,
  entry: string
  html: string
}

export interface IEnvironment {
 mode: ModeType
}
export interface IWebpackOptions {
  mode: ModeType
  paths: IPaths
  isDev: boolean
}

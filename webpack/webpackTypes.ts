export type ModeType = 'development' | 'production'

export interface IPaths {
  base: string
  build: string
  entry: string
  html: string
}

export interface IEnvironment {
  mode: ModeType
}
export interface IWebpackOptions {
  isDev: boolean
  mode: ModeType
  paths: IPaths
}

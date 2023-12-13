import { ReactNode } from 'react'

export interface StoreUiSchema {
  popup: {
    children: ReactNode
    isActive: boolean
  }
}

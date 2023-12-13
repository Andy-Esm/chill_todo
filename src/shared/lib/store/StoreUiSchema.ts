import { ReactNode } from 'react'

export interface StoreUiSchema {
    popup: {
            isActive: boolean,
            children: ReactNode
    }
}
import { PRIMARY, RED } from 'constants/colors'
import type { ReactNode } from 'react'
import { NN100 } from './../../constants/colors'

export interface ButtonProps {
  children: ReactNode
  icon?: ReactNode
  color?: ButtonPrimary | ButtonDanger | ButtonSecondary
  disabled?: boolean
  onClick: () => void
  loading?: boolean
  width?: string
  type?: 'button' | 'submit' | 'reset'
}

export type ButtonPrimary = typeof PRIMARY
export type ButtonDanger = typeof RED
export type ButtonSecondary = typeof NN100

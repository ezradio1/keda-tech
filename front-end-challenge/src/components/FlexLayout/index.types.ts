import type { ReactNode } from 'react'

export interface FlexLayoutProps {
  children: ReactNode
  id?: string
  justify?: string
  align?: string
  gap?: string
  width?: string
  height?: string
  direction?: string
  padding?: string
  className?: string
  onClick?: () => void
}

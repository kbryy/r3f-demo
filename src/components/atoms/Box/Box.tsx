import type { ReactNode } from 'react'
import type { BaseBackground, BaseSpacing } from '@/types/ui'
import { cn } from '@/utils/cn'

type BoxSpacing = Extract<BaseSpacing, 'none' | 'sm' | 'md' | 'lg' | 'xl'>
type BoxBackground = BaseBackground

type BoxProps = {
  children: ReactNode
  padding?: BoxSpacing
  margin?: BoxSpacing
  background?: BoxBackground
  className?: string
}

const paddingClasses: Record<BoxSpacing, string> = {
  none: '',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
}

const marginClasses: Record<BoxSpacing, string> = {
  none: '',
  sm: 'm-2',
  md: 'm-4',
  lg: 'm-6',
  xl: 'm-8',
}

const backgroundClasses: Record<BoxBackground, string> = {
  none: '',
  white: 'bg-white',
  gray: 'bg-gray-100',
  card: 'bg-white',
}

export const Box = ({
  children,
  padding = 'none',
  margin = 'none',
  background = 'none',
  className = '',
}: BoxProps) => {
  return (
    <div
      className={cn(
        paddingClasses[padding],
        marginClasses[margin],
        backgroundClasses[background],
        className,
      )}
    >
      {children}
    </div>
  )
}

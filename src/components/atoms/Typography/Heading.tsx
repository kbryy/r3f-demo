import type { ReactNode } from 'react'
import type { BaseSize } from '@/types/ui'
import { cn } from '@/utils/cn'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type HeadingSize = Extract<
  BaseSize,
  'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
>

type HeadingProps = {
  level: HeadingLevel
  size?: HeadingSize
  children: ReactNode
  className?: string
}

const sizeClasses: Record<HeadingSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg font-semibold',
  xl: 'text-xl font-semibold',
  '2xl': 'text-2xl font-bold',
  '3xl': 'text-3xl font-bold',
}

const defaultSizes: Record<HeadingLevel, HeadingSize> = {
  h1: '3xl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
  h6: 'xs',
}

export const Heading = ({
  level,
  size,
  children,
  className = '',
}: HeadingProps) => {
  const Component = level
  const appliedSize = size || defaultSizes[level]

  return (
    <Component className={cn(sizeClasses[appliedSize], className)}>
      {children}
    </Component>
  )
}

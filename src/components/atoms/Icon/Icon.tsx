import type { ComponentType } from 'react'
import type { BaseSize } from '@/types/ui'
import { cn } from '@/utils/cn'

type IconSize = Extract<BaseSize, 'sm' | 'md' | 'lg'>

type IconProps = {
  icon: ComponentType<{ className?: string }>
  size?: IconSize
  className?: string
}

const sizeClasses: Record<IconSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

export const Icon = ({
  icon: IconComponent,
  size = 'md',
  className = '',
}: IconProps) => {
  return <IconComponent className={cn(sizeClasses[size], className)} />
}

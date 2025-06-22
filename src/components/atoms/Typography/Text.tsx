import type { ReactNode } from 'react'
import type { BaseColor } from '@/types/ui'
import { cn } from '@/utils/cn'

type TextVariant = 'body' | 'small' | 'caption' | 'label'
type TextColor = BaseColor

type TextProps = {
  variant?: TextVariant
  color?: TextColor
  children: ReactNode
  className?: string
}

const variantClasses: Record<TextVariant, string> = {
  body: 'text-base',
  small: 'text-sm',
  caption: 'text-xs',
  label: 'text-sm font-medium',
}

const colorClasses: Record<TextColor, string> = {
  primary: 'text-gray-900',
  secondary: 'text-gray-600',
  muted: 'text-gray-500',
  white: 'text-white',
}

export const Text = ({
  variant = 'body',
  color = 'primary',
  children,
  className = '',
}: TextProps) => {
  return (
    <span
      className={cn(variantClasses[variant], colorClasses[color], className)}
    >
      {children}
    </span>
  )
}

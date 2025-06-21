import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { BaseSize, BaseVariant } from '@/types/ui'
import { cn } from '@/utils/cn'

type ButtonVariant = BaseVariant
type ButtonSize = Extract<BaseSize, 'sm' | 'md' | 'lg' | 'full'>

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  ghost: 'hover:bg-gray-100',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
  full: 'h-10 text-sm w-full',
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center rounded font-medium disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

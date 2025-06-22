import type { ReactNode } from 'react'
import type { BaseSpacing } from '@/types/ui'
import { cn } from '@/utils/cn'

type SectionSpacing = Extract<BaseSpacing, 'none' | 'sm' | 'md' | 'lg'>

type SectionProps = {
  children: ReactNode
  spacing?: SectionSpacing
  className?: string
}

const spacingClasses: Record<SectionSpacing, string> = {
  none: '',
  sm: 'grid gap-2',
  md: 'grid gap-4',
  lg: 'grid gap-6',
}

export const Section = ({
  children,
  spacing = 'md',
  className = '',
}: SectionProps) => {
  return (
    <section className={cn(spacingClasses[spacing], className)}>
      {children}
    </section>
  )
}

import type { ReactNode } from 'react'
import type { BaseSpacing } from '@/types/ui'
import { cn } from '@/utils/cn'

type ListType = 'unordered' | 'ordered'
type ListSpacing = Extract<BaseSpacing, 'none' | 'sm' | 'md'>

type ListProps = {
  children: ReactNode
  type?: ListType
  spacing?: ListSpacing
  className?: string
}

type ListItemProps = {
  children: ReactNode
  className?: string
}

const spacingClasses: Record<ListSpacing, string> = {
  none: '',
  sm: 'grid gap-1',
  md: 'grid gap-2',
}

const typeClasses: Record<ListType, string> = {
  unordered: 'list-none',
  ordered: 'list-decimal',
}

const ListBase = ({
  children,
  type = 'unordered',
  spacing = 'sm',
  className = '',
}: ListProps) => {
  const Component = type === 'ordered' ? 'ol' : 'ul'
  return (
    <Component
      className={cn(typeClasses[type], spacingClasses[spacing], className)}
    >
      {children}
    </Component>
  )
}

const Item = ({ children, className = '' }: ListItemProps) => {
  return <li className={cn(className)}>{children}</li>
}

export const List = Object.assign(ListBase, { Item })

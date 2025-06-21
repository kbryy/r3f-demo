import type { LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'

export type SceneId =
  | 'readme'
  | 'model-viewer'
  | 'basic-shapes'
  | 'lighting-demo'

export interface MenuItem {
  id: string
  label: string
  icon: LucideIcon
  description: string
  component?: ComponentType
}

import { Box, FileText } from 'lucide-react'
import { AppLayout } from '@/components/templates/AppLayoutTemplate'
import { useActiveScene } from '@/hooks/useActiveScene'
import { BasicShapes } from '@/scenes/BasicShapes'
import { ModelViewer } from '@/scenes/ModelViewer'
import { ReadMe } from '@/scenes/ReadMe'

const menuItems = [
  {
    id: 'readme',
    label: 'README',
    icon: FileText,
    description: 'プロジェクトの説明',
    component: ReadMe,
  },
  {
    id: 'model',
    label: 'GLB Model',
    icon: Box,
    description: 'GLBモデルを表示',
    component: ModelViewer,
  },
  {
    id: 'basic',
    label: 'Basic',
    icon: Box,
    description: '3D図形',
    component: BasicShapes,
  },
] as const

export const Home = () => {
  const { activeScene, setActiveScene } = useActiveScene()
  const currentItem =
    menuItems.find((item) => item.id === activeScene) || menuItems[0]
  return (
    <AppLayout
      sidebarTitle="React-Three-Fiber"
      sidebarSubtitle="デモ"
      menuItems={menuItems}
      activeItemId={activeScene}
      onItemChange={setActiveScene}
      mainContent={currentItem.component}
    />
  )
}

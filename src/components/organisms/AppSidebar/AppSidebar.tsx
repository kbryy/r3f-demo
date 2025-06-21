import { Heading, Text } from '@/components/atoms/Typography'
import { Sidebar } from '@/components/molecules/BasicSidebar'
import { Navigation } from '@/components/molecules/Navigation'
import type { MenuItem } from '@/types/scene'

type AppSidebarProps = {
  title: string
  subtitle: string
  menuItems: readonly MenuItem[]
  activeItemId: string
  onItemChange: (id: string) => void
}

export const AppSidebar = ({
  title,
  subtitle,
  menuItems,
  activeItemId,
  onItemChange,
}: AppSidebarProps) => {
  return (
    <Sidebar>
      <Sidebar.Header>
        <Heading level="h2" size="lg">
          {title}
        </Heading>
        <Text variant="small" color="secondary">
          {subtitle}
        </Text>
      </Sidebar.Header>
      <Sidebar.Main>
        <Navigation
          menuItems={menuItems}
          activeItemId={activeItemId}
          onItemChange={onItemChange}
        />
      </Sidebar.Main>
    </Sidebar>
  )
}

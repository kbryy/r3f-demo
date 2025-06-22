import { BasicLayout } from '@/components/molecules/BasicLayout'
import { AppSidebar } from '@/components/organisms/AppSidebar'
import type { MenuItem } from '@/types/scene'

type AppLayoutProps = {
  sidebarTitle: string
  sidebarSubtitle: string
  menuItems: readonly MenuItem[]
  activeItemId: string
  onItemChange: (id: string) => void
  mainContent: React.ComponentType
}

export const AppLayout = ({
  sidebarTitle,
  sidebarSubtitle,
  menuItems,
  activeItemId,
  onItemChange,
  mainContent: MainContent,
}: AppLayoutProps) => {
  return (
    <BasicLayout>
      <BasicLayout.Aside>
        <AppSidebar
          title={sidebarTitle}
          subtitle={sidebarSubtitle}
          menuItems={menuItems}
          activeItemId={activeItemId}
          onItemChange={onItemChange}
        />
      </BasicLayout.Aside>
      <BasicLayout.Main>
        <MainContent />
      </BasicLayout.Main>
    </BasicLayout>
  )
}

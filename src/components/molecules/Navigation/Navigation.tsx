import type { ComponentType } from 'react'
import { Button } from '@/components/atoms/Button'
import { Icon } from '@/components/atoms/Icon'
import { List } from '@/components/atoms/List'
import { Text } from '@/components/atoms/Typography'

type NavigationItem = {
  id: string
  label: string
  icon: ComponentType<{ className?: string }>
  description: string
}

type NavigationProps = {
  menuItems: readonly NavigationItem[]
  activeItemId: string
  onItemChange: (id: string) => void
}

export const Navigation = ({
  menuItems,
  activeItemId,
  onItemChange,
}: NavigationProps) => {
  return (
    <nav>
      <List>
        {menuItems.map((item) => (
          <List.Item key={item.id}>
            <Button
              onClick={() => onItemChange(item.id)}
              variant={item.id === activeItemId ? 'secondary' : 'ghost'}
              size={'full'}
              className="grid grid-cols-[auto_1fr] gap-2 px-2 text-left"
            >
              <Icon icon={item.icon} />
              <div className="grid">
                <Text variant="label">{item.label}</Text>
                <Text variant="caption" color="muted">
                  {item.description}
                </Text>
              </div>
            </Button>
          </List.Item>
        ))}
      </List>
    </nav>
  )
}

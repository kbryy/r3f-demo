import type { ReactNode } from 'react'
import { Box } from '@/components/atoms/Box'
import { Section } from '@/components/atoms/Section'
import { Heading } from '@/components/atoms/Typography'

type ContentAreaProps = {
  children: ReactNode
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

type ContentSectionProps = {
  title: string
  children: ReactNode
}

const ContentBase = ({ children, padding = 'lg' }: ContentAreaProps) => {
  return (
    <Box padding={padding} background="none">
      {children}
    </Box>
  )
}

const ContentSection = ({ title, children }: ContentSectionProps) => {
  return (
    <Section spacing="sm">
      <Heading level="h2" size="xl">
        {title}
      </Heading>
      {children}
    </Section>
  )
}

export const Content = Object.assign(ContentBase, { Section: ContentSection })

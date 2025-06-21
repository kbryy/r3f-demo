import type { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}
type AsideProps = {
  children: ReactNode
}
type MainProps = {
  children: ReactNode
}

const BasicLayoutBase = ({ children }: MainLayoutProps) => {
  return (
    <div className="grid grid-cols-[auto_1fr] h-screen bg-background">
      {children}
    </div>
  )
}

const Aside = ({ children }: AsideProps) => {
  return (
    <aside className="w-64 border-r border-border bg-card">{children}</aside>
  )
}

const Main = ({ children }: MainProps) => {
  return <main className="overflow-hidden">{children}</main>
}

export const BasicLayout = Object.assign(BasicLayoutBase, { Main, Aside })

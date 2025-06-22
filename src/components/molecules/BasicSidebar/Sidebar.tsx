import type { ReactNode } from 'react'

type SidebarProps = {
  children: ReactNode
}

type SidebarHeaderProps = {
  children: ReactNode
}

type SidebarMainProps = {
  children: ReactNode
}

const SidebarBase = ({ children }: SidebarProps) => {
  return <aside className="w-64 h-full bg-white border-r">{children}</aside>
}

const Header = ({ children }: SidebarHeaderProps) => {
  return <div>{children}</div>
}

const Main = ({ children }: SidebarMainProps) => {
  return <div>{children}</div>
}

export const Sidebar = Object.assign(SidebarBase, { Main, Header })

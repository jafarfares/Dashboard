import React from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from '@/components/ui/sidebar'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import type { NavItem } from './types'

/* -------------------- NavGroup -------------------- */
export function NavGroup({
  title,
  items,
}: {
  title: string
  items: NavItem[]
}) {
  const href = useLocation({ select: (location) => location.href })

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>

      <SidebarMenu>
        {items.map((item) => {
          const key = item.title

          return (
            <React.Fragment key={key}>
              {!item.items ? (
                <SidebarMenuLink item={item} href={href} />
              ) : (
                <SidebarMenuCollapsible item={item} href={href} />
              )}
            </React.Fragment>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

/* -------------------- Link Item -------------------- */
const SidebarMenuLink = ({
  item,
  href,
}: {
  item: NavItem
  href: string
}) => {
  const { setOpenMobile } = useSidebar()

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={checkIsActive(href, item)}
      >
        <Link to={item.url || ''} onClick={() => setOpenMobile(false)} >
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

/* -------------------- Collapsible -------------------- */
const SidebarMenuCollapsible = ({
  item,
  href,
}: {
  item: NavItem
  href: string
}) => {
  const { setOpenMobile } = useSidebar()

  return (
    <Collapsible
      asChild
      defaultOpen={checkIsActive(href, item, true)}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton >
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  asChild
                  isActive={checkIsActive(href, subItem)}
                >
                  <Link
                    to={subItem.url || ''}
                    onClick={() => setOpenMobile(false)}
                  >
                    {subItem.icon && <subItem.icon />}
                    <span>{subItem.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

/* -------------------- Active Checker -------------------- */
function checkIsActive(
  href: string,
  item: NavItem,
  mainNav = false
) {
  return (
    href === item.url ||
    href.split('?')[0] === item.url ||  //href.split('?') هي دالة تقسم النص الي arry 
    //href.split('?')[0] => ["/category", "page=2"] خذ اول عنص في ال array
    !!item.items?.some((i) => i.url === href) ||   //هل يوجد عنصر داخل items رابطه يساوي الرابط الحالي؟
    (mainNav &&
      href.split('/')[1] === item.url?.split('/')[1])
  )
  }
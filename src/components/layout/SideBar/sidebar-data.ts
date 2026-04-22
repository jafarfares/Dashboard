
import {
  Settings,
  Users,
  Home,
  Ticket,
  TicketCheck,
  BookOpen,
  BarChart,
  Newspaper,
  GalleryVerticalEnd,
  SquarePen
  
} from 'lucide-react'

export const sidebarData = {
  
  navGroups: [
    {
      title: 'general',
      items: [
        {
          title: 'dashboard',
          icon: Home,
          url: '/',
        },
        {
          title: 'System Management',
          icon: Settings,
          items: [
            {
              title: 'Books',
              icon: BookOpen,
              url: '/table',
            },
            {
              title: 'Authors',
              icon: SquarePen,
              url: '/authors',
            },
            {
              title: 'Category',
              icon: GalleryVerticalEnd,
              url: '/category',
            },
            {
              title: 'Tickets',
              icon: Ticket,
              url: '/tickets',
            },
          ],
      
        },
        {
          title: 'News Management',
          icon: Newspaper,
          items: [
            {
              title: 'News',
              icon: Newspaper,
              url: '/News',
            },
           
          ],
        },
        {
          title: 'User Management',
          icon: Users,
          items: [
            {
              title: 'Users',
              icon: Users,
              url: '/Users',
            },
           
          ],
        },
      ],
    },
  ],
}
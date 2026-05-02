
import {
  Settings,
  Users,
  Home,
  Ticket,
  BookOpen,
  
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
              url: '/System/Book',
            },
            {
              title: 'Authors',
              icon: SquarePen,
              url: '/System/Auther',
            },
            {
              title: 'Category',
              icon: GalleryVerticalEnd,
              url: '/System/Category',
            },
            {
              title: 'Tickets',
              icon: Ticket,
              url: '/System/Tickets',
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
              url: '/News/News',
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
              url: '/Users/Users',
            },
           
          ],
        },
      ],
    },
  ],
}
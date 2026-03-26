// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarHeader,
// } from "@/components/ui/sidebar"
// import { Button } from "../ui/button"
// export function AppSidebar() {
//   return (
//     <Sidebar className="w-64 shrink-0 border-r bg-[var(--sidebar-bg)] border-[var(--line)] text-[var(--sidebar-foreground)]">
//       <SidebarHeader>
//         <h2>Library Baghdad</h2>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup className="text-sm font-medium text-black">
//           Dashboard
//         </SidebarGroup>
//         <SidebarGroup className="text-sm font-medium text-black">
//           Create
//         </SidebarGroup>
//         <SidebarGroup className="text-sm font-medium text-black">
//           Author
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter>
//         <Button>log out</Button>
//       </SidebarFooter>
//     </Sidebar>
//   )
// }







import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { Home, Plus, User } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar className="w-50 shrink-0  text-[var(--sidebar-foreground)] ">
      
      {/* Header */}
      <SidebarHeader className="p-4 border-b border-[var(--line)]">
        <h2 className="text-lg font-semibold">Library Baghdad</h2>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="p-2 space-y-4">

        {/* Dashboard */}
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent className="space-y-1">

            <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition">
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition">
              <Plus className="w-4 h-4" />
              <span>Create</span>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition">
              <User className="w-4 h-4" />
              <span>Author</span>
            </div>

          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4 ">
        <Button className="w-full">Log out</Button>
      </SidebarFooter>

    </Sidebar>
  )
}
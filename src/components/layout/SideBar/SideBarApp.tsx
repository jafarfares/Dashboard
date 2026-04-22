// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarHeader,
//   SidebarGroupLabel,
//   SidebarGroupContent,
// } from "@/components/ui/sidebar";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// // import { Button } from "../ui/button";
// import { Button } from "#/components/ui/button";
// import { Home, Plus, User } from "lucide-react";
// import { Link } from "@tanstack/react-router";

// export function AppSidebar() {
//   const menu = [
//     { title: "Dashboard", icon: Home, to: "/" },
//     { title: "Table", icon: Plus, to: "/table" },
//     { title: "Author", icon: User, to: "/author" },
//     { title: "Category", icon: User, to: "/category" },
//   ];
//   return (
//     <Sidebar
//       className="w-50 shrink-0  text-[var(--sidebar-foreground)]  "
//       collapsible="icon"
//       variant="floating"
//     >
//       {/* Header */}
//       <SidebarHeader className="p-4 border-b border-[var(--line)]">
//         <h3 className="text-lg font-semibold">Library Baghdad</h3>
//       </SidebarHeader>

//       {/* Content */}
//       <SidebarContent className="p-2 space-y-4">
        
//           {/* Dashboard */}
//           <SidebarGroup>
//             <SidebarGroupLabel>Menu</SidebarGroupLabel>
//             <SidebarGroupContent className="space-y-1">
//               {menu.map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <Link
//                     key={i}
//                     to={item.to}
//                     className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                     activeProps={{
//                       className: "bg-[var(--sidebar-accent)] font-semibold",
//                     }}
//                   >
//                     <Icon className="w-4 h-4 text-[var(--sidebar-foreground)]" />
//                     <span className={"text-[var(--sidebar-foreground)]"}>
//                       {item.title}
//                     </span>
//                   </Link>
//                 );
//               })}
//             </SidebarGroupContent>
//           </SidebarGroup>
        
//       </SidebarContent>

//       {/* Footer */}

//       <SidebarFooter className="p-4 ">
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button className="w-full">Log out</Button>
//           </DialogTrigger>

//           <DialogContent className="sm:max-w-sm">
//             <DialogHeader>
//               <DialogTitle>Are you sure?</DialogTitle>
//               <DialogDescription>
//                 You will be logged out of your account.
//               </DialogDescription>
//             </DialogHeader>

//             <DialogFooter>
//               <DialogClose asChild>
//                 <Button variant="outline">Cancel</Button>
//               </DialogClose>

//               <Button variant="destructive">Log out</Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }

















import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { NavGroup } from "./navGroup";
import { sidebarData } from "./sidebar-data";

export function AppSidebar() {
  return (
    <TooltipProvider>
    <Sidebar collapsible="icon" variant="floating">
      {/* Header */}
      <SidebarHeader className="p-4 border-b">
        <h3 className="text-lg font-semibold">Library Baghdad</h3>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="p-2 space-y-4 ">
        {sidebarData.navGroups.map((group) => (
          <NavGroup
            key={group.title}
            title={group.title}
            items={group.items}
           
          />
        ))}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Log out</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                You will be logged out.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button variant="destructive">Log out</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SidebarFooter>
    </Sidebar>
    </TooltipProvider>
  );
}
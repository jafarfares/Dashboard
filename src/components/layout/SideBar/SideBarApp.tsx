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
    <Sidebar collapsible="none" variant="floating">
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
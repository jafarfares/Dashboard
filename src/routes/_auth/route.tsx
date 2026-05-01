import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { getToken } from "@/utils/auth";

import { SidebarProvider } from "#/components/ui/sidebar";
import AppBar from "#/components/layout/Header/AppBar";
import { AppSidebar } from "#/components/layout/SideBar/SideBarApp";

export const Route = createFileRoute("/_auth")({
  beforeLoad: () => {
    const token = getToken();

    if (!token) {
      throw redirect({ to: "/login" });
    }
  },

  component: () => (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-hidden">
        <AppSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          <AppBar />

          <main className="flex-1 p-2 overflow-x-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  ),
});


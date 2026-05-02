// import "../styles.css";
// import { Outlet, createRootRoute } from "@tanstack/react-router";
// import { SidebarProvider } from "#/components/ui/sidebar";
// import AppBar from "#/components/layout/Header/AppBar";
// // import { AppSidebar } from '#/components/layout/SideBar'
// import { AppSidebar } from "#/components/layout/SideBar/SideBarApp";
// export const Route = createRootRoute({
//   component: () => (
//     <SidebarProvider>
//       <div className="flex min-h-screen w-full overflow-hidden">
//         {" "}
//         {/* add overflow-hidden */}
//         <AppSidebar />
//         <div className="flex-1 flex flex-col min-w-0">
//           {" "}
//           {/* min-w-0 is critical */}
//           <AppBar />
//           <main className="flex-1 p-2 overflow-x-hidden">
//             <Outlet />
//           </main>
//         </div>
//       </div>
//     </SidebarProvider>
//   ),
// });




// import "../styles.css";
// import { Outlet, createRootRoute } from "@tanstack/react-router";

// export const Route = createRootRoute({
//   component: () => <Outlet />,
// });

import "../styles.css";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { SidebarProvider } from "#/components/ui/sidebar";
import AppBar from "#/components/layout/Header/AppBar";
import { AppSidebar } from "#/components/layout/SideBar/SideBarApp";
import { useRouterState } from "@tanstack/react-router";

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const showLayout = pathname !== "/login";

  if (!showLayout) {
    return <Outlet />;
  }

  return (
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
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  staticData: {
    title: "Dashboard"
  }
});
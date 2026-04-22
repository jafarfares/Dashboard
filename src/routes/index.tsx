// import { createFileRoute } from '@tanstack/react-router'
// import { SidebarProvider } from '#/components/ui/sidebar'
// import AppBar from '#/components/layout/AppBar'
// import { AppSidebar } from '#/components/layout/SideBar'
// import Home from '#/components/page/Home'
// import Category from '#/components/page/Category'
// import Tablepage from '#/components/page/tablepage'
// import Auther from '#/components/page/Auther'
// import { Outlet } from '@tanstack/react-router'
// import { createRootRoute } from '@tanstack/react-router'

// export const Route = createFileRoute ('/')({
//   component: () => (
//     <SidebarProvider>
//       <div className="flex  min-h-screen w-full">
        
//         {/* Sidebar */}
//         <AppSidebar />

//         {/* المحتوى الرئيسي */}
//         <div className="flex-1 flex flex-col ">
          
//           {/* Header يأخذ كل عرض الباقي */}
//           <AppBar />

//           {/* Main content */}
//           <main className="flex-1 p-4">
//             <Outlet />
//           </main>
//         </div>
//       </div>
//     </SidebarProvider>
//   )})


import { createFileRoute } from '@tanstack/react-router'
import Home from '#/components/page/Home'
export const Route = createFileRoute('/')({
  component: Home,
})



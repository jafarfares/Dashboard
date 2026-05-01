// import ReactDOM from 'react-dom/client'
// import { RouterProvider, createRouter } from '@tanstack/react-router'
// // import { routeTree } from './routeTree.gen'
// import { routeTree } from './routeTree.gen'

// const router = createRouter({
//   routeTree,
//   defaultPreload: 'intent',
//   scrollRestoration: true,
// })

// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }

// const rootElement = document.getElementById('app')!

// if (!rootElement.innerHTML) {
//   const root = ReactDOM.createRoot(rootElement)
//   root.render(<RouterProvider router={router} />)
// }






import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

// 👇 مهم
const queryClient = new QueryClient()

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
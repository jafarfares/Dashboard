import { createFileRoute } from '@tanstack/react-router'
import Create from '#/components/page/components/system/CreateBook'
export const Route = createFileRoute('/System/Create')({
  component: Create,
  staticData: {
    title: "Create Book"
  }
})



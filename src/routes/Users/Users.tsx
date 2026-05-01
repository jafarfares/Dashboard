import { createFileRoute } from '@tanstack/react-router'
import Users from '#/components/page/components/Users/Users'
export const Route = createFileRoute('/Users/Users')({
  component: Users,
})


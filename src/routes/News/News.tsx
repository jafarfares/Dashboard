import { createFileRoute } from '@tanstack/react-router'
import News from '#/components/page/components/News/News'
export const Route = createFileRoute('/News/News')({
  component: News,
})



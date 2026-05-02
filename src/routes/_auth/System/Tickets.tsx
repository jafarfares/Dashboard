import { createFileRoute } from '@tanstack/react-router'
import Tickets from '#/components/page/components/system/Tickets'
export const Route = createFileRoute('/_auth/System/Tickets')({
  component: Tickets,
})



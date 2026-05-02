import { createFileRoute } from '@tanstack/react-router'
import Book from '#/components/page/components/system/Book'
export const Route = createFileRoute('/_auth/System/Book')({
  component: Book,
  staticData: {
    title: "Books"
  }
})


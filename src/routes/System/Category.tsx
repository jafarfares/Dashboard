import { createFileRoute } from '@tanstack/react-router'
import Category from '#/components/page/components/system/Category'
export const Route = createFileRoute('/System/Category')({
  component: Category,
  staticData: {
    title: "Category"
  }
})

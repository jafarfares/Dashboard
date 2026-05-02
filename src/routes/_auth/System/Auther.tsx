import { createFileRoute } from '@tanstack/react-router'
import Auther from '#/components/page/components/system/Auther'
export const Route = createFileRoute('/_auth/System/Auther')({
  component: Auther,
  staticData:{
    title:"Auther"
  }
})


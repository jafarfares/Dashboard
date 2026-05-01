import { createFileRoute,redirect } from '@tanstack/react-router'
import Home from '#/components/page/Home'
import { getToken } from "@/utils/auth";
export const Route = createFileRoute('/')({
   beforeLoad: () => {
    const token = getToken();

    if (!token) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: Home,
})



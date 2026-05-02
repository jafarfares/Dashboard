import { createFileRoute, redirect } from "@tanstack/react-router";
import Login from "#/components/page/components/Login";
export const Route = createFileRoute("/login")({
  beforeLoad: () => {
    const token = localStorage.getItem("token");

    if (token) {
      throw redirect({
        to: "/",
        replace: true,
      });
    }
  },
  component: Login,
});

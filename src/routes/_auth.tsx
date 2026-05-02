import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { getToken } from "@/utils/auth";

export const Route = createFileRoute("/_auth")({
  beforeLoad: () => {
    const token = getToken();

    if (!token) {
      throw redirect({ to: "/login" });
    }
  },

  component: () => <Outlet />,
});
import { Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "#/components/ThemeToggle";
import { useSidebar } from "@/components/ui/sidebar";

import { useMatches } from "@tanstack/react-router";

export default function AppBar() {
  const { setOpenMobile } = useSidebar();

  function Breadcrumbs() {
    const matches = useMatches();//An array of all routes that are currently matched (active) for the URL

    const breadcrumbs = matches
      .map((match) => match.staticData?.title)
      .filter(Boolean);//remove any falsy values (like undefined) from the array

    return (
      <div className="flex gap-2 text-sm">
        {breadcrumbs.map((title, index) => (
          <span key={index} className="flex items-center gap-2">
            {index > 0 && <span>/</span>}
            {/* f condition is true → render the right side
              If false → render nothing */}
            <span>{title}</span>
          </span>
        ))}
      </div>
    );
  }

  return (
    <header className="w-full h-16  bg-[var(--sidebar-bg)] flex items-center justify-between px-4 sm:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden lg:hidden xl:hidden 2xl:hidden"
          onClick={() => setOpenMobile(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <h3>page   /</h3>
        <Breadcrumbs />
        </div>
        {/* <h1 className="text-lg font-semibold">MyApp</h1> */}
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
        <h3>|</h3>
        {/* <Button variant="destructive"  size="icon"> */}
        <ThemeToggle />
        {/* </Button> */}
      </div>
    </header>
  );
}

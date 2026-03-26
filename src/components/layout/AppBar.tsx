import { Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "../ThemeToggle"
export default function AppBar() {
  return (
    <header className="w-full h-16  bg-[var(--sidebar-bg)] flex items-center justify-between px-4 sm:px-6">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <button className="md:hidden lg:hidden xl:hidden 2xl:hidden">
          <Menu className="w-6 h-6" />
        </button>

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
  )
}
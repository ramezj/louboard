import Link from "next/link"
import { cn } from "@/lib/utils"
import { Icons } from "../ui/icons"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { Button } from "../ui/button"
import { buttonVariants } from "../ui/button"
import { signIn, signOut } from "next-auth/react"
import { CircleUser } from "lucide-react"
import {  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader(props:any) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center p-3 w-full max-w-full">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">

            </div>
          <nav className="flex items-center gap-2">
            {
              props.session
              ?
              <>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full bg-gray-200 hover:bg-gray-200 ">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href='/dashboard' className="cursor-pointer">
              <DropdownMenuItem className="cursor-pointer	">
                  Dashboard
                </DropdownMenuItem>
              </Link>
              <Link href='/settings'>
                <DropdownMenuItem className="cursor-pointer">
                  Settings
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <button className="w-full cursor-pointer" onClick={(() => {signOut()})}>
              <DropdownMenuItem className="cursor-pointer">
                Logout
                </DropdownMenuItem>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
                {/* <Button asChild>
                  <Link href='/dashboard'>
                  Dashboard
                  </Link>
                  </Button> */}
              </>
              : 
              <>
              <Button onClick={(() => {signIn("google")})}>Sign In</Button>
              <Button variant="outline" onClick={(() => {signIn("google")})}>Sign Up</Button>
              </>
            }
          </nav>
        </div>
      </div>
    </header>
  )
}
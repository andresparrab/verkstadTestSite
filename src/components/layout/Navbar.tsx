import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import { buttonVariants } from "../ui/button";
import { ModeToggle } from "./themes/mode-toggle";
import logo from "../../assets/logo.jpg";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#start",
    label: "Start",
  },
  {
    href: "#features",
    label: "Våra TjänsteR",
  },
  {
    href: "#about-team",
    label: "Om oss",
  },
  {
    href: "#howItWorks",
    label: "Så Fungerar Det",
  },
  {
    href: "#testimonials",
    label: "Omdömen",
  },
  {
    href: "#pricing",
    label: "Priser",
  },
  {
    href: "#contact",
    label: "Kontakt",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem>
            <a rel="noreferrer noopener" href="/" className="flex items-center">
              <img
                src={logo}
                alt="BilVerkstad Logo"
                className="h-12 max-w-[200px] object-contain"
              />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu Icon</span>
              </SheetTrigger>

              <SheetContent side={"right"}>
                <SheetHeader>
                  <SheetTitle className="flex justify-center">
                    <img
                      src={logo}
                      alt="BilVerkstad Logo"
                      className="h-12 object-contain"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-4 mt-8">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg ${buttonVariants({
                        variant: "ghost",
                      })}`}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] hover:shadow transition-colors duration-200 px-3 py-2  ${buttonVariants(
                  {
                    variant: "ghost",
                  },
                )}`}
              >
                {route.label}
              </a>
            ))}
            <ModeToggle />
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

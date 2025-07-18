"use client";
import logoImage from "@/assets/logo.svg";
import { AceModeToggle } from "@/components/layout/themes/aceMode-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function AceNavbar() {
  const navItems = [
    {
      link: "#features",
      name: "Våra Tjänster",
    },
    {
      link: "#pricing",
      name: "Priser",
    },
    {
      link: "#about-team",
      name: "Om Oss",
    },
    {
      link: "#testimonials",
      name: "Omdömen",
    },
    {
      link: "#contact",
      name: "Kontakt",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-background border-border shadow-sm">
      <div className="relative flex w-full justify-between items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-25">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center space-x-2 text-xl text-muted-foreground hover:text-foreground transition-colors duration-200 font-bold tracking-tight"
        >
          <img
            src={logoImage}
            alt="logo"
            className="h-45 mt-5 w-auto hover:scale-110 transition-transform duration-300"
          />
          <span>Stäket Mek & Däck</span>
        </a>
        <nav className="h-full flex items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-bold font-sans tracking-tight"
              >
                {item.name}
              </a>
            ))}
            <AceModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <AceModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-background border-t border-border shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-3 space-y-1">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-base font-bold font-sans text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

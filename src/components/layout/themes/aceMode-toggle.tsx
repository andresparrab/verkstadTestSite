import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/themes/theme-provider";
import { NavbarButton } from "@/components/ui/resizable-navbar";

export function AceModeToggle() {
  const { theme, setTheme } = useTheme();

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <NavbarButton
      as="button"
      variant="secondary"
      onClick={toggleTheme}
      className="p-2"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </NavbarButton>
  );
}

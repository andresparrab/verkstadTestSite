import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "./App.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/layout/themes/theme-provider.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster duration={50000} />
      <App />
    </ThemeProvider>
  </StrictMode>
);

import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Listen for system preference changes
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e) => {
      setIsDark(e.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // Apply class & DaisyUI theme
  useEffect(() => {
    const root = document.documentElement;

    // toggle tailwind dark class
    root.classList.toggle("dark", isDark);

    // set daisyui theme manually
    root.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return [isDark, setIsDark];
}

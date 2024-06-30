"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkTheme() {
  const { setTheme } = useTheme();
  return (
    <>
      <button
        className="hidden dark:block hover:text-muted-foreground"
        onClick={() => setTheme("light")}
      >
        <MoonIcon />
      </button>
      <button
        className="block dark:hidden hover:text-muted-foreground"
        onClick={() => setTheme("dark")}
      >
        <SunIcon />
      </button>
    </>
  );
}

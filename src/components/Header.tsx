"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-blue-600 dark:bg-blue-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Experto en Inteligencia Artificial</h1>
      <div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded"
        >
          {theme === "dark" ? "Claro" : "Oscuro"}
        </button>
      </div>
    </header>
  );
}

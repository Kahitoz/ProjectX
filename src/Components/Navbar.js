import { useState, useEffect } from "react";

export const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav className="border-b-2 border-black p-2 dark:border-white flex justify-between">
      <div className="flex items-center ms-2">
        <p className="font-bold dark:text-white">Teachers Club App</p>
      </div>
      <div className="flex items-center">
        <p className="dark:text-white font-bold me-2">About us</p>
        <button
          className={`p-2 bg-zinc-400 rounded-xl dark:bg-zinc-400 me-2 dark:text-white font-bold`}
          onClick={handleTheme}
        >
          {theme}
        </button>
      </div>
    </nav>
  );
};

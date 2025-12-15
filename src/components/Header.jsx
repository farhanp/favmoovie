import { Clapperboard, Moon, Sun } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [isDark, setIsDark] = useDarkMode();
  console.log(isDark);
  return (
    <header className="navbar p-4 sm:p-0 sm:pt-4 flex gap-8 sm:mx-auto max-w-300">
      <div className="flex items-center gap-2 p-0 flex-1">
        <h1
          className="btn btn-ghost text-2xl p-0 border-0 hover:shadow-none
            bg-linear-to-r from-red-700 via-red-600 to-rose-600
            dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-600
            bg-clip-text text-transparent
          "
        >
          favMoovie
        </h1>
        <Clapperboard className="dark:text-white text-black" />
      </div>
      <div className="flex cursor-pointer hover:scale-110 transition-transform ease-in duration-150">
        <button
          onClick={() => setIsDark(!isDark)}
          type="button"
          className="relative cursor-pointer w-6 h-6"
        >
          <Moon
            color="white"
            className={`absolute w-full inset-0 transition-all duration-300 transform
        ${
          isDark
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 -rotate-45"
        }
      `}
          />

          <Sun
            className={`absolute inset-0 w-full transition-all duration-300 transform
        ${
          !isDark
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 rotate-45"
        }
      `}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;

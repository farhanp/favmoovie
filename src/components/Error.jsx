import { Bug } from "lucide-react";

const Error = ({ error }) => {
  return (
    <div className="min-h-[calc(100svh-(88px+64px))] gap-6 flex flex-col justify-center items-center text-2xl sm:text-4xl">
      <Bug size={42} className="text-red-600 dark:text-yellow-600" />
      <div className="text-2xl dark:text-white text-black">{error}!</div>
      <button
        onClick={() => window.location.reload()}
        className="btn border-0
         btn-md rounded-sm 
           px-6 py-3  font-semibold text-white
  bg-linear-to-r from-red-700 via-red-600 to-rose-600
  dark:bg-linear-to-r dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-600
  transition-all duration-300
  hover:scale-[1.03]
  hover:brightness-110
  focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-amber-500"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;

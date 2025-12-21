import React from "react";

const Hero = () => {
  return (
    <div
      className="flex flex-col xl:max-w-300 items-center justify-center mx-auto gap-4 sm:gap-4
       py-6 px-5 mt-4 sm:mb-2 sm:mt-8"
    >
      <h1 className="text-4xl dark:text-white font-bold text-center">
        Discover your next{" "}
        <span
          className="bg-linear-to-r from-red-700 via-red-600 to-rose-600
            dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-600
            bg-clip-text text-transparent"
        >
          Favourite Movie
        </span>
      </h1>
      <p className="dark:text-white text-md sm:text-xl text-center mx-3 sm:mx-0">
        Search to find the perfect film for any mood. Find the film that matches
        your vibe. Grab your popcorn <span className="text-xl">🍿</span>
      </p>
    </div>
  );
};

export default Hero;

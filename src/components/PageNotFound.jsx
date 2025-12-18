import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full sm:max-w-3xl text-center">
        <div className="text-8xl mb-6">🎬</div>
        <h1
          className="sm:text-5xl text-4xl font-bold leading-normal
        bg-linear-to-r from-red-700 via-red-600 to-rose-600
            dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-600
            bg-clip-text text-transparent
        mb-3"
        >
          Nothing on This Reel
        </h1>

        <p className="dark:text-white text-md sm:text-lg mb-8 leading-relaxed">
          We searched every frame, but this movie didn’t show up. Try another
          title, maybe you could find something interesting!
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;

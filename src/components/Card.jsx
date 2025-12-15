import { Star } from "lucide-react";
import React, { useState } from "react";
import dummyPoster from "../assets/blank-poster.webp";

const Card = ({ movie }) => {
  const { Poster, Title, imdbRating: Rating } = movie;
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group touch-manipulation card w-full sm:w-[23%] rounded-xl 
        shadow-lg relative overflow-hidden
        transition-all duration-300 ease-in-out
        sm:hover:scale-110 sm:hover:z-999 cursor-pointer"
      onClick={() => {
        // 👉 only toggle on mobile
        if (window.innerWidth < 640) {
          setOpen((prev) => !prev);
        }
      }}
    >
      <figure className="relative">
        <img
          src={Poster || dummyPoster}
          onError={(e) => (e.currentTarget.src = dummyPoster)}
          className="rounded-xl min-h-105 object-cover w-full"
          alt="Movie poster"
        />

        {/* Overlay */}
        <div
          className={`
    absolute inset-0 bg-black/30 backdrop-blur-sm
    flex flex-col items-center justify-center gap-4
    transition-opacity duration-300
    opacity-0
    sm:group-hover:opacity-100
    ${open ? "opacity-100" : ""}
  `}
        >
          <Star size={80} color="gold" />
          <h1 className="font-bold text-4xl text-white">{Rating}</h1>

          <h1
            className="text-2xl font-bold text-center
      bg-linear-to-r from-red-700 via-red-600 to-rose-600
      dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-600
      bg-clip-text text-transparent"
          >
            {Title}
          </h1>
        </div>
      </figure>
    </div>
  );
};

export default Card;

import React from "react";

const MovieDetails = ({ data }) => {
  const {
    Title: title,
    Plot: plot,
    imdbRating: ratings,
    Poster: poster,
  } = data;

  return (
    <div>
      <div className="relative">
        <img
          className="h-50 w-full object-cover"
          src={poster}
          alt="Movie poster"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent"></div>
      </div>
      <div className="movie-details-section p-3">
        {" "}
        <h3 className="font-bold text-lg">
          {title} (
          <span
            className=" bg-linear-to-r from-red-700 via-red-600 to-rose-600
            dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-600
            bg-clip-text text-transparent"
          >
            {ratings}
          </span>
          )
        </h3>
        <p className="py-4">{plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;

import React from "react";

const MovieDetails = ({ data }) => {
  const { Title: title, Plot: plot, imdbRating: ratings } = data;

  return (
    <div>
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
  );
};

export default MovieDetails;

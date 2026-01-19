import { Calendar, Clock, Star } from "lucide-react";
import React from "react";
import { formatList, formatRating, formatTime } from "../utils";

const MovieDetails = ({ data }) => {
  const {
    Title: title,
    Plot: plot,
    imdbRating: ratings,
    Poster: poster,
    Year: year,
    Runtime: runtime,
    Genre: genre,
    Actors: actors,
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
      <div className="movie-details-section overflow-scroll p-3 flex flex-col gap-2">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex badge badge-outline badge-primary items-center gap-1">
            <Star fill="yellow" color="yellow" size={16} />
            <span className="text-white">{formatRating(ratings)}/10</span>
          </div>
          <div className="flex opacity-75 items-center gap-1">
            <Calendar size={16} /> <span className="text-md">{year}</span>
          </div>
          <div className="flex opacity-75 items-center gap-1">
            <Clock size={16} />{" "}
            <span className="text-md">{formatTime(runtime)}</span>
          </div>
        </div>
        <div>
          <h3>Overview</h3>
          <p className="py-4">{plot}</p>
        </div>

        {/* Genre */}
        <div className="">
          <h3>Genre</h3>
          {genre &&
            formatList(genre).map((genreEle) => (
              <div className="badge mx-1 badge-soft badge-warning">
                {genreEle}
              </div>
            ))}
        </div>

        {/* Cast */}
        <div className="">
          <h3>Cast</h3>
          {actors &&
            formatList(actors).map((actorsEle) => (
              <div className="badge mx-1 badge-soft badge-success">
                {actorsEle}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

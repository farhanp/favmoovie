import { Calendar, Clapperboard, Clock, Star } from "lucide-react";
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
    Director: director,
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
      <div className="movie-details-section overflow-scroll px-3 py-4 flex flex-col gap-4">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <div className="flex items-center gap-4">
          <div className="flex badge badge-outline badge-primary items-center gap-1">
            <Star fill="orange" color="orange" size={16} />
            <span className="dark:text-white opacity-75">
              {formatRating(ratings)}/10
            </span>
          </div>
          <div className="flex opacity-75 items-center gap-1">
            <Calendar size={16} /> <span className="text-md">{year}</span>
          </div>
          <div className="flex opacity-75 items-center gap-1">
            <Clock size={16} />{" "}
            <span className="text-md">
              {runtime === "N/A" ? "N/A" : formatTime(runtime)}
            </span>
          </div>
        </div>

        {/* Director */}
        <div className="flex flex-col gap-1">
          <h3 className="opacity-75 font-bold">Director</h3>
          <p className="text-sm">{director}</p>
        </div>

        {/* Plot - Overview */}
        <div className="flex gap-1 flex-col">
          <h3 className="opacity-75 font-bold">Overview</h3>
          <p className="text-sm">{plot}</p>
        </div>

        {/* Genre */}
        <div className="flex flex-col gap-1">
          <h3 className="opacity-75 font-bold">Genres</h3>
          <div>
            {genre &&
              formatList(genre).map((genreEle) => (
                <p className="badge mr-2 mb-3 badge-soft badge-primary dark:badge-warning">
                  {genreEle}
                </p>
              ))}
          </div>
        </div>

        {/* Cast */}
        <div className="flex flex-col gap-1">
          <h3 className="opacity-75 font-bold">Cast</h3>
          <div>
            {actors &&
              formatList(actors).map((actorsEle) => (
                <p className="badge mr-2 mb-3 badge-neutral dark:badge-soft dark:badge-success">
                  {actorsEle}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
